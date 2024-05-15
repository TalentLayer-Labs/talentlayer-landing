"use client";
import Image from "next/image";

import { Container } from "./layout/container";
export const IntroducationSecion = () => {
  return (
    <section className="relative py-16 text-center text-base-content sm:py-24">
      <Container className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-10 text-center">
          <Image
            src="/bubbles.png"
            width={700}
            height={100}
            alt="TalentLayer"
            className="group-hover:opacity-80"
          />
          <h3 className="pt-10 text-5xl font-bold uppercase">
            How do we know<br></br>
            <span className="text-primary">who to trust</span>
            <br></br>on the internet?
          </h3>
          <p className="max-w-[40rem] text-xl text-base-content sm:max-w-[40rem]">
            Each year more and more work and hiring happens online, but how we understand who to
            work with is stuck in the past.
          </p>
        </div>
        <div className="mb-6 mt-10 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-box flex flex-col items-start justify-between bg-black p-6">
            <div className="flex flex-col gap-4">
              <div className="flex size-14 items-center justify-center rounded-full">
                <Image
                  src="/discovery.png"
                  width={700}
                  height={100}
                  alt="TalentLayer"
                  className="group-hover:opacity-80"
                />
              </div>
              <h4 className="text-xl font-bold">DISCOVERY IS FRAGMENTED</h4>
              <p className="text-base-content-neutral">
                Hirers & workers duplicate profiles on dozens of platforms, and still struggle to
                connect.
              </p>
            </div>
          </div>
          <div className="rounded-box flex flex-col items-start justify-between bg-black p-6">
            <div className="flex flex-col gap-4">
              <div className="flex size-14 items-center justify-center rounded-full">
                <Image
                  src="/reputation.png"
                  width={700}
                  height={100}
                  alt="TalentLayer"
                  className="group-hover:opacity-80"
                />
              </div>
              <h4 className="text-xl font-bold">IT&apos;S HARD TO VERIFY REPUTATIONS</h4>
              <p className="text-base-content-neutral">
                Worker profiles aren&apos;t trusted. <br></br>Resumes lie.<br></br> Linkedin reviews
                are fake.
              </p>
            </div>
          </div>
          <div className="rounded-box flex flex-col items-start justify-between bg-black p-6">
            <div className="flex flex-col gap-4">
              <div className="flex size-14 items-center justify-center rounded-full">
                <Image
                  src="/middlemen.png"
                  width={700}
                  height={100}
                  alt="TalentLayer"
                  className="group-hover:opacity-80"
                />
              </div>
              <h4 className="text-xl font-bold">MIDDLEMEN GATEKEEP WORKERS</h4>
              <p className="text-base-content-neutral">
                Recruiters & platforms profiteer on hirers not knowing who to trust.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
