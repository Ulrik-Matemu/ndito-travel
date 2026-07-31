'use client'

import { useEffect } from "react"
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from '@posthog/react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const consent = typeof window !== 'undefined' ? localStorage.getItem('ndito_cookie_consent') : null;

    if (process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        defaults: '2026-05-30',
        capture_pageview: false, // Handled manually via PostHogPageView for Next.js App Router
        capture_pageleave: true,
        respect_dnt: true,
        person_profiles: 'identified_only',
        session_recording: {
          maskAllInputs: true,
          maskTextSelector: '[data-private], .ph-no-capture',
        },
        loaded: (ph) => {
          if (consent === 'declined') {
            ph.opt_out_capturing();
          }
        }
      });
    }
  }, []);

  return (
    <PHProvider client={posthog}>
      {children}
    </PHProvider>
  )
}