import Image from "next/image";

import { Container } from "./layout/container";
import { Button } from "./ui/button";

export const VisionSection = () => {
  return (
    <section className="bg-base-content pb-20 text-base-100">
      <Container className="relative flex flex-col items-center gap-20 pb-40 pt-14 sm:pt-40 md:flex-row">
        <div className="order-2 flex flex-col gap-10">
          <h2 className="mb-0 text-3xl">TalentLayer for organizations and workers</h2>
          <h3 className="mb-2 text-5xl font-bold">
            👩 find work and hire across{" "}
            <span className="italic text-secondary">an ecosystem of platforms</span>
          </h3>
          <p className="text-base-100/80">
            TalentLayer unites many hiring platforms with one data layer - this means hirers and
            workers benefit from interoperable user profiles and reviews and creating a bigger
            hiring pool to help you meet your best fit partners.{" "}
          </p>
          <ul>
            <li>⭐ unified reputation means your reviews are visible across all platforms</li>
            <li>
              ⭐ manage one account, have your profile and job posts appear in search results across
              many platforms
            </li>
            <li>⭐ 100% user-owned accounts - never loose your reputation</li>
          </ul>
          <div className="flex flex-col gap-4 min-[500px]:flex-row">
            <a
              href="https://claim.talentlayer.org/"
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <Button color="secondary" className="whitespace-nowrap text-black" size="lg" block>
                create a TalentLayer ID
              </Button>
            </a>
            <a href="#platforms" rel="noreferrer" className="flex-1">
              <Button color="primary" className="whitespace-nowrap" size="lg" block>
                explore the hiring platforms
              </Button>
            </a>
          </div>
        </div>
        <div className="order-2 flex flex-col gap-10">
          <div className="order-1 sm:order-3 sm:block">
            <Image src="/shria.png" width={800} height={600} alt="TalentLayer" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="rounded-box bg-base-300 p-10">
          <div className="order-2 flex flex-col gap-10 ">
            <h2 className="mb-0 text-3xl text-black">TalentLayer for platforms</h2>
            <h3 className="mb-2 text-5xl font-bold text-black">
              💪 empower your users with{" "}
              <span className="italic text-primary">interoperable reputation</span>
            </h3>
            <p className="text-black">
              TalentLayer enables workers and hirers to grow one unified and user-owned reputation
              across all integrated platforms. this is possible thanks to blockchain technology -
              work history, reviews, and transactions are stored on-chain at the network level. what
              does that mean for users? their reputation is owned by them, forever - backed by the
              blockchain and accessible everywhere.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
