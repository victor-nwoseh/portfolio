import Container from "@/components/layout/Container";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="sticky top-0 z-[50] bg-surface/80 backdrop-blur">
      <Container>
        <h2 className="text-xl font-semibold text-primary leading-tight py-2.5 md:py-3">
          {title}
        </h2>
      </Container>
    </div>
  );
}


