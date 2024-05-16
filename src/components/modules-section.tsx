import Image from "next/image";

import { Container } from "@/components/layout/container";

export const ModulesSection = () => {
  return (
    <section id="tools">
      <Container className="flex flex-col gap-6 py-32">
        <h3 className="mx-auto max-w-[44rem] text-5xl font-bold uppercase">
          A new kind of <span className="text-secondary">reputation network</span> 4 digital workers
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
          TalentLayer leverages blockchain to store review information in a user-owned way, and
          verify payments have been made between hirers and workers.
        </p>
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
      </Container>
    </section>
  );
};
