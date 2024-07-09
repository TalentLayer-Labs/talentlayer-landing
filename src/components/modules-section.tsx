import Image from "next/image";

import { Container } from "@/components/layout/container";

export const ModulesSection = () => {
  return (
    <section id="tools">
      <Container className="flex flex-col gap-6 py-32">
        <h3 className="mx-auto max-w-[44rem] text-5xl font-bold uppercase">
          A new kind of <span className="text-secondary">reputation network</span> for digital work
        </h3>
        <Image
          src="/diagram1.png"
          width={700}
          height={100}
          alt="TalentLayer"
          className="mx-auto group-hover:opacity-80"
        />
        <p className="mx-auto max-w-[44rem] text-lg font-bold text-base-content">
          TalentLayer is a protocol network for storing and accessing verified work history and
          reviews.
        </p>
        <p className="mx-auto max-w-[44rem] text-lg text-base-content-neutral">
          Protocol networks like SMTP for email and DNS for domain names created the foundation of
          the open internet. These networks are united by shared principles; users own their data,
          users can use their data on any supported app, and any developer can build an app on the
          network.{" "}
        </p>
        <p className="mx-auto max-w-[44rem] text-lg text-base-content-neutral">
          TalentLayer leverages decentralized networks to store review information in a user-owned
          way, and verify payments have been made between hirers and workers. TalentLayer creates a
          viable alternative to siloed reputations that exist in modern hiring platforms.
        </p>
        {/* 
        <h3 className="mx-auto max-w-[44rem] text-2xl  font-bold sm:text-2xl">
          Meet , <span className="font-bold text-primary">$TLT</span> the native token of the
          <span className="font-bold text-primary"> TalentLayer protocol network</span>
        </h3>
        <p className="mx-auto max-w-[44rem] text-lg text-base-content-neutral">
          $TLT helps TalentLayer&apos;s work reputation ecosystem operate fairly by incentivizing
          network participants to be honest and to sort out fake reviews.
        </p>
        <Image
          src="/economics.png"
          width={700}
          height={100}
          alt="TalentLayer"
          className="mx-auto group-hover:opacity-80"
        />
         */}
      </Container>
    </section>
  );
};
