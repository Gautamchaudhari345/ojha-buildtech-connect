/**
 * FAQ content. Answers are intentionally honest and configurable — they
 * promise no warranty periods, fixed pricing or guaranteed timelines. Update
 * with company-confirmed policy before launch.
 */

export type FaqCategory =
  | "Waterproofing"
  | "Civil Work"
  | "Site Inspection"
  | "Quotations"
  | "Timelines"
  | "Service Coverage"
  | "Maintenance & Workmanship";

export type Faq = {
  question: string;
  answer: string;
  category: FaqCategory;
};

export const faqCategories: ("All" | FaqCategory)[] = [
  "All",
  "Waterproofing",
  "Civil Work",
  "Site Inspection",
  "Quotations",
  "Timelines",
  "Service Coverage",
  "Maintenance & Workmanship",
];

export const faqs: Faq[] = [
  {
    question: "What waterproofing services do you provide?",
    category: "Waterproofing",
    answer:
      "We handle terrace and roof waterproofing, bathroom and wet-area treatment, basement waterproofing, water-tank waterproofing, external wall leakage treatment, and crack sealing or leakage repair — for both residential and commercial properties. The right system is recommended after inspecting your site.",
  },
  {
    question: "Will waterproofing stop leaks permanently?",
    category: "Waterproofing",
    answer:
      "No responsible contractor can promise a permanent result, because performance depends on the structure, surfaces and conditions specific to your building. What we commit to is correct diagnosis, an appropriate system, proper application and quality checks at each stage — and clear guidance on care after completion.",
  },
  {
    question: "Do you take renovation and repair work, or only new construction?",
    category: "Civil Work",
    answer:
      "Both. Our civil work covers new construction and structural work as well as renovation, repair, plastering, masonry, concrete and finishing. Small repair scopes are welcome — we will tell you honestly if a job falls outside what we do well.",
  },
  {
    question: "Is a site inspection needed before I get a quotation?",
    category: "Site Inspection",
    answer:
      "Yes, in most cases. Water-related problems especially are hard to price correctly without seeing the actual surfaces and access conditions. A site inspection lets us diagnose the cause, not just the symptom, and quote for the work that is actually needed.",
  },
  {
    question: "Do you charge for a site inspection?",
    category: "Site Inspection",
    answer:
      "Inspection arrangements depend on the project's location and size. Mention your requirement when you contact us and we will confirm the inspection terms upfront — before anyone visits.",
  },
  {
    question: "How is a quotation prepared?",
    category: "Quotations",
    answer:
      "After the site inspection we prepare a written quotation describing the scope, materials, stages and inclusions. Quotations are itemised so you can see what you are paying for, and any exclusions are stated clearly rather than discovered later.",
  },
  {
    question: "Do you offer fixed prices over the phone?",
    category: "Quotations",
    answer:
      "We do not quote blind. A price given without seeing the site usually protects the contractor, not you. We can share a broad indication over a call, but the binding figure comes only in a written quotation after inspection.",
  },
  {
    question: "How long does a typical project take?",
    category: "Timelines",
    answer:
      "It depends entirely on scope: a bathroom waterproofing job and a full terrace membrane are very different undertakings. When we quote, we include a realistic schedule with stages so you know what happens when — and we flag anything that could affect the dates, such as weather or access.",
  },
  {
    question: "Can work continue if it rains?",
    category: "Timelines",
    answer:
      "Certain treatments, especially surface-dependent ones like membranes and coatings, cannot be applied correctly during or immediately after rain. We plan around weather where the method requires it and keep you informed rather than rushing work that will fail early.",
  },
  {
    question: "Which areas do you serve?",
    category: "Service Coverage",
    answer:
      "We serve projects across our operating region. Share your project location when you contact us and we will confirm availability, access and any mobilisation considerations for your site.",
  },
  {
    question: "Do you handle commercial and industrial projects?",
    category: "Service Coverage",
    answer:
      "Yes — waterproofing, civil and infrastructure scopes for commercial and industrial properties are a core part of our work, planned around operating schedules where the premises stay in use.",
  },
  {
    question: "What maintenance does waterproofing need afterwards?",
    category: "Maintenance & Workmanship",
    answer:
      "Most systems need only simple care — keeping drains and outlets clear, avoiding damage to treated surfaces during later works, and periodic visual checks. We hand over care guidance specific to the system applied so the treatment performs as intended.",
  },
  {
    question: "What if a treated area leaks again?",
    category: "Maintenance & Workmanship",
    answer:
      "Our workmanship terms are confirmed in writing with every quotation, including what is covered after completion and for how long. We do not publish blanket warranty claims here — you will always know your exact terms before work begins.",
  },
  {
    question: "How do I get started?",
    category: "Site Inspection",
    answer:
      "Send us your requirement through the contact form or request-a-quote page, or call us directly. We will discuss the problem, arrange a site inspection where needed, and follow with a clear written proposal.",
  },
];
