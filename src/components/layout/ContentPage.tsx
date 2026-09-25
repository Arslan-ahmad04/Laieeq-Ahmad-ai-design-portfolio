import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { sectionsConfig } from "@/config/sections.config";
import { pageContent } from "@/data/pages";
import { ButtonLink } from "@/components/common/ButtonLink";
export function ContentPage({ page }: { page: keyof typeof pageContent }) {
  const content = pageContent[page];
  return (
    <div className="interior-page">
      <header className="page-intro page-width">
        <p className="eyebrow">{content.title}</p>
        <h1>{content.heading}</h1>
        <p>{content.description}</p>
      </header>
      {content.sections.map((id) => (
        <SectionRenderer
          key={id}
          section={{ ...sectionsConfig[id], id, previewLimit: undefined }}
        />
      ))}
      {page !== "contact" && (
        <div className="page-width page-cta">
          <p>Have a project in mind?</p>
          <ButtonLink href="/contact">Let’s Work Together</ButtonLink>
        </div>
      )}
    </div>
  );
}
