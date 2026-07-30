import localFont from "next/font/local";
import Link from "next/link";

const AgrandirBold = localFont({
  src: "../../../public/fonts/Agrandir-TextBold.otf",
});

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  ariaLabel: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#231f20] text-white hover:bg-black active:bg-gray-900",
  secondary: "bg-white text-[#231f20] border border-[#231f20] hover:bg-[#f5f5f5] active:bg-gray-100",
  tertiary: "bg-transparent text-[#231f20] hover:bg-[#f5f5f5] border border-transparent",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm md:px-5 md:py-2 md:text-base",
  md: "px-5 py-2 text-base md:px-7 md:py-2.5 md:text-lg",
  lg: "px-6 py-2.5 text-lg md:px-8 md:py-3 md:text-xl",
};

export const Button = ({
  ariaLabel,
  children,
  onClick,
  variant = "primary",
  size = "lg",
  href,
  external = false,
  disabled = false,
  type = "button",
  className = "",
}: ButtonProps) => {
  const baseClasses = `inline-flex items-center justify-center rounded-md font-bold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:ring-offset-2 focus-visible:outline-none ${variantClasses[variant]} ${sizeClasses[size]} ${AgrandirBold.className} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={baseClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} aria-label={ariaLabel} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
};