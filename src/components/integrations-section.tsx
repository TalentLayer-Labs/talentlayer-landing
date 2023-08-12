import {
  AcademicCapIcon,
  CheckBadgeIcon,
  CurrencyDollarIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { DOCS_URL } from "@/constants/urls";

import { Button } from "./ui/button";

interface IntegrationCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  buttonLabel: string;
  buttonHref: string;
  className?: string;
}

const IntegrationCard = ({
  title,
  description,
  icon,
  buttonLabel,
  buttonHref,
  className,
}: IntegrationCardProps) => {
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

export const IntegrationsSection = () => {
  return (
    <section>
      <Container className="flex flex-col gap-6 py-32">
        <h3 className="max-w-[44rem] text-5xl font-bold">What are people building?</h3>
        <div className="mb-6 mt-10 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
          <IntegrationCard
            icon={<AcademicCapIcon />}
            title="Escrow and Dispute Resolution"
            description="Configurable escrow: from milestone-based to hourly payments. Multiple options for dispute resolution."
            buttonLabel="Escrow Docs"
            buttonHref={DOCS_URL}
          />
          <IntegrationCard
            icon={<CurrencyDollarIcon />}
            title="Services & Proposals System"
            description="Rails for work posts, accepting proposals, and job pooling - sharing liquidity across integrated platforms to help more jobs get filled."
            buttonLabel="Services Docs"
            buttonHref={DOCS_URL}
          />
          <IntegrationCard
            icon={<CheckBadgeIcon />}
            title="Universal Reviews System"
            description="A lightweight user profile and review system tailored to work reputation and composable with other identity solutions"
            buttonLabel="Reveiw Docs"
            buttonHref={DOCS_URL}
          />
          <IntegrationCard
            icon={<StarIcon />}
            title="TalentLayer SDK"
            description="Fork-able UI elements to make it faster than ever to integrate with TalentLayer. An example app to help you get started."
            buttonLabel="Fork the demo app"
            buttonHref={DOCS_URL}
          />
        </div>
      </Container>
    </section>
  );
};
