import Container from "@/components/layout/Container";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="sticky top-0 z-[50] bg-surface/80 backdrop-blur border-b border-border">
      <Container>
        <h2 className="text-h3 md:text-h2 text-primary py-2.5 md:py-3">{title}</h2>
      </Container>
    </div>
  );
}


