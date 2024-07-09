"use client";
import Image from "next/image";
import { Button } from "./ui/button";

import { Container } from "./layout/container";
export const IntroducationSecion = () => {
  return (
    <section className="relative py-16 text-center text-base-content sm:py-24">
      <Container className="flex flex-col items-center">
        <div className="flex flex-col gap-10 text-center">
          <div className="flex items-center justify-center">
            <Image
              src="/raccoon_full_right.png"
              width="200"
              height="100"
              alt="TalentLayer"
              className="group-hover:opacity-80"
            />
          </div>

          <p className="max-w-[40rem] text-xl uppercase text-base-content sm:max-w-[40rem]">
            a collective of <a className="text-secondary line-through">raccoons</a> developers
            building products to <a className="text-primary">radically change how humans work</a>{" "}
            together.
          </p>
          <p className="max-w-[40rem] text-center text-xl text-base-content sm:max-w-[40rem]">
            We&amp;sre building Revyou, the easiest way to collect verafied reviews from your
            freelance clients.
          </p>
          <div className="mb-10 items-center">
            <Button
              color="primary"
              className="w-52 whitespace-nowrap px-4 py-2 text-black"
              size="lg"
            >
              Meet 🤩 Revyou
            </Button>
          </div>
          <h3 className="mb-2 text-start text-4xl font-bold">What we believe</h3>
          <p className="max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            The way we work is rapidly changing...
          </p>
          <ul className="max-w-[40rem] list-disc pl-5 text-left text-xl text-base-content sm:max-w-[40rem]">
            <li>
              <strong className="text-primary">fractional work is king</strong>: people are working
              more jobs for smaller durations
            </li>
            <li>
              <strong className="text-primary">off-shore is the new normal</strong>: to hire the
              best people, companies are searching at a global scale
            </li>
            <li>
              <strong className="text-primary">credentialism has ended</strong>: companies know that
              traditional credentials like degrees or certificates have are terrible indicators of
              success
            </li>
            <li>
              <strong className="text-primary">access to work is a right</strong>: governments and
              companies can not be able to prevent people from earning a living on internet
            </li>
            <li>
              <strong className="text-primary">no one needs permission</strong>: anyone can teach
              themselves anything - gatekeeping is impossible
            </li>
            <li>
              <strong className="text-primary">your reputation is yours</strong>: users will have
              ownership over their unified work history and reviews
            </li>
          </ul>
          <p className="max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            These patterns were kick-started by the dawn of the internet, and have been accelerating
            faster each year.
          </p>
          <p className="max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            We’re building tools to make them go faster. 🚀
          </p>
          <h3 className="mb-2 text-start text-4xl font-bold">Why we&apos;re building</h3>
          <p className="max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            We grew up during this work revolution.
          </p>
          <p className="max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            We’ve made a living off of freelance platforms. We’ve built gig marketplaces where
            hirers and workers connect. We’ve hired fractional workers to grow our startups.
          </p>
          <p className="max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            Over the years, we’ve discovered that there are some major roadblocks that fractional
            work faces:
          </p>
          <ul className="max-w-[40rem] list-disc pl-5 text-left text-xl text-base-content sm:max-w-[40rem]">
            <li>
              <strong className="text-primary">Reputations are held hostage</strong>: Today workers
              most valuable asset, their reputation, is trapped on platforms. This limits
              discoverability and destroys people’s livelihoods when platforms shut down, ban users,
              or if users stop paying.
            </li>
            <li>
              <strong className="text-primary">There’s no equal access</strong>: The most popular
              freelance platforms have banned 10s of thousands of users because of where they were
              born. Platforms delete accounts, without having to provide a reason why. Channels to
              find work are permissioned at every point.
            </li>
            <li>
              <strong className="text-primary">Platforms extort users</strong>: Because platforms
              know they own your reputation, meaning it’s very hard for you to move to alternatives
              (where you must start a reputation from scratch), this incentivizes platforms to keep
              increasing and increasing fees over time, extracting more value from you, to give to
              shareholders.
            </li>
            <li>
              <strong className="text-primary">Holistic search is impossible</strong>: The best
              workers don’t use platforms. They use their personal network to find work, so they can
              build a reputation they control and not have to pay a platform. This means the best
              people are not discoverable via search.
            </li>
          </ul>
          <p className="  max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            We’re building a world where we’ll all have access to tools that help us find work,
            without having to sacrifice our freedom.
          </p>
          <h3 className="mb-2 text-start text-4xl font-bold">Who we are</h3>
          <p className="max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            We&amp;re an open-source movement, led by our Core Team.
          </p>
          <ul className="max-w-[40rem] list-disc pl-5 text-left text-xl text-base-content sm:max-w-[40rem]">
            <li>
              <strong className="text-primary">Kirsten</strong> founded multiple venture-backed
              startups in the marketplace sector. She’s been freelancing since 2018 as a self-taught
              developer.
            </li>
            <li>
              <strong className="text-primary">Romain</strong> was CTO of multiple profitable
              startups with over 1M DAU, 50K MRR. He’s been freelancing for over decade.
            </li>
            <li>
              <strong className="text-primary">Quentin</strong> quit a career in electrical
              engineering, taught himself to code, and has been building in the blockchain space
              since.
            </li>
            <li>
              <strong className="text-primary">Pranav</strong> is a self-taught engineer. He ran a
              commodities trading business for a few years. He’s been freelancing as a developer for
              years.
            </li>
          </ul>
          <p className="max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            Do you resonate with our mission?{" "}
          </p>

          <p className="max-w-[40rem] text-left text-xl text-base-content sm:max-w-[40rem]">
            Join us.
          </p>
          <p className="mx-auto max-w-[44rem] pb-5 text-lg text-primary">
            💚 the TalentLayer Core Team
          </p>
          <Image
            src="/team.png"
            width={400}
            height={100}
            alt="TalentLayer"
            className="mx-auto group-hover:opacity-80"
          />
        </div>
      </Container>
    </section>
  );
};
