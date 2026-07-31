'use client';

import { useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Color sequence aligned with Ndito Travel's brand aesthetic:
 * 1. Warm Amber Gold (#f59e0b)
 * 2. Deep Safari Terracotta (#b45309)
 * 3. Tanzanian Emerald (#059669)
 * 4. Rich Bronze (#d97706)
 */
const BRAND_COLORS = ['#f59e0b', '#b45309', '#059669', '#d97706', '#f59e0b'];

function NavigationLoaderContent() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Reset loader whenever route pathname or search parameters change
  useEffect(() => {
    setIsLoading(false);
  }, [pathname, searchParams]);

  // Intercept internal link clicks for instant visual feedback on slow transitions
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a') as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const targetAttr = anchor.getAttribute('target');

      // Ignore external links, new tab targets, or anchor hashes
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        targetAttr === '_blank'
      ) {
        return;
      }

      try {
        const destination = new URL(href, window.location.href);
        const current = new URL(window.location.href);

        if (
          destination.origin === current.origin &&
          (destination.pathname !== current.pathname || destination.search !== current.search)
        ) {
          setIsLoading(true);
        }
      } catch {
        if (href.startsWith('/') && href !== pathname) {
          setIsLoading(true);
        }
      }
    };

    const handleCustomStart = () => setIsLoading(true);
    const handleCustomStop = () => setIsLoading(false);

    document.addEventListener('click', handleLinkClick, { capture: true });
    window.addEventListener('start_navigation_loader', handleCustomStart);
    window.addEventListener('stop_navigation_loader', handleCustomStop);

    return () => {
      document.removeEventListener('click', handleLinkClick, { capture: true });
      window.removeEventListener('start_navigation_loader', handleCustomStart);
      window.removeEventListener('stop_navigation_loader', handleCustomStop);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center bg-transparent backdrop-blur-[1px]"
        >
          {/* Glass Card Container in Center of Screen */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-transparent backdrop-blur-xl px-7 py-5 rounded-3xl flex flex-col items-center gap-3 text-center"
          >
            {/* Center Color-Shifting Ball & Orbiting Satellites */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Outer Ambient Glow Aura */}
              

              {/* Main Center Color-Shifting Ball */}
              <motion.div
                className="w-2 h-2 rounded-full shadow-lg z-10"
                animate={{
                  backgroundColor: BRAND_COLORS,
                  scale: [1, 1.15, 0.9, 1.1, 1],
                  boxShadow: [
                    '0 0 20px rgba(245, 158, 11, 0.6)',
                    '0 0 20px rgba(180, 83, 9, 0.6)',
                    '0 0 20px rgba(5, 150, 105, 0.6)',
                    '0 0 20px rgba(217, 119, 6, 0.6)',
                    '0 0 20px rgba(245, 158, 11, 0.6)',
                  ],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* 3 Orbiting Satellites in Staggered Harmonic Motion */}
              {[0, 1, 2].map((idx) => (
                <motion.div
                  key={idx}
                  className="absolute w-1 h-1 rounded-full shadow-xs"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-5px',
                    marginLeft: '-5px',
                  }}
                  animate={{
                    backgroundColor: [
                      BRAND_COLORS[idx % BRAND_COLORS.length],
                      BRAND_COLORS[(idx + 1) % BRAND_COLORS.length],
                      BRAND_COLORS[(idx + 2) % BRAND_COLORS.length],
                      BRAND_COLORS[idx % BRAND_COLORS.length],
                    ],
                    x: [
                      Math.cos((idx * 2 * Math.PI) / 3) * 22,
                      Math.cos((idx * 2 * Math.PI) / 3 + Math.PI) * 22,
                      Math.cos((idx * 2 * Math.PI) / 3) * 22,
                    ],
                    y: [
                      Math.sin((idx * 2 * Math.PI) / 3) * 22,
                      Math.sin((idx * 2 * Math.PI) / 3 + Math.PI) * 22,
                      Math.sin((idx * 2 * Math.PI) / 3) * 22,
                    ],
                    scale: [0.8, 1.25, 0.8],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function NavigationLoader() {
  return (
    <Suspense fallback={null}>
      <NavigationLoaderContent />
    </Suspense>
  );
}

/**
 * Trigger navigation loader programmatically for custom router.push calls
 */
export function startNavigationLoader() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('start_navigation_loader'));
  }
}

export function stopNavigationLoader() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('stop_navigation_loader'));
  }
}
