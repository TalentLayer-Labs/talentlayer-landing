import Image from "next/image";

import { Container } from "./layout/container";

export const Freelancers = () => {
  return (
    <section className="relative">
      <Container className="relative flex flex-col items-center gap-20 pb-40 pt-14 sm:pt-40 md:flex-row">
        <div className="order-2 flex flex-col gap-10">
          <h2 className="text-4xl font-bold uppercase sm:text-4xl">
            Your reputation is <a className="text-primary ">your right</a> !{" "}
          </h2>
          <h3 className="text-2xl font-bold sm:text-2xl">
            TalentLayer helps you build{" "}
            <span className="font-bold text-secondary">a reputation</span> that
            <span className="font-bold text-secondary"> you own</span>, forever.
          </h3>
          <p className="max-w-[40rem] text-xl text-base-content sm:max-w-[40rem]">
            Unlike building a reputation on freelance marketplaces, Linkedin, where these companies
            own the copyright to your reviews and sell your data for profit, YOU own your reputation
            on TalentLayer. We believe that ability to build a good reputation is a fundamental
            human right. That’s why we’re building.{" "}
          </p>
        </div>
        <div className="order-1 hidden sm:order-3 sm:block">
          <Image src="/free-freelancerz.png" width={800} height={600} alt="TalentLayer" />
        </div>
      </Container>
    </section>
  );
};
