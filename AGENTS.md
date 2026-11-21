<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Business details (phone, email, address, domain, socials) live only in src/config/site.ts — so placeholders are swapped in one place.
- Page content lives in src/data/*; routes only render it — keeps copy editable without touching layout.
- Contact and quote forms share one validated server function (src/lib/enquiries.functions.ts) — one set of rules for every submission.
