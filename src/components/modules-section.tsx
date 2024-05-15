import {
  CheckBadgeIcon,
  CurrencyDollarIcon,
  StarIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

import { Container } from "@/components/layout/container";

import { Button } from "./ui/button";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  buttonLabel: string;
  buttonHref: string;
  className?: string;
}

export const ModulesSection = () => {
  return (
    <section id="tools">
      <Container className="flex flex-col gap-6 py-32">
        <h3 className=" max-w-[44rem] text-5xl font-bold uppercase">
          A new kind of <span className="text-secondary">reputation network</span> for digital
          workers
        </h3>
        <Image
          src="/diagram1.png"
          width={700}
          height={100}
          alt="TalentLayer"
          className="group-hover:opacity-80"
        />
        <p className="max-w-[50rem] text-lg font-bold text-base-content">
          TalentLayer is a protocol network for storing and accessing verified work history and
          reviews.
        </p>
        <p className="max-w-[50rem] text-lg text-base-content-neutral">
          TalentLayer leverages blockchain to store review information in a user-owned way, and
          verify payments have been made between hirers and workers.
        </p>
      </Container>
    </section>
  );
};
