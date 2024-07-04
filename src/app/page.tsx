import Script from "next/script";

import { Freelancers } from "@/components/freelancers";
import { Hero } from "@/components/hero";
import { IntroducationSecion } from "@/components/introduction-section";
import { MissionSection } from "@/components/mission-section";
import { ModulesSection } from "@/components/modules-section";
import { RevyouSection } from "@/components/revyou-section";
import { TeamSection } from "@/components/team-section";

export default function Home() {
  return (
    <div className="animate-in">
      <IntroducationSecion />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-G81QRSGFMR" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-G81QRSGFMR');
        `}
      </Script>
    </div>
  );
}
