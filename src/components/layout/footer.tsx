import Image from "next/image";

import { Container } from "@/components/layout/container";
import { DOCS_URL } from "@/constants/urls";

import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-base-300/50 py-6">
          <div className="flex items-center gap-4">
            <a className="shrink-0 md:flex-1" target="_blank" rel="noreferrer">
              <Image src="/raccoon.png" width={48} height={48} alt="TalentLayer" />
            </a>
            <a href={DOCS_URL} target="_blank" rel="noreferrer">
              <p>TalentLayer, 2023</p>
            </a>
          </div>
          <a
            href="https://tally.so/r/wkNBLe"
            className="flex items-center justify-end"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              color="secondary"
              variant="outline"
              className="whitespace-nowrap"
              size="sm"
              block
            >
              CONTACT US
            </Button>
          </a>
        </div>
      </Container>
    </footer>
  );
};
