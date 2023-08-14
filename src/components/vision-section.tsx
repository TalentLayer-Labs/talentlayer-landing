import { DOCS_URL } from "@/constants/urls";

import { Container } from "./layout/container";
import { Button } from "./ui/button";

export const VisionSection = () => {
  return (
    <section className="bg-base-content py-24 text-base-100">
      <Container className="flex flex-col items-start gap-6">
        <h3 className="mb-2 text-5xl font-bold">👩 Empower your users with interoperable reputation</h3>
        <p className="text-base-100/80">
        TalentLayer enables workers and hirers to grow one unified and user-owned reputation across all integrated platforms. Work history and reviews are stored on-chain at the network level.
        </p>
        <p className="text-base-100/80">
        What does that mean for users? Their reputation is owned by them, forever - backed by the blockchain and accessible everywhere.
        </p>
        <a href="https://docs.talentlayer.org/basics/basics/what-is-talentlayer-id" target="_blank" rel="noreferrer" className="mt-4">
          <Button className="whitespace-nowrap" size="lg" block>
            Learn more
          </Button>
        </a>
      </Container>
    </section>
  );
};
