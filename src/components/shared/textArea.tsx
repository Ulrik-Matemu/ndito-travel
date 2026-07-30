import localFont from "next/font/local";

const LoubagMedium = localFont({
  src: "../../../public/fonts/Loubag-Medium.ttf",
});

const AgrandirRegular = localFont({
  src: "../../../public/fonts/Agrandir-Regular.otf",
});

type TextAreaProps = {
  heading: string;
  content: string;
  as?: "h2" | "h3" | "h4";
};

export const TextArea = ({ heading, content, as = "h2" }: TextAreaProps) => {
  const HeadingTag = as;

  return (
    <section className="my-12 md:my-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <HeadingTag
          className={`text-2xl sm:text-3xl md:text-4xl tracking-wide font-bold text-gray-900 ${LoubagMedium.className}`}
        >
          {heading}
        </HeadingTag>

        {/* Decorative Divider */}
        <div
          aria-hidden="true"
          className="bg-amber-900/80 h-1 w-20 sm:w-28 mx-auto my-6 rounded-full"
        />

        <p
          className={`${AgrandirRegular.className} text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto`}
        >
          {content}
        </p>
      </div>
    </section>
  );
};