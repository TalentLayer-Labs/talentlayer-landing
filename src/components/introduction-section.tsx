"use client";

import { PlayCircleIcon } from "@heroicons/react/24/solid";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

import { DOCS_URL } from "@/constants/urls";

import { Container } from "./layout/container";
import { Button } from "./ui/button";

export const IntroducationSecion = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative bg-base-content py-24 text-center text-base-100">
      <Container className="flex flex-col items-center gap-10">
        <div className="order-2 flex flex-col gap-10">
          <h3 className="text-5xl font-bold">
            build on a <span className="italic text-primary">solid foundation</span>
          </h3>
          <p className="max-w-[40rem] text-xl text-base-100/80 sm:max-w-[40rem]">
            TalentLayer is the only off-the-shelf, open source, composable developer toolkit for
            building interoperable freelance, gig, and hiring platforms.
          </p>
          <a href={DOCS_URL} target="_blank" rel="noreferrer">
            <Button className="whitespace-nowrap" size="lg" block>
              🛠️ start building
            </Button>
          </a>
        </div>
        <div className="group relative order-1 sm:order-1" onClick={() => setShowVideo(true)}>
          <Image
            src="/diagram.png"
            width={700}
            height={100}
            alt="TalentLayer"
            className="group-hover:opacity-80"
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
                      src="https://www.youtube.com/embed/CsacqlCHlzE?autoplay=1"
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
      </Container>
    </section>
  );
};
