import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { DOCS_URL } from "@/constants/urls";

import { Container } from "./container";

export const Navbar = () => {
  return (
    <header className="flex h-20 items-center">
      <Container className="flex w-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <a href="https://docs.talentlayer.org/" target="_blank" rel="noreferrer" className="hover:text-primary">
            documentation
          </a>
          <a href="https://medium.com/talentlayer" target="_blank" rel="noreferrer" className="hover:text-primary">
            blog
          </a>
          <a href="https://linktr.ee/talentlayer" target="_blank" rel="noreferrer" className="hover:text-primary">
            socials
          </a>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
