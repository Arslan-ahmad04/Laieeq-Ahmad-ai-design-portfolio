import { profileDetails } from "@/data/profile";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { sectionsConfig } from "@/config/sections.config";
import { clientConfig } from "@/config/client.config";
import { getEnabledSections } from "@/lib/getEnabledSections";
import { pageMetadata, siteOrigin } from "@/lib/seo";
export const metadata = pageMetadata(
  clientConfig.name + " | " + clientConfig.professionalTitle,
  clientConfig.seo.description,
  "/",
);
export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: clientConfig.name,
    description: clientConfig.seo.description,
    jobTitle: profileDetails.jobTitle,
    email: clientConfig.contact.email,
    telephone: clientConfig.contact.phone,
    url: siteOrigin ?? undefined,
    image:
      siteOrigin && clientConfig.profileImage
        ? siteOrigin + clientConfig.profileImage
        : undefined,
    sameAs: [clientConfig.contact.instagram].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      ...profileDetails.address,
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\u003c"),
        }}
      />
      {getEnabledSections(sectionsConfig).map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
