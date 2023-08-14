import { DOCS_URL } from "@/constants/urls";

import { Container } from "./layout/container";
import { Button } from "./ui/button";
import Image from "next/image";

export const TeamSection = () => {
  return (
    <section className="py-24 text-center relative">
      <Container className="flex flex-col items-center gap-10">
      <div className="flex flex-col gap-1 order-2">
        <h3 className="text-5xl font-bold">Our open-source ethos</h3>
        <p className="max-w-[40rem] text-xl sm:max-w-[40rem]">
        TalentLayer was built by a thriving community of open-source developers. Everything we ship is 100% open-source from day 1. Are you ready to join our ranks? Start contributing today.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <a href="https://docs.talentlayer.org/open-source-contribution" target="_blank" rel="noreferrer" className="flex-1">
          <Button className="" size="lg" block>
            Join us
          </Button>
        </a>
        <a href="https://docs.talentlayer.org/open-source-contribution" target="_blank" rel="noreferrer" className="flex-1">
          <Button className="" size="lg" block>
            View our Trello
          </Button>
          </a>
          <a href="https://docs.talentlayer.org/open-source-contribution" target="_blank" rel="noreferrer" className="flex-1">
          <Button className="" size="lg" block>
            See our Commits
          </Button>
          </a>
        </div>
      </div>
      <div className="order-1 sm:order-1">
        <Image src="/people.png" width={800} height={100} alt="TalentLayer" />
      </div>
      </Container>
    </section>
  );
};
