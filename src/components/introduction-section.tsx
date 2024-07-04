"use client";
import Image from "next/image";

import { Container } from "./layout/container";
export const IntroducationSecion = () => {
  return (
    <section className="relative py-16 text-center text-base-content sm:py-24">
      <Container className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-10 text-center">
          <div class="flex items-center justify-center">
            <img
              src="/raccoon_full_right.png"
              width="200"
              height="100"
              alt="TalentLayer"
              className="group-hover:opacity-80"
            />
          </div>
          <h3 className="pt-10 text-5xl font-bold uppercase">
            We're <br></br>
            <span className="text-primary">TalentLayer</span>
          </h3>
          <p className="max-w-[40rem] text-xl uppercase text-base-content sm:max-w-[40rem]">
            We’re a collective of developers who are building products that{" "}
            <a className="text-primary">radically change how humans work</a> together.
          </p>
          <p className="justify max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            The way we work is rapidly changing...
          </p>
          <ul className="justify max-w-[40rem] list-disc pl-5 text-left text-xl text-base-content sm:max-w-[40rem]">
            <li>
              <strong className="text-primary">fractional work is king</strong>: people are working
              more jobs for smaller durations
            </li>
            <li>
              <strong className="text-primary">off-shore is the new normal</strong>: to hire the
              best people, companies are searching at a global scale
            </li>
            <li>
              <strong className="text-primary">credentialism has ended</strong>: companies know that
              traditional credentials like degrees or certificates have are terrible indicators of
              success
            </li>
            <li>
              <strong className="text-primary">access to work is a right</strong>: governments and
              companies can not be able to prevent people from earning a living on internet
            </li>
            <li>
              <strong className="text-primary">no one needs permission</strong>: anyone can teach
              themselves anything - gatekeeping is impossible
            </li>
            <li>
              <strong className="text-primary">your reputation is yours</strong>: users will have
              ownership over their unified work history and reviews
            </li>
          </ul>
          <p className="justify max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            These patterns were kick-started by the dawn of the internet, and have been growing
            stronger each year. 🌱
          </p>
          <p className="justify max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            We’re building tools to make them go faster. 🚀
          </p>
          <p className="justify max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            Do you want to build a better future of work?
          </p>
          <p className="justify max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            Join us.
          </p>
          <p className="mx-auto max-w-[44rem] pb-5 text-lg text-primary">
            💚 the TalentLayer Core Team
          </p>
          <Image
            src="/team.png"
            width={400}
            height={100}
            alt="TalentLayer"
            className="mx-auto group-hover:opacity-80"
          />
        </div>
      </Container>
    </section>
  );
};
