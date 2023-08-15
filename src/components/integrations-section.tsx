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

import { Button, ButtonProps } from "./ui/button";

import Image from "next/image";

interface IntegrationCardProps {
  title: string;
  description: string;
  icon: string;
  buttonLabel: string;
  buttonHref: string;
  className?: string;
  tag: string;
  tagColor: ButtonColor;
}

type ButtonColor = ButtonProps['color']

const IntegrationCard = ({
  title,
  description,
  icon,
  buttonLabel,
  buttonHref,
  className,
  tag,
  tagColor,
}: IntegrationCardProps) => {
  return (
    <div
      className={clsx(
        "rounded-box flex flex-col items-start justify-between bg-base-300 p-6",
        className,
      )}
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="relative h-[200px] w-full">
          <Image src={icon} alt="platform image" className="rounded-box object-cover" fill />
        </div>
        <a target="_blank" rel="noreferrer" className="block">
          <Button className="mt-1" color={tagColor} size={"xs"} >{tag}</Button>
        </a>
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-base-content-neutral">{description}</p>
      </div>
      <a href={buttonHref} target="_blank" rel="noreferrer" className="block">
        <Button className="mt-5">{buttonLabel}</Button>
      </a>
    </div>
  );
};

export const IntegrationsSection = () => {
  return (
    <section>
      <Container className="flex flex-col gap-6 py-32">
        <h3 className="max-w-[44rem] text-5xl font-bold">what are people building?</h3>
        <p className="max-w-[40rem] text-xl sm:max-w-[40rem]">
          teams from around the world are building hiring tech using TalentLayer. check out a few of them below!
        </p>
        <div className="mb-6 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <IntegrationCard
            icon="/workx.png"
            title="WorkX"
            description="ai-powered hiring marketplace; get real-time reccomendations, proposal/job post-writing suggestions, and more"
            buttonLabel="register today"
            buttonHref={DOCS_URL}
            tag="👋 public beta"
            tagColor="success"
          />
          <IntegrationCard
            icon="/workpod.png"
            title="WorkPod"
            description="bounty platform for hiring top independent security auditors"
            buttonLabel="register today"
            buttonHref={DOCS_URL}
            tag="🥷 private beta"
            tagColor="info"
          />
          <IntegrationCard
            icon="/beetogether.png"
            title="BeeTogether"
            description="freelance collective management platform"
            buttonLabel="view the project"
            buttonHref={DOCS_URL}
            tag="🏆 hackathon winner"
            tagColor="warning"
          />
          <IntegrationCard
            icon="/zkpay.png"
            title="ZKPay"
            description="privacy-centric payroll application"
            buttonLabel="view the project"
            buttonHref={DOCS_URL}
            tag="🏆 hackathon winner"
            tagColor="warning"
          />
          <IntegrationCard
            icon="/influlenser.png"
            title="Influlenser"
            description="influencer marketing marketplace"
            buttonLabel="view the project"
            buttonHref={DOCS_URL}
            tag="🏆 hackathon winner"
            tagColor="warning"
          />
          <IntegrationCard
            icon="/trustky.png"
            title="Trustky"
            description="privacy-centric digital resume builder"
            buttonLabel="view the project"
            buttonHref={DOCS_URL}
            tag="🏆 hackathon winner"
            tagColor="warning"
          />
          <IntegrationCard
            icon="/zkpow.png"
            title="zkPOW"
            description="privacy-centric work reputation aggregator"
            buttonLabel="view the project"
            buttonHref={DOCS_URL}
            tag="🏆 hackathon winner"
            tagColor="warning"
          />
          <IntegrationCard
            icon="/raccoon.jpeg"
            title="where's my project?"
            description="see something missing? contact us!"
            buttonLabel="☎️  contact us"
            buttonHref={DOCS_URL}
            tag="🍀 awesome project"
            tagColor="info"
          />
        </div>
      </Container>
    </section>
  );
};
