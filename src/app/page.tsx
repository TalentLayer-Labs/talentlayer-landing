import Script from "next/script";

import { DiagramSection } from "@/components/diagram-section";
import { Hero } from "@/components/hero";
import { IntegrationsSection } from "@/components/integrations-section";
import { IntroducationSecion } from "@/components/introduction-section";
import { ModulesSection } from "@/components/modules-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { StarterKitSection } from "@/components/starter-kit-section";
import { TeamSection } from "@/components/team-section";
import { VisionSection } from "@/components/vision-section";

export default function Home() {
  return (
    <>
      <Hero />
      <DiagramSection />
      <ModulesSection />
      <IntroducationSecion />
      <IntegrationsSection />
      <VisionSection />
      <StarterKitSection />
      <TeamSection />
      <NewsletterSection />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-G81QRSGFMR" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-G81QRSGFMR');
        `}
      </Script>
    </>
  );
}
