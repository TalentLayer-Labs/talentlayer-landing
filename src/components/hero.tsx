import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Container } from "./layout/container";

export const Hero = () => {
  return (
    <section className="relative">
      <Container className="relative flex flex-col items-center gap-20 pb-40 pt-14 sm:pt-40 md:flex-row">
        <div className="order-2 flex flex-col gap-10">
          <h1 className="text-5xl font-bold uppercase sm:text-6xl">
            the <a className="text-primary ">trust layer</a> for{" "}
            <span className="font-bold text-secondary">digital work</span>
          </h1>
          <p className="max-w-[40rem] text-xl text-base-content sm:max-w-[40rem]">
            TalentLayer is a protocol network for storing and accessing verified work history and
            reviews
          </p>

          <div className="flex flex-col gap-4 min-[500px]:flex-row">
            <a href="#tools" rel="noreferrer" className="flex-1">
              <Button
                color="primary"
                variant="prime"
                className="whitespace-nowrap text-black"
                size="lg" // Adjusted size to small
              >
                learn more
              </Button>
            </a>
          </div>
        </div>
        <div className="order-1 hidden sm:order-3 sm:block">
          <Image src="/hero.png" width={400} height={600} alt="TalentLayer" />
        </div>
      </Container>
    </section>
  );
};
