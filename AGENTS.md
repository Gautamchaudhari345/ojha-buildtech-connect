## Project rules
- Business details (phone, email, address, domain, socials) live only in src/config/site.ts — so placeholders are swapped in one place.
- Page content lives in src/data/*; routes only render it — keeps copy editable without touching layout.
- Contact and quote forms open a pre-filled email or WhatsApp message for static submission.
