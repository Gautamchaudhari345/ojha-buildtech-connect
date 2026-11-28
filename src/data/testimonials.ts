export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Sharma",
    role: "Homeowner",
    quote:
      "They walked the terrace before naming a price. The quote pointed to the joint that was letting water in, and it also said what was not included.",
  },
  {
    name: "Anjali Deshmukh",
    role: "Apartment resident",
    quote:
      "The bathroom was done in stages. We knew which day the water would be off, and the rest of the flat stayed usable.",
  },
  {
    name: "Suresh Iyer",
    role: "Plant manager",
    quote:
      "The plant kept running. They wrote the sequence around the shifts, and each stage was checked before the next one covered it.",
  },
];
