import Image from "next/image";

import { Container } from "./layout/container";

export const TeamSection = () => {
  return (
    <section className="relative py-16 text-center sm:py-24">
      <Container className="flex flex-col items-center gap-10">
        <div className="order-2 flex flex-col gap-1">
          <h3 className="text-5xl font-bold uppercase">
            backed by <span className="text-secondary">the best</span>
          </h3>
          <p className="max-w-[40rem] pt-5 text-xl sm:max-w-[40rem]">
            We&apos;re proudly funded by friends and partners who believe anyone should have the
            opportunity to grow a reputation.
          </p>
        </div>
        <div className="order-4 sm:order-4">
          <Image src="/backed-by.png" width={800} height={100} alt="TalentLayer" />
        </div>
      </Container>
    </section>
  );
};
