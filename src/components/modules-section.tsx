import {
  CheckBadgeIcon,
  CurrencyDollarIcon,
  StarIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import { clsx } from "clsx";
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

const ModuleCard = ({
  title,
  description,
  icon,
  buttonLabel,
  buttonHref,
  className,
}: ModuleCardProps) => {
  return (
    <div
      className={clsx(
        "rounded-box flex flex-col items-start justify-between bg-base-300 p-6",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary-content bg-primary">
          <span className="h-8 w-8 text-primary-content">{icon}</span>
        </div>
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-base-content-neutral">{description}</p>
      </div>
      <a href={buttonHref} target="_blank" rel="noreferrer" className="block">
        <Button className="mt-8">{buttonLabel}</Button>
      </a>
    </div>
  );
};

export const ModulesSection = () => {
  return (
    <section id="tools">
      <Container className="flex flex-col gap-6 py-32">
        <h3 className="max-w-[44rem] text-5xl font-bold">
          advanced tools <span className="text-primary">specialized</span> for{" "}
          <span className="italic">work platforms</span>
        </h3>
        <p className="max-w-[50rem] text-lg font-bold text-base-content">
          TalentLayer provides modular tools to help hiring platforms go to market fast and grow
          their network of users and work opportunities.
        </p>
        <p className="max-w-[50rem] text-lg text-base-content-neutral">
          launch your platform fast with configurable escrow, user-owned identities, jobs and
          proposals, and more modular components. all open-source. all interoperable. focus on your
          platform’s iconic UX and stand-out features; let the engine for work marketplaces handle
          the rest.
        </p>
        <div className="mb-6 mt-10 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
          <ModuleCard
            icon={<StarIcon />}
            title="TalentLayer API Aggregator Endpoint"
            description="access a read-only feed of over 1 million real-time freelance jobs from major marketplaces."
            buttonLabel="request access"
            buttonHref="https://tally.so/r/wkNBLe"
          />
          <ModuleCard
            icon={<StarIcon />}
            title="TalentLayer Web 3 API"
            description="a React and Node JS SDK, complete with a UI library - designed for teams building web 3 native hiring apps"
            buttonLabel="read the docs"
            buttonHref="https://github.com/TalentLayer/talentlayer-sdk"
          />
          <ModuleCard
            icon={<CurrencyDollarIcon />}
            title="escrow and dispute resolution"
            description="configurable escrow: from milestone-based to hourly payments. multiple options for dispute resolution."
            buttonLabel="escrow docs"
            buttonHref="https://docs.talentlayer.org/basics/basics/escrow-and-dispute"
          />
          <ModuleCard
            icon={<HandRaisedIcon />}
            title="services & proposals system"
            description="rails for work posts, accepting proposals, and job pooling - sharing liquidity across integrated platforms to help more jobs get filled."
            buttonLabel="services docs"
            buttonHref="https://docs.talentlayer.org/basics/basics/jobs-and-proposals"
          />
          <ModuleCard
            icon={<CheckBadgeIcon />}
            title="universal user identity"
            description="a lightweight user profile and review system - designed to be interoperable across platforms"
            buttonLabel="reveiw docs"
            buttonHref="https://docs.talentlayer.org/basics/basics/reviews-and-reputation"
          />
        </div>
      </Container>
    </section>
  );
};
