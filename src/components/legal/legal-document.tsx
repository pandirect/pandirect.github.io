type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalDocumentProps = {
  intro?: string;
  sections: LegalSection[];
};

export function LegalDocument({ intro, sections }: LegalDocumentProps) {
  return (
    <>
      {intro && <p className="text-muted-foreground">{intro}</p>}
      {sections.map((section) => (
        <section key={section.title} className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} className="mt-3 text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </>
  );
}
