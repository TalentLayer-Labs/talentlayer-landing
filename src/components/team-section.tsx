import Image from "next/image";

import { Container } from "./layout/container";
import { Button } from "./ui/button";

export const TeamSection = () => {
  return (
    <section className="relative py-24 text-center">
      <Container className="flex flex-col items-center gap-10">
        <div className="order-2 flex flex-col gap-1">
          <h3 className="text-5xl font-bold">
            an <span className="text-primary">open-source</span> ethos
          </h3>
          <p className="max-w-[40rem] pt-5 text-xl sm:max-w-[40rem]">
            TalentLayer was built by a thriving community of open-source developers. everything we
            ship is 100% open-source from day 1. are you ready to join our ranks? start contributing
            today.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://docs.talentlayer.org/open-source-contribution"
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <Button className="" size="lg" block>
                🦝 join us
              </Button>
            </a>
            <a
              href="https://trello.com/b/SJkiGHcx/engineering-board"
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <Button
                color="neutral"
                variant="outline"
                className="whitespace-nowrap"
                size="lg"
                block
              >
                🍀 our trello
              </Button>
            </a>
            <a
              href="https://github.com/TalentLayer"
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <Button
                color="neutral"
                variant="outline"
                className="whitespace-nowrap"
                size="lg"
                block
              >
                💻 our github
              </Button>
            </a>
          </div>
        </div>
        <div className="order-1 sm:order-1">
          <Image src="/people.png" width={800} height={100} alt="TalentLayer" />
        </div>
        <div className="order-2 flex flex-col gap-1">
          <h3 className="text-5xl font-bold">
            proudly <span className="text-primary">funded</span> by...
          </h3>
          <p className="max-w-[40rem] pt-5 text-xl sm:max-w-[40rem]">
            TalentLayer has been funded by grants from The European Union, Lens Protocol, Filecoin
            Foundation and others. we&apos;ve accepted small investments as part of accelerators.
          </p>
        </div>
        <div className="order-4 sm:order-4">
          <Image src="/grants.png" width={800} height={100} alt="TalentLayer" />
        </div>
      </Container>
    </section>
  );
};
