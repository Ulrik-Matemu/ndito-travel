import localFont from "next/font/local";
import Link from "next/link";

const RushkFont = localFont({
    src: "../../../public/fonts/Rushk.otf",
})

export const Logo = () => {
    return (
        <Link href="/" className={`${RushkFont.className} text-2xl md:text-3xl`}>
            Ndito Travel
        </Link>
    );
}