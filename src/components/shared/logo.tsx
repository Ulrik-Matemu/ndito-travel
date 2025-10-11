import localFont from "next/font/local";

const RushkFont = localFont({
    src: "../../../public/fonts/Rushk.otf",
})

export const Logo = () => {
    return <div className={`${RushkFont.className} text-3xl`}>Ndito Travel</div>;
}