"use client";
import Image from "next/image";

import { Container } from "./layout/container";
import { Button } from "./ui/button";

export const DiagramSection = () => {
  return (
    <section className="relative bg-base-content py-24 text-center text-base-100">
      <Container className="flex flex-col items-center gap-10">
        <div className="order-2 flex flex-col gap-10">
          <Image
            src="/gpt.png"
            width={700}
            height={100}
            alt="TalentLayer"
            className="group-hover:opacity-80"
          />
          <h3 className="text-5xl font-bold">
            from idea to app in{" "}
            <span className="italic text-primary">
              <br></br>10 days
            </span>
          </h3>
          <p className="max-w-[40rem] text-xl text-base-100/80 sm:max-w-[40rem]">
            thanks to TalentLayer&apos;s modular toolkit, Freelance Search was able to go from idea
            to working application in less than 10 days. they are currently ranked the #1
            freelancing app on the ChatGPT store.
          </p>
          <a
            href="https://chat.openai.com/g/g-QB87HwILP-freelance-search"
            target="_blank"
            rel="noreferrer"
            className="flex-1 whitespace-nowrap"
          >
            <Button className="btn-primary" size="lg" block>
              try the app
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};
