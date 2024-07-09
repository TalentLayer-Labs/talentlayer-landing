import Script from "next/script";
import { IntroducationSecion } from "@/components/introduction-section";

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
