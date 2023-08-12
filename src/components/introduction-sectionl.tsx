import { DOCS_URL } from "@/constants/urls";

import { Button } from "./ui/button";

export const IntroducationSecion = () => {
  return (
    <section className="flex flex-col items-center gap-10 bg-base-content py-20 text-center text-base-100">
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
    </section>
  );
};
