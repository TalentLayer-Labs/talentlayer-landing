import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

import { Container } from "./container";

export const Navbar = () => {
  return (
    <header className="flex h-20 items-center">
      <Container className="flex w-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
