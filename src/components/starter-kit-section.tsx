import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Container } from "./layout/container";

export const StarterKitSection = () => {
  return (
    <section className="bg-base-content text-base-100 relative">
      <Container className="relative flex flex-col items-center gap-20 py-10 md:flex-row">
        <div className="flex flex-col gap-10 order-2">
          <h1 className="text-6xl font-bold">meet StarterKit</h1>
          <p className="max-w-[40rem] text-xl text-base-100 sm:max-w-[40rem]">
          StarterKit is your fastest way to get started building your mobile-first hiring platform.
          </p>
          <div className="flex flex-col gap-4">
          <p className="max-w-[40rem] text-s text-base-100 sm:max-w-[40rem]">
          ⭐ ready to use NextJS DAPP</p>
          <p className="max-w-[40rem] text-s text-base-100 sm:max-w-[40rem]">
          ⭐ TalentLayer enabled</p>
          <p className="max-w-[40rem] text-s text-base-100 sm:max-w-[40rem]">
          ⭐ 100% open-source</p>
          </div>


          <div className="flex flex-col gap-4 min-[500px]:flex-row">
            <a href="https://starter-kit-xmtp-tl.vercel.app/" target="_blank" rel="noreferrer" className="whitespace-nowrap flex-1">
              <Button
                className="whitespace-nowrap"
                size="lg"
                block
              >
                learn More
              </Button>
            </a>
          </div>
        </div>
        <div className="order-1 sm:order-1">
          <Image src="/starter-kit.png" width={800} height={600} alt="TalentLayer" />
        </div>
      </Container>
    </section>
  );
};
