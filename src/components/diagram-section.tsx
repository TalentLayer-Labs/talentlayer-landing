import Image from "next/image";

import { Container } from "./layout/container";

export const DiagramSection = () => {
  return (
    <section className="relative bg-base-content py-16 text-center text-base-100 sm:py-24">
      <Container className="flex flex-col items-center gap-10">
        <div className="order-2 flex flex-col gap-10">
          <Image
            src="/diagram.png"
            width={700}
            height={100}
            alt="TalentLayer"
            className="group-hover:opacity-80"
          />
          <h3 className="text-5xl font-bold">
            build on a <span className="italic text-primary">solid foundation</span>
          </h3>
          <p className="max-w-[40rem] text-xl text-base-100/80 sm:max-w-[40rem]">
            TalentLayer is an off-the-shelf, open source, composable developer toolkit for building
            interoperable freelance, gig, and hiring platforms.
          </p>
        </div>
      </Container>
    </section>
  );
};
