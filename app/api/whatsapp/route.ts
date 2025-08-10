import { NextResponse } from "next/server"

type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
    const toNumber = process.env.WHATSAPP_TO || "917668955567"

    if (!accessToken || !phoneNumberId) {
      return NextResponse.json(
        { error: "WhatsApp credentials are not configured" },
        { status: 500 }
      )
    }

    const text = [
      "New Portfolio Contact via Form",
      "",
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Subject: ${body.subject}`,
      `Message: ${body.message}`,
    ].join("\n")

    // Send message via WhatsApp Cloud API
    const graphUrl = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`
    const res = await fetch(graphUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: toNumber,
        type: "text",
        text: { body: text },
      }),
    })

    if (!res.ok) {
      const errorText = await res.text()
      return NextResponse.json(
        { error: "Failed to send WhatsApp message", details: errorText },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 })
  }
}

