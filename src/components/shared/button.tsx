import localFont from "next/font/local";

const AgrandirBold = localFont({
    src: "../../../public/fonts/Agrandir-TextBold.otf"
});

type ButtonProps = {
    ariaLabel: string;
    children: React.ReactNode;
    onClick: () => void;
};

export const Button = ({ ariaLabel, children, onClick }: ButtonProps) => (
    <button
        aria-label={ariaLabel}
        onClick={onClick}
        className={`px-8 py-2 text-xl text-white bg-[#231f20] rounded hover:bg-black hover:text-white transition ${AgrandirBold.className}`}
    >
        {children}
    </button>
);