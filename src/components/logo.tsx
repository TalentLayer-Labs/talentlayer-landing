import { clsx } from "clsx";
import { useTheme } from "next-themes";
import Link from "next/link";

export interface LogoProps {
  href?: string;
  className?: string;
}

export const Logo = ({ href = "/", className }: LogoProps) => {
  const { theme } = useTheme();

  return (
    <Link href={href} className="flex items-center gap-2">
      {theme === "light" ? (
        <img
          className="block h-7 w-7 rounded-full"
          src="/icon.png"
          width={44}
          height={44}
          alt="Logo"
        />
      ) : (
        <img
          className="block h-7 w-7 rounded-full"
          src="/icon_light.png"
          width={44}
          height={44}
          alt="Logo"
        />
      )}
      <h1 className={clsx("text-xl font-black", className)}>TalentLayer</h1>
    </Link>
  );
};
