import { clsx } from "clsx";
import Image from "next/image";

import { Container } from "@/components/layout/container";

import { Button, ButtonProps } from "./ui/button";

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

type ButtonColor = ButtonProps["color"];

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
      <div className="flex w-full flex-col gap-4">
        <div className="relative h-[200px] w-full">
          <Image src={icon} alt="platform image" className="rounded-box object-cover" fill />
        </div>
        <a target="_blank" rel="noreferrer" className="block">
          <Button className="mt-1" color={tagColor} size={"xs"}>
            {tag}
          </Button>
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
    <section id="platforms">
      <Container className="flex flex-col gap-6 py-32">
        <h3 className="max-w-[44rem] text-5xl font-bold">
          built on <span className="italic text-primary">talentlayer</span>
        </h3>
        <p className="max-w-[50rem] text-lg font-bold text-base-content">
          explore our growing ecosystem of platforms, built on the network layer for the service
          economy
        </p>
        <div className="mb-6 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <IntegrationCard
            icon="/workx.png"
            title="WorkX"
            description="ai-powered hiring marketplace; get real-time reccomendations, proposal/job post-writing suggestions, and more"
            buttonLabel="find work or hire"
            buttonHref="https://workx.io/"
            tag="👋 public beta"
            tagColor="success"
          />
          <IntegrationCard
            icon="/freelancesearch.png"
            title="Freelance Search"
            description="the #1 ChatGPT app for freelancers - search over 1 million jobs from major freelance platforms today"
            buttonLabel="find work"
            buttonHref="https://chat.openai.com/g/g-QB87HwILP-freelance-search"
            tag="👋  public beta"
            tagColor="success"
          />
          <IntegrationCard
            icon="/builderplace.png"
            title="BuilderPlace"
            description="build your own custom bounty platform in less than 10 minutes"
            buttonLabel="get a bounty board"
            buttonHref="https://www.builder.place/"
            tag="👋  public beta"
            tagColor="success"
          />
          <IntegrationCard
            icon="/developerdao.png"
            title="Developer DAO Bounty Board"
            description="the official bounty board of Developer DAO, the largest web 3 developer community"
            buttonLabel="discover bounties"
            buttonHref="https://developerdao.builder.place/"
            tag="👋  public beta"
            tagColor="success"
          />
        </div>
      </Container>
    </section>
  );
};
