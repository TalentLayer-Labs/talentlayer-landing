"use client";

import Image from "next/image";

import { Container } from "./layout/container";
import { Button } from "./ui/button";
export const RevyouSection = () => {
  return (
    <section className="relative py-16 text-center text-base-content sm:py-24">
      <Container className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-10 text-center">
          <Image
            src="/revyou.png"
            width={400}
            height={100}
            alt="TalentLayer"
            className="mx-auto group-hover:opacity-80"
          />
          <h3 className="pt-10 text-5xl font-bold uppercase">
            <span className="text-primary">Collect reviews. </span> Get hired.{" "}
            <span className="text-secondary">Keep your freedom.</span>
          </h3>
          <p className="mx-auto max-w-[40rem] text-center text-xl text-base-content sm:max-w-[40rem]">
            Revyou is the easiest way to get verified client reviews as a freelancer, and earn
            rewards for building a reputation. Revyou gives freelancers the tools to build a
            reputation and discover clients without sacrificing their freedom.
          </p>
          <a rel="noreferrer" target="_blank" href="https://www.revyou.xyz/" className="flex-1">
            <Button
              color="secondary"
              variant="prime"
              className="whitespace-nowrap text-black"
              size="lg" // Adjusted size to small
            >
              get Revyou
            </Button>
          </a>
        </div>
        <div className="mb-6 mt-10 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-box flex flex-col items-start justify-between bg-black p-6">
            <div className="flex flex-col gap-4">
              <div className="size-14 flex items-center justify-center rounded-full">
                <Image
                  src="/stars.png"
                  width={700}
                  height={100}
                  alt="TalentLayer"
                  className="group-hover:opacity-80"
                />
              </div>
              <h4 className="text-xl font-bold">Social proof closes more deals!</h4>
              <p className="text-base-content-neutral">
                When potential clients see that others have trusted you in the past with good
                results, they are more likely to work with you.
              </p>
            </div>
          </div>
          <div className="rounded-box flex flex-col items-start justify-between bg-black p-6">
            <div className="flex flex-col gap-4">
              <div className="size-14 flex items-center justify-center rounded-full">
                <Image
                  src="/money.png"
                  width={700}
                  height={100}
                  alt="TalentLayer"
                  className="group-hover:opacity-80"
                />
              </div>
              <h4 className="text-xl font-bold">Charge higher rates and earn more income.</h4>
              <p className="text-base-content-neutral">
                Freelancers that display a track record of success stories can charge up to 300%
                more than freelancers who don’t.
              </p>
            </div>
          </div>
          <div className="rounded-box flex flex-col items-start justify-between bg-black p-6">
            <div className="flex flex-col gap-4">
              <div className="size-14 flex items-center justify-center rounded-full">
                <Image
                  src="/tokens2.png"
                  width={700}
                  height={100}
                  alt="TalentLayer"
                  className="group-hover:opacity-80"
                />
              </div>
              <h4 className="text-xl font-bold">
                Earn <span className="text-primary">REP points</span> by building your reputation
              </h4>
              <p className="text-base-content-neutral">
                Earn REP points by growing your reputation on Revyou! In the future, REP points will
                be redeemable for special features, cash rewards, and more.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
