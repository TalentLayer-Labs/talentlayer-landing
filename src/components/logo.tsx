"use client";

import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export interface LogoProps {
  href?: string;
  className?: string;
}

export const Logo = ({ href = "/", className }: LogoProps) => {
  const { theme } = useTheme();

  return (
    <Link href={href} className="flex items-center gap-3">
      {theme === "light" ? (
        <Image
          className="block h-7 w-7 rounded-full"
          src="/icon.png"
          width={40}
          height={40}
          alt="Logo"
        />
      ) : (
        <Image
          className="block h-7 w-7 rounded-full"
          src="/icon_light.png"
          width={40}
          height={40}
          alt="Logo"
        />
      )}
      <h1 className={clsx("text-xl font-black", className)}>TalentLayer</h1>
    </Link>
  );
};
