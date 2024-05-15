"use client";

import { CurrencyDollarIcon, StarIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

import { Container } from "./layout/container";
export const IntroducationSecion = () => {
  interface ModuleCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    buttonLabel: string;
    buttonHref: string;
    className?: string;
  }

  const ModuleCard = ({ title, description, icon, className }: ModuleCardProps) => {
    return (
      <div
        className={clsx(
          "rounded-box flex flex-col items-start justify-between bg-secondary p-6",
          className,
        )}
      >
        <div className="flex flex-col gap-4">
          <div className="flex size-14 items-center justify-center rounded-full border-2 border-primary-content bg-primary">
            <span className="size-8 text-primary-content">{icon}</span>
          </div>
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="text-base-content-neutral">{description}</p>
        </div>
      </div>
    );
  };

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
          <ModuleCard
            icon="/bubbles.png"
            title="DISCOVERY"
            description="Hirers & workers duplicate profiles on dozens of platforms, and still struggle to connect."
            buttonLabel="request access"
            buttonHref="https://tally.so/r/wkNBLe"
          />
          <ModuleCard
            icon={<StarIcon />}
            title="REPUTATION"
            description="Worker profiles aren't trusted. Resumes lie. Linkedin reviews are fake"
            buttonLabel="read the docs"
            buttonHref="https://github.com/TalentLayer/talentlayer-sdk"
          />
          <ModuleCard
            icon={<CurrencyDollarIcon />}
            title="MIDDLEMEN"
            description="Recruiters & platforms profiteer on hirers not knowing who to trust.."
            buttonLabel="escrow docs"
            buttonHref="https://docs.talentlayer.org/basics/basics/escrow-and-dispute"
          />
        </div>
      </Container>
    </section>
  );
};
