"use client";

import { clsx } from "clsx";
import { useState } from "react";

import { Logo } from "@/components/logo";

import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";

interface NavItemProps {
  text: string;
  href: string;
}

const NavItem = ({ text, href }: NavItemProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className={clsx(
        "rounded-btn px-4 py-2 font-medium border-2 bg-black border-white hover:bg-white hover:text-black transition-all",
      )}
    >
      {text}
    </a>
  );
};

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="relative">
      <Container className="flex h-20 w-full items-center justify-between">
        <Logo className="" />
        <div className="flex items-center sm:gap-4">
          <div className="items-center gap-2 flex">
            <NavItem text="Follow us on X" href="https://twitter.com/talentlayer?lang=en" />
          </div>
          {/* <ThemeToggle /> */}

          {/* <button
            onClick={() => setShowMenu((show) => !show)}
            className="rounded-btn p-1.5 hover:bg-base-200 md:hidden"
            aria-expanded="false"
          >
            <span className="sr-only">{showMenu ? "Close menu" : "Open menu"}</span>
            {showMenu ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}
          </button> */}
        </div>
      </Container>

      {/* Mobile Mobile */}
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} className="md:hidden" />
    </header>
  );
};
