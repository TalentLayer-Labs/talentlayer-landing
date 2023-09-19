"use client";

import { PlayCircleIcon } from "@heroicons/react/24/solid";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { usePlausible } from "next-plausible";
import { useState } from "react";

import { ProductHuntButton } from "../product-hunt-button";

export const TestSection = () => {
  const plausible = usePlausible();
  const [showVideo, setShowVideo] = useState(false);

  const onShowDemo = () => {
    plausible("Demo-Opened");
    setShowVideo(true);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 pb-20 pt-16 sm:pb-24 sm:pt-20">
      <ProductHuntButton />
      <h1 className="max-w-[46rem] text-center text-4xl font-black sm:text-5xl sm:leading-[3.3rem]">
        Generate product updates for Twitter when you ship new code
      </h1>
      <p className="max-w-[36rem] text-center  text-base-content-neutral sm:text-xl">
        Connect your GitHub repository. Every time you release new features Buildshare automatically
        generates Twitter announcements for your product.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/new" tabIndex={-1} className="flex-1">
          <Button size="lg" className="h-12 min-w-[210px] whitespace-nowrap">
            Get started for free
          </Button>
        </Link>
        <Button
          color="neutral"
          size="lg"
          className="min-h-[48px] min-w-[210px] flex-1"
          onClick={onShowDemo}
        >
          Watch a demo
        </Button>
      </div>

      <div
        className="group rounded-box relative mt-10 cursor-pointer overflow-hidden md:mt-20"
        onClick={onShowDemo}
      >
        <Image
          src={"/project-dashboard.png"}
          width={1797 / 2}
          height={1074 / 2}
          alt="Project Dashboard"
          className="object-cover group-hover:opacity-80"
        />
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <PlayCircleIcon className="h-20 w-20 text-primary hover:text-primary-focus md:h-36 md:w-36" />
        </button>
      </div>

      {showVideo && (
        <Dialog.Root open={showVideo} onOpenChange={setShowVideo}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-20 flex items-center justify-center bg-black/50 dark:bg-gray-700/50">
              <Dialog.Content className="relative max-h-[90vh] w-[94%] max-w-[76rem] ">
                <div className="pt-[55%]">
                  <iframe
                    className="absolute inset-0"
                    width="100%"
                    height="100%"
                    src="https://youtu.be/lhEnonFVEsc"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </div>
  );
};
