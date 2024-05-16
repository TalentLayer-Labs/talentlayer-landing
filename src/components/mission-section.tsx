import Image from "next/image";

import { Container } from "@/components/layout/container";

export const MissionSection = () => {
  return (
    <section id="tools">
      <Container className="flex flex-col gap-6 py-32">
        <h3 className="mx-auto max-w-[44rem] text-5xl font-bold uppercase">
          TalentLayer as a solution to <span className="text-primary">scaling</span>{" "}
          <span className="text-secondary">reputation networks</span>
        </h3>

        <p className="mx-auto max-w-[44rem] text-lg text-base-content">
          With a good reputation in your city, country, or industry finding new work is easy.
        </p>

        <p className="mx-auto max-w-[44rem] text-lg text-base-content-neutral">
          Verifiable work history is the biggest part of your work reputation. This is why you have
          the strongest reputations with people you have worked with directly or people who know
          people you&apos;ve worked with. These people will vouch for you because they know you are
          a good worker - they&apos;ve seen you work or know people who have seen you work.
          Unfortunately, these sorts of reputations don&apos;t scale beyond{" "}
          <a
            className="text-secondary"
            href="https://en.wikipedia.org/wiki/Dunbar%27s_number"
            target="_blank"
          >
            Dunbar’s Number
          </a>
          . People need to know you&apos;ve worked well in the past to trust you will work well with
          them now.
        </p>

        <p className="mx-auto max-w-[44rem] text-lg text-base-content-neutral">
          This is why freelancing and online work platforms have been able to create such powerful
          reputation networks; reputations on these platforms are based on almost exclusively
          verifiable work that has been done within the platform ecosystem. The platform itself
          becomes the attester that you have delivered work - because people trust the platform,
          these reputations are more scaleable. But, because of how these platforms are designed,
          these reputations are also more vulnerable. At the will of a company&apos;s internal
          policy change, a 
          <a
            className="text-secondary"
            href=" https://www.washingtonpost.com/technology/2022/03/08/gigwork-russia/"
            target="_blank"
          >
            geography&apos;s new sanctions law
          </a>
          , or a platform&apos;s bankruptcy, your work reputation can be destroyed. Since platforms
          know they own your most valuable asset (meaning it&apos;s hard for you to leave), they are
          incentivized to{" "}
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
          Is it possible to scale reputation past Dunbar&apos;s number without a middleman? How can
          we prove without a doubt that work has been done, in a way that is universally recognized?
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
