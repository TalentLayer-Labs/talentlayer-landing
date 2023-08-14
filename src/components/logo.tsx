import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  href?: string;
  className?: string;
}

export const Logo = ({ href = "/", className }: LogoProps) => {
  return (
    <Link href={href} className="flex items-center gap-3">
      <Image className="block h-7 w-7 rounded-full" src="/icon.png" width={40} height={40} alt="Logo"/>
      <span className={clsx("text-xl font-black", className)}>TalentLayer</span>
    </Link>
  );
};
