import Image from "next/image";

import { Container } from "./layout/container";

export const Hero = () => {
  return (
    <section className="relative">
      <Container className="relative flex flex-col items-center gap-20 pb-40 pt-14 sm:pt-40 md:flex-row">
        <div className="order-2 flex flex-col gap-10">
          <h1 className="text-5xl font-bold sm:text-6xl">
            the <a className="text-primary">API layer</a> for the{" "}
            <span className="font-bold text-primary">future of commerce</span>.
          </h1>
          <p className="max-w-[40rem] text-xl text-base-content sm:max-w-[40rem]">
            your suite of tools to build purchasing automations for hiring and ecommerce
          </p>
          <p className="max-w-[40rem] text-xl text-base-content-neutral sm:max-w-[40rem]">
            coming soon
          </p>

          <div className="flex flex-col gap-4 min-[500px]:flex-row"></div>
        </div>
        <div className="order-1 hidden sm:order-3 sm:block">
          <Image src="/hero.png" width={800} height={600} alt="TalentLayer" />
        </div>
      </Container>
    </section>
  );
};
