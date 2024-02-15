import Image from "next/image";

import { Container } from "./layout/container";
import { Button } from "./ui/button";

export const UserSection = () => {
  return (
    <section className="bg-primary py-24 text-base-100" id="user-section">
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
            <li>⭐ unified reputation means your reviews are visible across all platforms</li>
            <li>
              ⭐ manage one account, have your profile and job posts appear in search results across
              many platforms
            </li>
            <li>⭐ 100% user-owned accounts - never loose your reputation</li>
          </ul>
          <div className="flex flex-col gap-4 min-[500px]:flex-row">
            <a href="#" target="_blank" rel="noreferrer" className="flex-1">
              <Button color="success" className="whitespace-nowrap" size="lg" block>
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
        <div className="order-2 flex flex-col gap-10">
          <h2 className="mb-0 text-3xl">TalentLayer for organizations and workers</h2>
          <h3 className="mb-2 text-5xl font-bold">
            👩 find work and hire across{" "}
            <span className="italic text-secondary">an ecosystem of platforms</span>
          </h3>
        </div>
      </Container>
    </section>
  );
};
