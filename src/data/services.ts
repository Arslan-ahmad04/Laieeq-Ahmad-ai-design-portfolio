import type { ServiceItem } from "@/types/content";
export const services = [
  { title: "Product engineering", description: "From a crisp first release to a resilient production system.", icon: "code" },
  { title: "Technical direction", description: "Practical architecture decisions that support the product and the team.", icon: "layers" },
  { title: "Interface systems", description: "Accessible, expressive UI foundations that stay coherent as products grow.", icon: "sparkles" },
] satisfies readonly ServiceItem[];
