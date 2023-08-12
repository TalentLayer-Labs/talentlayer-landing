import { Hero } from "@/components/hero";
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
    </>
  );
}
