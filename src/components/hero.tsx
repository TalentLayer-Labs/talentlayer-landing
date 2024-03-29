import Image from "next/image";

import { Button } from "@/components/ui/button";
import { DOCS_URL } from "@/constants/urls";

import { Container } from "./layout/container";

export const Hero = () => {
  return (
    <section className="relative">
      <Container className="relative flex flex-col items-center gap-20 pb-40 pt-14 sm:pt-40 md:flex-row">
        <div className="order-2 flex flex-col gap-10">
          <h1 className="text-5xl font-bold sm:text-6xl">
            the global <a className="text-primary">network layer</a> for the{" "}
            <span className="font-bold text-primary">service economy</span>.
          </h1>
          <p className="max-w-[40rem] text-xl text-base-content-neutral sm:max-w-[40rem]">
            TalentLayer is an 🌐 open protocol and ⚒️ developer toolkit for building better service
            marketplaces
          </p>

          <div className="flex flex-col gap-4 min-[500px]:flex-row">
            <a href="#platforms" className="flex-1">
              <Button
                color="neutral"
                variant="outline"
                className="whitespace-nowrap"
                size="lg"
                block
              >
                👩 find work or hire
              </Button>
            </a>
            <a href={DOCS_URL} target="_blank" rel="noreferrer" className="flex-1">
              <Button color="primary" variant="prime" className="whitespace-nowrap" size="lg" block>
                🛠️ start building
              </Button>
            </a>
          </div>
        </div>
        <div className="order-1 hidden sm:order-3 sm:block">
          <Image src="/hero.webp" width={800} height={600} alt="TalentLayer" />
        </div>
      </Container>
    </section>
  );
};
