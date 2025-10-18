/**
 * Analytics tracking utilities for CTA conversions
 * Tracks user interactions with key conversion points
 */

export interface CTAEvent {
  ctaName: string
  ctaType: "contact" | "book-call" | "portfolio" | "services" | "other"
  timestamp: number
  page: string
  userAgent: string
}

/**
 * Track CTA click events
 * Sends data to Netlify Forms or external analytics service
 */
export function trackCTAClick(ctaName: string, ctaType: CTAEvent["ctaType"]) {
  const event: CTAEvent = {
    ctaName,
    ctaType,
    timestamp: Date.now(),
    page: window.location.pathname,
    userAgent: navigator.userAgent,
  }

  // Log to console in development
  if (import.meta.env.DEV) {
    console.log("📊 CTA Click Tracked:", event)
  }

  // Send to analytics endpoint
  sendAnalyticsEvent(event)

  // Also track in localStorage for session analysis
  trackSessionEvent(event)
}

/**
 * Send analytics event to backend
 * Can be extended to send to Google Analytics, Mixpanel, etc.
 */
async function sendAnalyticsEvent(event: CTAEvent) {
  try {
    // Option 1: Send to Netlify Forms (hidden form)
    const data = new URLSearchParams({
      "form-name": "cta-tracking",
      "cta-name": event.ctaName,
      "cta-type": event.ctaType,
      "page": event.page,
      "timestamp": event.timestamp.toString(),
    })

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    }).catch(() => {
      // Silently fail - don't block user interaction
    })

    // Option 2: Send to Google Analytics (if available)
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "cta_click", {
        cta_name: event.ctaName,
        cta_type: event.ctaType,
        page: event.page,
      })
    }
  } catch (error) {
    // Silently fail - don't block user interaction
    if (import.meta.env.DEV) {
      console.error("Analytics error:", error)
    }
  }
}

/**
 * Track events in session storage for local analysis
 */
function trackSessionEvent(event: CTAEvent) {
  try {
    const sessionKey = "cta_events"
    const existing = sessionStorage.getItem(sessionKey)
    const events = existing ? JSON.parse(existing) : []
    events.push(event)
    sessionStorage.setItem(sessionKey, JSON.stringify(events))
  } catch (error) {
    // Silently fail if storage is unavailable
  }
}

/**
 * Get all tracked CTA events from current session
 */
export function getSessionCTAEvents(): CTAEvent[] {
  try {
    const sessionKey = "cta_events"
    const existing = sessionStorage.getItem(sessionKey)
    return existing ? JSON.parse(existing) : []
  } catch (error) {
    return []
  }
}

/**
 * Get CTA conversion summary for current session
 */
export function getCTAConversionSummary() {
  const events = getSessionCTAEvents()
  const summary = {
    totalClicks: events.length,
    byType: {} as Record<string, number>,
    byPage: {} as Record<string, number>,
    firstClickTime: events[0]?.timestamp || null,
    lastClickTime: events[events.length - 1]?.timestamp || null,
  }

  events.forEach((event) => {
    summary.byType[event.ctaType] = (summary.byType[event.ctaType] || 0) + 1
    summary.byPage[event.page] = (summary.byPage[event.page] || 0) + 1
  })

  return summary
}

/**
 * Clear session CTA events
 */
export function clearSessionCTAEvents() {
  try {
    sessionStorage.removeItem("cta_events")
  } catch (error) {
    // Silently fail
  }
}

