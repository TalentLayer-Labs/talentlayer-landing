import { Transition } from "@headlessui/react";
import { clsx } from "clsx";

import type { Dispatch, SetStateAction } from "react";

interface NavItemProps {
  text: string;
  href: string;
  onClick?: () => void;
}

const NavItem = ({ text, href, onClick }: NavItemProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={clsx("rounded-btn flex items-center px-4 py-2 font-medium hover:bg-base-200")}
    >
      {text}
    </a>
  );
};

interface MobileMenuProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export const MobileMenu = ({ showMenu, setShowMenu, className }: MobileMenuProps) => {
  const closeMenu = () => setShowMenu(false);

  return (
    <Transition
      show={showMenu}
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={className}
    >
      {/* Overlay */}
      <div className="fixed inset-0 top-[6.25rem] z-20 bg-black opacity-20" onClick={closeMenu} />
      <div className="rounded-b-box absolute top-full z-30 w-full bg-base-100 pb-6">
        <div className="container">
          <nav className="flex flex-col space-y-2">
            <NavItem text="docs" href="https://docs.talentlayer.org/" />
            <NavItem text="blog" href="https://medium.com/talentlayer" />
            <NavItem text="social media" href="https://linktr.ee/talentlayer" />
            <NavItem text="claim TLID" href="https://claim.talentlayer.org/" />
          </nav>
        </div>
      </div>
    </Transition>
  );
};
