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
      <IntroducationSecion />
      <ModulesSection />
      <VisionSection />
      <IntegrationsSection />
      <StarterKitSection />
      <TeamSection />
      <NewsletterSection />
    </> 
  );
}
