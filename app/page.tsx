'use client';

import { useRouter } from 'next/navigation';
import {
  ModusWcButton,
  ModusWcCard,
  ModusWcIcon,
  ModusWcTypography,
} from '@trimble-oss/moduswebcomponents-react';
import { ORG_NAME, PROJECT_NAME } from '@/components/app-shell';
import { PresentationNav } from '@/components/presentation-nav';

export default function ProjectSetupPage() {
  const router = useRouter();

  return (
    <div className="page-section">
      <PresentationNav />
      <section className="page-section">
        <div className="min-w-0">
          <ModusWcTypography hierarchy="h1" size="2xl" weight="semibold" label="Project setup" />
          <ModusWcTypography
            hierarchy="p"
            size="md"
            customClass="!m-0 text-[var(--modus-wc-color-base-content-low-contrast)]"
            label={`${ORG_NAME} · ${PROJECT_NAME}. Relate approved ProjectSight submittals to staged ALCS assets.`}
          />
        </div>
      </section>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="min-w-0">
          <ModusWcCard bordered={true} padding="comfortable">
            <div slot="title" className="flex w-full min-w-0 items-center justify-start gap-2">
              <ModusWcIcon name="file_type_pdf" decorative />
              <ModusWcTypography
                hierarchy="h2"
                size="md"
                weight="semibold"
                label="AM-B02 Submittal relation"
              />
            </div>
            <ModusWcTypography
              hierarchy="p"
              size="md"
              label="Auto-relate SUB-042 to staged hydronic pumps and enrich missing manufacturer, model, and performance attributes."
            />
            <div
              slot="footer"
              className="flex justify-end px-[var(--modus-wc-spacing-md)] pt-[var(--modus-wc-spacing-md)] pb-[var(--modus-wc-spacing-md)]"
            >
              <ModusWcButton
                variant="filled"
                color="primary"
                size="sm"
                onButtonClick={() => router.push('/submittal-relation')}
              >
                <ModusWcIcon name="file_type_pdf" size="xs" decorative />
                Open submittal relation
              </ModusWcButton>
            </div>
          </ModusWcCard>
        </div>
        <div className="min-w-0">
          <ModusWcCard bordered={true} padding="comfortable">
            <div slot="title" className="flex w-full min-w-0 items-center justify-start gap-2">
              <ModusWcIcon name="info" decorative />
              <ModusWcTypography hierarchy="h2" size="md" weight="semibold" label="Trimble Identity" />
            </div>
            <ModusWcTypography hierarchy="p" size="md" label="Signed in as Alex Rivera (alex.rivera@trimble.com)." />
            <ModusWcTypography
              hierarchy="p"
              size="sm"
              customClass="!m-0 text-[var(--modus-wc-color-base-content-low-contrast)]"
              label="Organization and project context stay visible in the navbar on every screen."
            />
          </ModusWcCard>
        </div>
      </div>
    </div>
  );
}
