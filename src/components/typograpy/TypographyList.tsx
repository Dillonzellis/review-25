type TypographyListProps = {
  children: React.ReactNode;
};

export function TypographyList({ children }: TypographyListProps) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}
