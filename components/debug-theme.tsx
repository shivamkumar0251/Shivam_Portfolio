"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function DebugTheme() {
  const { theme, resolvedTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="debug-theme">
      <div>Theme: {theme}</div>
      <div>Resolved: {resolvedTheme}</div>
      <div>System: {systemTheme}</div>
      <div>HTML class: {document.documentElement.className}</div>
    </div>
  )
}
