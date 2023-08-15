import Image from "next/image";

import { Button } from "@/components/ui/button";
import { DOCS_URL, CLAIM_WEBSITE_URL } from "@/constants/urls";

import { Container } from "./layout/container";

export const Hero = () => {
  return (
    <section className="relative">
      <Container className="relative flex flex-col items-center gap-20 py-40 md:flex-row">
        <div className="order-2 flex flex-col gap-10">
          <h1 className="text-6xl font-bold">
            building <a className="text-primary underline">work tech</a> doesn&apos;t have to be
            <a className="text-6xl font-bold text-primary">
              <a className="italic">hard work</a>.
            </a>
          </h1>
          <p className="max-w-[40rem] text-xl text-base-content-neutral sm:max-w-[40rem]">
            TalentLayer is an 🌐 open protocol and ⚒️ developer toolkit for building better hiring
            platforms.
          </p>

          <div className="flex flex-col gap-4 min-[500px]:flex-row">
            <a href={CLAIM_WEBSITE_URL} target="_blank" rel="noreferrer" className="flex-1">
              <Button
                color="neutral"
                variant="outline"
                className="whitespace-nowrap"
                size="lg"
                block
              >
                👩 create TalentLayer ID
              </Button>
            </a>
            <a href={DOCS_URL} target="_blank" rel="noreferrer" className="flex-1">
              <Button className="whitespace-nowrap" size="lg" block>
                🛠️ start building
              </Button>
            </a>
          </div>
        </div>
        <div className="order-1 sm:order-3">
          <Image src="/hero.webp" width={800} height={600} alt="TalentLayer" />
        </div>
      </Container>
    </section>
  );
};
