import Image from "next/image";

import { Container } from "./layout/container";

export const TeamSection = () => {
  return (
    <section className="relative py-16 text-center sm:py-24">
      <Container className="flex flex-col items-center gap-10">
        <div className="order-2 flex flex-col gap-1">
          <h3 className="text-5xl font-bold">
            an <span className="text-primary">open-source</span> ethos
          </h3>
          <p className="max-w-[40rem] pt-5 text-xl sm:max-w-[40rem]">
            TalentLayer was built by a thriving community of open-source developers. are you ready
            to join our ranks? start contributing today.
          </p>
        </div>
        <div className="order-1 sm:order-1">
          <Image src="/people.png" width={800} height={100} alt="TalentLayer" />
        </div>
        <div className="order-2 flex flex-col gap-1">
          <h3 className="text-5xl font-bold">
            proudly <span className="text-primary">funded</span> by...
          </h3>
          <p className="max-w-[40rem] pt-5 text-xl sm:max-w-[40rem]">
            TalentLayer has been funded by grants from The European Union, Lens Protocol, Filecoin
            Foundation and others and investment from Protocol Labs, Kleros Collective, and Outlier
            Ventures.
          </p>
        </div>
        <div className="order-4 sm:order-4">
          <Image src="/grants.png" width={800} height={100} alt="TalentLayer" />
        </div>
      </Container>
    </section>
  );
};
