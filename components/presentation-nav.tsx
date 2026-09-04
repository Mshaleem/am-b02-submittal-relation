'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ModusWcButton } from '@trimble-oss/moduswebcomponents-react';

const SCREENS = [
  {
    href: '/spec-alignment',
    label: 'AM-A02: Spec Alignment',
    variant: 'outlined' as const,
  },
  {
    href: '/submittal-relation',
    label: 'AM-B02: Auto-Relate Submittals →',
    variant: 'outlined' as const,
  },
  {
    href: '/projectsight-capture',
    label: 'ProjectSight Field View (F-07)',
    variant: 'borderless' as const,
  },
];

export function PresentationNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-2 py-3" aria-label="Prototype screens">
      {SCREENS.map((screen) => {
        const current = pathname.startsWith(screen.href);
        return (
          <ModusWcButton
            key={screen.href}
            variant={screen.variant}
            color="tertiary"
            size="sm"
            aria-current={current ? 'page' : undefined}
            onButtonClick={() => router.push(screen.href)}
          >
            {screen.label}
          </ModusWcButton>
        );
      })}
    </nav>
  );
}
