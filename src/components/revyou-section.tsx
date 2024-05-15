"use client";

import {
  CheckBadgeIcon,
  CurrencyDollarIcon,
  StarIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import * as Dialog from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import Image from "next/image";
import { useState } from "react";
import { ReactNode } from "react";

import { REVYOU_NOTION } from "@/constants/urls";

import { Container } from "./layout/container";
import { Button } from "./ui/button";
export const RevyouSection = () => {
  const [showVideo, setShowVideo] = useState(false);

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
          "rounded-box flex flex-col items-start justify-between bg-black p-6",
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
    <section className="bg-dark relative py-16 text-center text-base-content sm:py-24">
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
            <span className="text-primary">Earn rewards</span> by building{" "}
            <span className="text-secondary">your reputation</span>
          </h3>
          <p className="mx-auto max-w-[40rem] text-center text-xl text-base-content sm:max-w-[40rem]">
            Revyou is the easiest way to get verified client reviews as a freelancer, and earn
            rewards for building a reputation. Review is the flagship Social Fi app built on
            TalentLayer.
          </p>
          <a rel="noreferrer" className="flex-1">
            <Button
              color="neutral"
              variant="prime"
              className="whitespace-nowrap text-black"
              size="lg" // Adjusted size to small
            >
              coming soon
            </Button>
          </a>
        </div>
        <div className="order:3 mb-6 mt-10 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-box flex flex-col items-start justify-between bg-black p-6">
            <div className="flex flex-col gap-4">
              <div className="flex size-14 items-center justify-center rounded-full">
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
              <div className="flex size-14 items-center justify-center rounded-full">
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
              <div className="flex size-14 items-center justify-center rounded-full">
                <Image
                  src="/tokens1.png"
                  width={700}
                  height={100}
                  alt="TalentLayer"
                  className="group-hover:opacity-80"
                />
              </div>
              <h4 className="text-xl font-bold">
                Earn <span className="text-primary">$REP</span> by building your reputation on
                Revyou!
              </h4>
              <p className="text-base-content-neutral">
                $REP is the native reward token of the Revyou app. It’s earned by receiving and
                giving reviews to people in your network.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
