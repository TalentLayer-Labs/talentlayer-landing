import { DOCS_URL } from "@/constants/urls";

import { Container } from "./layout/container";
import { Button } from "./ui/button";

export const IntroducationSecion = () => {
  return (
    <section className="bg-base-content py-24 text-center text-base-100">
      <Container className="flex flex-col items-center gap-10">
        <h3 className="text-5xl font-bold">Build on a solid foundation</h3>
        <p className="max-w-[40rem] text-xl text-base-100/80 sm:max-w-[40rem]">
          TalentLayer is the only off-the-shelf, open source, composable developer toolkit for
          building interoperable freelance, gig, and hiring platforms.
        </p>
        <a href={DOCS_URL} target="_blank" rel="noreferrer">
          <Button className="whitespace-nowrap" size="lg" block>
            Start building
          </Button>
        </a>
      </Container>
    </section>
  );
};
