import localFont from "next/font/local"

const LoubagMedium = localFont({
    src: "../../../public/fonts/Loubag-Medium.ttf",
})

const AgrandirRegular = localFont({
    src: "../../../public/fonts/Agrandir-Regular.otf",
})

type TextAreaProps = {
    heading: string;
    content: string;
};



export const TextArea = ({ heading, content }: TextAreaProps) => {
    return (
        <>
            <div className="my-10 mx-2 md:mx-6 md:my-20 md:mx-24">
                <h2 className={`text-center text-3xl ${LoubagMedium.className}`}>{heading}</h2>
                <div className="bg-black h-1 w-1/4 mx-auto my-8"></div>
                <p className={`${AgrandirRegular.className} text-xl my-5 text-justify`}>{content}</p>
            </div>
        </>
    )
}