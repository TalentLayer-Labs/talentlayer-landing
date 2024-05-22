import Image from "next/image";

import { Container } from "@/components/layout/container";

export const MissionSection = () => {
  return (
    <section id="tools">
      <Container className="flex flex-col gap-6 py-32">
        <h3 className="mx-auto max-w-[44rem] text-5xl font-bold uppercase">
          TalentLayer <span className="text-primary">scales</span>{" "}
          <span className="text-secondary">reputation networks</span>
        </h3>
        <p className="mx-auto max-w-[44rem] text-lg text-base-content">
          With a good reputation in your city, country, or industry finding new work is easy.
        </p>
        <p className="mx-auto max-w-[44rem] text-lg text-base-content-neutral">
          The strongest reputation you have is with people you have worked with directly or people
          who know people you&apos;ve worked with. These people can easily understand your work
          history, because they know you! Unfortunately, these sorts of reputations don&apos;t scale
          well beyond{" "}
          <a
            className="text-secondary"
            href="https://en.wikipedia.org/wiki/Dunbar%27s_number"
            target="_blank"
          >
            2nd degree connections
          </a>
          .
        </p>
        <p className="mx-auto max-w-[44rem] text-lg text-base-content-neutral">
          In the mid 2000s freelance platforms became the solution to this scaling problem.
          Freelancing and online work platforms have created powerful reputation networks that let
          people who&apos;ve never met eachother trust one another. The platform itself becomes a
          verifier of your work history, because the platform controls all hiring that happens on it
          - this is why people trust the visible work history on your profile. But, because of how
          these platforms are designed, these reputations are also more vulnerable.
        </p>{" "}
        <p className="mx-auto max-w-[44rem] text-lg text-base-content-neutral">
          At the will of a company&apos;s internal policy change, a 
          <a
            className="text-secondary"
            href=" https://www.washingtonpost.com/technology/2022/03/08/gigwork-russia/"
            target="_blank"
          >
            geography&apos;s new sanctions law
          </a>
          , your work reputation can be destroyed. Since platforms know they own your most valuable
          asset (meaning it&apos;s hard for you to leave), they are incentivized to{" "}
          <a
            className="text-secondary"
            href="    https://www2.staffingindustry.com/Editorial/Daily-News/Upwork-Q1-revenue-up-18.8-with-boost-from-flat-fee-pricing-69229"
            target="_blank"
          >
            add new fees
          </a>{" "}
          over time to extract value from you, knowing that you wont likley leave.
        </p>
        <p className="mx-auto max-w-[44rem] text-lg text-base-content-neutral">
          Is it possible to scale reputation past Dunbar&apos;s number without a middleman?
        </p>{" "}
        <p className="mx-auto max-w-[44rem] text-lg text-base-content-neutral">
          How can we prove without a doubt that work has been done, in a way that is universally
          recognized?
        </p>
        <p className="mx-auto max-w-[44rem] text-lg text-base-content-neutral">
          This is why we built TalentLayer. TalentLayer provides a verifiable record of who&apos;s
          done what for whom and what they think of it. In other words,{" "}
          <a className="font-bold text-primary">
            it&apos;s your way to finally scale your reputation, without giving up your freedom or
            your earnings.
          </a>
        </p>
        <p className="mx-auto max-w-[44rem] pb-5 text-lg text-primary">💚 Team TalentLayer</p>
        <Image
          src="/team.png"
          width={400}
          height={100}
          alt="TalentLayer"
          className="mx-auto group-hover:opacity-80"
        />
      </Container>
    </section>
  );
};
