import {
  AcademicCapIcon,
  CheckBadgeIcon,
  CurrencyDollarIcon,
  StarIcon,
  HandRaisedIcon
} from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { DOCS_URL } from "@/constants/urls";

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
    <section>
      <Container className="flex flex-col gap-6 py-32">
        <h3 className="max-w-[44rem] text-5xl font-bold">
          advanced tools specialized for work platforms
        </h3>
        <p className="max-w-[50rem] text-lg font-bold text-base-content">
          don’t settle for retrofitting generalized developer tools or spending months building your
          backend from scratch. use the toolkit designed for work marketplaces.
        </p>
        <p className="max-w-[50rem] text-lg text-base-content-neutral">
          launch your platform fast with configurable escrow, user-owned identities, jobs and
          proposals, and more modular components. all open-source. all interoperable. focus on your
          platform’s iconic UX and stand-out features; let the engine for work marketplaces handle
          the rest.
        </p>
        <div className="mb-6 mt-10 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
          <ModuleCard
            icon={<CurrencyDollarIcon />} 
            title="escrow and dispute resolution"
            description="configurable escrow: from milestone-based to hourly payments. multiple options for dispute resolution."
            buttonLabel="escrow docs"
            buttonHref={DOCS_URL}
          />
          <ModuleCard
            icon={<HandRaisedIcon />}
            title="services & proposals system"
            description="rails for work posts, accepting proposals, and job pooling - sharing liquidity across integrated platforms to help more jobs get filled."
            buttonLabel="services docs"
            buttonHref={DOCS_URL}
          />
          <ModuleCard
            icon={<CheckBadgeIcon />}
            title="universal reviews system"
            description="a lightweight user profile and review system tailored to work reputation and composable with other identity solutions"
            buttonLabel="reveiw docs"
            buttonHref={DOCS_URL}
          />
          <ModuleCard
            icon={<StarIcon />}
            title="TalentLayer SDK"
            description="fork-able UI elements to make it faster than ever to integrate with TalentLayer. an example app to help you get started."
            buttonLabel="fork the demo app"
            buttonHref={DOCS_URL}
          />
        </div>
      </Container>
    </section>
  );
};
