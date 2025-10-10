import Container from "@/components/layout/Container";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="sticky top-0 z-[50] bg-surface/80 backdrop-blur">
      <Container>
        <h2 className="text-[clamp(1.1rem,4.2vw,1.55rem)] md:text-[1.6rem] text-primary py-2.5 md:py-3">
          {title}
        </h2>
      </Container>
    </div>
  );
}


