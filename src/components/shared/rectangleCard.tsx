interface RectangleCardProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
}

export const RectangleCard = ({
  children,
  className = "",
  as = "section",
}: RectangleCardProps) => {
  const Component = as;
  return (
    <Component className={`my-8 md:my-14 ${className}`}>
      {children}
    </Component>
  );
};