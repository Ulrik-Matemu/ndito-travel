import localFont from "next/font/local";

const AgrandirBold = localFont({
    src: "../../../public/fonts/Agrandir-TextBold.otf"
});

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
    ariaLabel: string;
    children: React.ReactNode;
    onClick: () => void;
    variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-[#231f20] text-white hover:bg-black",
    secondary: "bg-white text-[#231f20] border border-[#231f20] hover:bg-[#f5f5f5]",
    tertiary: "bg-transparent text-[#231f20] hover:bg-[#f5f5f5] border border-transparent",
};

export const Button = ({
    ariaLabel,
    children,
    onClick,
    variant = "primary",
}: ButtonProps) => (
    <button
        aria-label={ariaLabel}
        onClick={onClick}
        className={`px-8 py-2 text-xl rounded transition ${variantClasses[variant]} ${AgrandirBold.className}`}
    >
        {children}
    </button>
);