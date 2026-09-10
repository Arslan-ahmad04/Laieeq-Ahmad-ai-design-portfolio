import { ArrowRight, BarChart3, Code2, Layers3, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ButtonLink } from "@/components/common/ButtonLink";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SocialLinks } from "@/components/common/SocialLinks";
import { clientConfig } from "@/config/client.config";
import { designConfig } from "@/config/design.config";
import { certificates } from "@/data/certificates";
import { clients } from "@/data/clients";
import { experience } from "@/data/experience";
import { gallery } from "@/data/gallery";
import { portfolio } from "@/data/portfolio";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { qualifications } from "@/data/qualifications";
import { services } from "@/data/services";
import { skills } from "@/data/skills";
import { specializations } from "@/data/specializations";
import { testimonials } from "@/data/testimonials";
import type { ServiceItem, TimelineItem } from "@/types/content";
import type { AboutVariant } from "@/types/design";
import type { EnabledSection } from "@/types/section";

type Props = { section: EnabledSection };
const animationProps = { enabled: designConfig.animation.enabled, preset: designConfig.animation.preset } as const;

function EmptyState({ label }: { label: string }) { return <p className="empty-state">Add {label} in the matching file under <code>src/data</code>.</p>; }

export function AboutSection({ section }: Props) {
  const variant: AboutVariant = designConfig.sections.about.variant;
  const showImage = (["image-left", "image-right"] as readonly AboutVariant[]).includes(variant);
  return <AnimatedSection id="about" className="page-width" {...animationProps}><div className="about-layout" data-variant={variant}><SectionHeading eyebrow={clientConfig.about.eyebrow} title={section.title ?? "About"} />{showImage && clientConfig.profileImage ? <div className="about-image"><Image src={clientConfig.profileImage} alt={clientConfig.profileImageAlt} fill sizes="(max-width: 760px) 100vw, 30vw" /></div> : null}<div className="about-copy"><h3>{clientConfig.about.heading}</h3>{clientConfig.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="stat-grid">{clientConfig.about.highlights.map((highlight) => <div className="stat" key={highlight.label}><strong>{highlight.value}</strong><span>{highlight.label}</span></div>)}</div></div></AnimatedSection>;
}

export function SkillsSection({ section }: Props) {
  return <AnimatedSection id="skills" className="page-width" {...animationProps}><SectionHeading eyebrow="What I work with" title={section.title ?? "Skills"} intro="A practical toolkit shaped around shipping good products—not collecting technologies." />{skills.length ? <div className="skills-layout" data-variant={designConfig.sections.skills.variant}>{skills.map((group) => <article className="skill-group surface-card" key={group.category}><h3>{group.category}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div> : <EmptyState label="skills" />}</AnimatedSection>;
}

export function ExperienceSection({ section }: Props) {
  return <AnimatedSection id="experience" className="page-width" {...animationProps}><SectionHeading eyebrow="Where I’ve contributed" title={section.title ?? "Experience"} />{experience.length ? <div className="timeline">{experience.map((item) => <article key={`${item.company}-${item.period}`}><time>{item.period}</time><div><h3>{item.role}</h3><p className="timeline-meta">{item.company}</p><p>{item.summary}</p></div></article>)}</div> : <EmptyState label="experience" />}</AnimatedSection>;
}

export function ProjectsSection({ section }: Props) {
  return <AnimatedSection id="projects" className="page-width" {...animationProps}><SectionHeading eyebrow="Built to make a difference" title={section.title ?? "Projects"} intro="A few products where strong engineering created a simpler experience and a better outcome." />{projects.length ? <div className="project-grid" data-variant={designConfig.sections.projects.variant}>{projects.map((project, index) => <article className="project-card surface-card" data-featured={project.featured} key={project.slug}><div className="project-number">0{index + 1}</div><div><p className="project-outcome">{project.outcome}</p><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><Link href={`/projects/${project.slug}`}>{section.ctaLabel ?? "View project"}<ArrowRight aria-hidden="true" size={16} /></Link></article>)}</div> : <EmptyState label="projects" />}</AnimatedSection>;
}

const serviceIcons = { code: Code2, layers: Layers3, sparkles: Sparkles, chart: BarChart3 };
function ServiceGrid({ items }: { items: readonly ServiceItem[] }) { return <div className="service-grid" data-variant={designConfig.sections.services.variant}>{items.map((item) => { const Icon = serviceIcons[item.icon]; return <article className="surface-card" key={item.title}><Icon aria-hidden="true" /><h3>{item.title}</h3><p>{item.description}</p></article>; })}</div>; }
export function ServicesSection({ section }: Props) { return <AnimatedSection id="services" className="page-width" {...animationProps}><SectionHeading eyebrow="How I can help" title={section.title ?? "Services"} />{services.length ? <ServiceGrid items={services} /> : <EmptyState label="services" />}</AnimatedSection>; }
export function SpecializationsSection({ section }: Props) { return <AnimatedSection id="specializations" className="page-width" {...animationProps}><SectionHeading eyebrow="Focused expertise" title={section.title ?? "Specializations"} />{specializations.length ? <ServiceGrid items={specializations} /> : <EmptyState label="specializations" />}</AnimatedSection>; }

export function PortfolioSection({ section }: Props) { return <AnimatedSection id="portfolio" className="page-width" {...animationProps}><SectionHeading eyebrow="A visual selection" title={section.title ?? "Portfolio"} />{portfolio.length ? <div className="portfolio-grid" data-variant={designConfig.sections.portfolio.variant}>{portfolio.map((item, index) => <Link className="portfolio-card" href={`/portfolio/${item.slug}`} key={item.slug}><span>0{index + 1}</span><div><p>{item.category}</p><h3>{item.title}</h3><small>{item.description}</small></div></Link>)}</div> : <EmptyState label="portfolio work" />}</AnimatedSection>; }

function TimelineList({ items }: { items: readonly TimelineItem[] }) { return <div className="credential-grid">{items.map((item) => <article className="surface-card" key={`${item.title}-${item.meta}`}><p>{item.meta}</p><h3>{item.title}</h3><span>{item.description}</span></article>)}</div>; }
export function QualificationsSection({ section }: Props) { return <AnimatedSection id="qualifications" className="page-width" {...animationProps}><SectionHeading eyebrow="Training and education" title={section.title ?? "Qualifications"} />{qualifications.length ? <TimelineList items={qualifications} /> : <EmptyState label="qualifications" />}</AnimatedSection>; }
export function CertificatesSection({ section }: Props) { return <AnimatedSection id="certificates" className="page-width" {...animationProps}><SectionHeading eyebrow="Continued practice" title={section.title ?? "Certificates"} />{certificates.length ? <TimelineList items={certificates} /> : <EmptyState label="certificates" />}</AnimatedSection>; }

export function TestimonialsSection({ section }: Props) { return <AnimatedSection id="testimonials" className="page-width" {...animationProps}><SectionHeading eyebrow="From collaborators" title={section.title ?? "Testimonials"} />{testimonials.length ? <div className="testimonial-grid" data-variant={designConfig.sections.testimonials.variant}>{testimonials.map((item) => <figure className="surface-card" key={item.name}><blockquote>“{item.quote}”</blockquote><figcaption><strong>{item.name}</strong><span>{item.role}</span></figcaption></figure>)}</div> : <EmptyState label="testimonials" />}</AnimatedSection>; }
export function ClientsSection({ section }: Props) { return <AnimatedSection id="clients" className="page-width" {...animationProps}><SectionHeading eyebrow="Selected partnerships" title={section.title ?? "Clients"} /><div className="client-list">{clients.map((client) => <span key={client}>{client}</span>)}</div></AnimatedSection>; }
export function GallerySection({ section }: Props) { return <AnimatedSection id="gallery" className="page-width" {...animationProps}><SectionHeading eyebrow="Behind the work" title={section.title ?? "Gallery"} /><div className="gallery-grid">{gallery.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></AnimatedSection>; }
export function PublicationsSection({ section }: Props) { return <AnimatedSection id="publications" className="page-width" {...animationProps}><SectionHeading eyebrow="Ideas in public" title={section.title ?? "Publications"} />{publications.length ? <div className="publication-list">{publications.map((item) => <article key={item.title}><div><p>{item.publication} · {item.year}</p><h3>{item.title}</h3></div>{item.href ? <a href={item.href}>Read <ArrowRight size={16} /></a> : null}</article>)}</div> : <EmptyState label="publications" />}</AnimatedSection>; }

export function AppointmentSection({ section }: Props) { const href = clientConfig.contact.email ? `mailto:${clientConfig.contact.email}?subject=Appointment request` : clientConfig.contact.whatsapp ? `https://wa.me/${clientConfig.contact.whatsapp.replace(/\D/g, "")}` : "#contact"; return <AnimatedSection id="appointment" className="page-width" {...animationProps}><div className="appointment-panel"><p className="eyebrow">Appointments</p><h2>{section.title ?? "Book an appointment"}</h2><p>Share what you need help with and a preferred time. You’ll receive a confirmation directly.</p><ButtonLink href={href}>{section.ctaLabel ?? "Request an appointment"}</ButtonLink></div></AnimatedSection>; }
export function ContactSection({ section }: Props) { const emailHref = clientConfig.contact.email ? `mailto:${clientConfig.contact.email}` : "#hero"; return <AnimatedSection id="contact" className="page-width contact-section" {...animationProps}><div className="contact-layout" data-variant={designConfig.sections.contact.variant}><div><p className="eyebrow">Have a useful challenge?</p><h2>{section.title ?? "Let’s connect"}</h2><p>Tell me where you’re headed and what is getting in the way. I’ll reply with a thoughtful next step.</p></div><div className="contact-actions"><ButtonLink href={emailHref}>Send an email</ButtonLink>{clientConfig.contact.email ? <a className="contact-email" href={emailHref}>{clientConfig.contact.email}</a> : null}<SocialLinks showLabels /></div></div></AnimatedSection>; }
