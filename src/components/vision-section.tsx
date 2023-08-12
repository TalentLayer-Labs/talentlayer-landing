import { DOCS_URL } from "@/constants/urls";

import { Container } from "./layout/container";
import { Button } from "./ui/button";

export const VisionSection = () => {
  return (
    <section className="bg-base-content py-24 text-base-100">
      <Container className="flex flex-col items-start gap-6">
        <h3 className="mb-2 text-5xl font-bold">The vision</h3>
        <p className="text-base-100/80">
          The most resilient, uncensorable, and accessible systems are user-owned, decentralized,
          and autonomous. That’s why TalentLayer was built as a open-source low-level protocol for
          many applications to leverage; like SMTP for email.
        </p>
        <p className="text-base-100/80">
          Each year more and more workers find jobs on digital platforms. The &ldquo;great
          unbundling&rdquo; is happening fast - big generalized platforms are being overtaken by
          many niche platforms that serve their user&apos;s unique needs better. TalentLayer is
          empowering this next generation of marketplaces to transform the way people work.
        </p>
        <p className="text-base-100/80">
          TalentLayer harnesses the power of blockchain to allow network effects sharing and
          user-owned reputations - helping you bootstrap and focus on building user-friendly
          marketplaces that serve everyone.
        </p>
        <a href={DOCS_URL} target="_blank" rel="noreferrer" className="mt-4">
          <Button className="whitespace-nowrap" size="lg" block>
            Start building
          </Button>
        </a>
      </Container>
    </section>
  );
};
