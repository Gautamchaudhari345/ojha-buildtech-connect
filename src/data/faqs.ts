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
      "Terraces and roofs, bathrooms and other wet areas, basements, water tanks, external walls, and cracks that are already leaking — on homes and on commercial buildings. Which system we use depends on what the inspection finds, not on a standard package.",
  },
  {
    question: "Will waterproofing stop leaks permanently?",
    category: "Waterproofing",
    answer:
      "No. A leak can return if the structure moves, a drain blocks, or later work damages the treatment. What we commit to is the diagnosis, the system chosen for that surface, careful application, and checks along the way — plus written care notes when we hand the site back. Any workmanship period is stated in the quotation, not as a slogan on this website.",
  },
  {
    question: "Do you take renovation and repair work, or only new construction?",
    category: "Civil Work",
    answer:
      "Both. New structure, renovation, plaster, masonry, concrete and finishing. A small repair is welcome. If a job needs a specialist we do not have, we will say so instead of stretching the scope to win it.",
  },
  {
    question: "Is a site inspection needed before I get a quotation?",
    category: "Site Inspection",
    answer:
      "For almost every water problem, yes. The mark on the ceiling is rarely the place the water enters, and access changes the cost. A visit lets us price the repair that is actually required, not a guess that protects us and surprises you.",
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
      "No. A number given before anyone has seen the site usually protects the contractor. On a call we can say what kind of work it sounds like. The figure you can rely on is the written quotation after a visit.",
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
      "Call, write, or send the form with what you are seeing and where the building is. We will tell you if a visit is the next step, then follow with a written proposal. You do not need drawings to start.",
  },
];
