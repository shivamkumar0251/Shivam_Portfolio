'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { GA_TRACKING_ID, pageview } from '../lib/gtag'

export default function AnalyticsProvider() {
  const pathname = usePathname()

  useEffect(() => {
    if (!GA_TRACKING_ID) return
    pageview(pathname)
  }, [pathname])

  return null
}
