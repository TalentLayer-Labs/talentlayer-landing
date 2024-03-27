"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
        <Logo className="" />
      </Container>

      {/* Mobile Mobile */}
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} className="md:hidden" />
    </header>
  );
};
