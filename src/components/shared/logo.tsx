import localFont from "next/font/local";
import Link from "next/link";

const RushkFont = localFont({
  src: "../../../public/fonts/Rushk.otf",
});

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  const colorClass =
    variant === "light"
      ? "text-white hover:text-amber-400"
      : "text-gray-900 hover:text-amber-900";

  return (
    <Link
      href="/"
      aria-label="Ndito Travel Homepage"
      className={`${RushkFont.className} text-2xl sm:text-3xl transition-colors duration-300 ${colorClass} focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:outline-none rounded-md px-1 ${className}`}
    >
      Ndito Travel
    </Link>
  );
};