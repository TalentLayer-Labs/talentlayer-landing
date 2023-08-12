import { Hero } from "@/components/hero";
import { IntegrationsSection } from "@/components/integrations-section";
import { IntroducationSecion } from "@/components/introduction-section";
import { ModulesSection } from "@/components/modules-section";
import { VisionSection } from "@/components/vision-section";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroducationSecion />
      <ModulesSection />
      <VisionSection />
      <IntegrationsSection />
    </>
  );
}
