"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { useState } from "react";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
      className={clsx("rounded-btn px-4 py-2 font-medium hover:bg-base-200")}
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
        <Logo className="hidden sm:block" />
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <NavItem text="docs" href="https://docs.talentlayer.org/" />
            <NavItem text="blog" href="https://medium.com/talentlayer" />
            <NavItem text="social media" href="https://linktr.ee/talentlayer" />
            <NavItem text="claim TLID" href="https://claim.talentlayer.org/" />
          </div>
          <ThemeToggle />

          <button
            onClick={() => setShowMenu((show) => !show)}
            className="rounded-btn p-1.5 hover:bg-base-200 md:hidden"
            aria-expanded="false"
          >
            <span className="sr-only">{showMenu ? "Close menu" : "Open menu"}</span>
            {showMenu ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Mobile */}
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} className="md:hidden" />
    </header>
  );
};
