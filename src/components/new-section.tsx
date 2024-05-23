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

export const ModuleCard = ({
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
        <div className="flex size-14 items-center justify-center rounded-full border-2 border-primary-content bg-primary">
          <span className="size-8 text-primary-content">{icon}</span>
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

export const NewSection = () => {
  return (
    <section id="tools">
      <Container className="flex flex-col items-end gap-6 py-32 text-right">
        <h3 className="max-w-[44rem] text-5xl font-bold uppercase">
          and a <span className="items-end text-primary">flagship socialfi</span> to help you build{" "}
          <span className="items-end text-secondary">your reputation</span>
        </h3>
      </Container>
    </section>
  );
};
