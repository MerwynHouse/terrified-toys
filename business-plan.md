# Terrified Toys — Business Plan (Restart, June 2026)

## 1. Summary
Terrified Toys is a DTC pet toy brand selling sewn plush animals with comedic terrified expressions. The joke — the toy knows it's about to be destroyed — is the entire product identity. Originally planned ~1 year ago; this is a restart with a fresh manufacturer search (no usable contact survived from the original plan) and an updated go-to-market.

**Founders:** Daniel (strategy, operations, business development), Trinity (creative lead, design, content, brand voice).

Brand pillars, voice, visual identity, and target personas are detailed in [brand-strategy.md](brand-strategy.md) — that doc is the source of truth for tone/audience; this plan defers to it rather than redefining it.

## 2. Product
- Sewn plush dog chew toys, three canonical designs: **NZ deer (stag), rabbit, possum** — the panicked/terrified facial expression is the main hook on every design. Each toy also has red internal stuffing, so when the dog chews through the seams, red fluff shows through underneath — a small comedic visual detail, not a graphic or "gore"-branded effect.
- Retail price: $30–45 NZD.
- Initial run: demo batch, budget $250 NZD, sized to manufacturer minimums (target 10-25 units depending on quote).
- **Design status: concept/brief finalized, no artwork files exist yet.** The three-design spec above (terrified expression + red internal stuffing) is what's being sent to manufacturers as a written brief (see `outreach-emails.md`); this replaces the earlier "recover lost original designs" framing — there's nothing to recover, the spec is new and clear, but actual print-ready artwork still needs to be created (by Trinity or by a manufacturer's design team) before production can start. The two existing reference photos (`images/`) show the expression/tone only — the red stuffing detail isn't visible yet.
- **Prior art check complete:** the terrified-expression concept is confirmed original in the commercial dog toy market — no directly competing product found. Reduces (but doesn't eliminate) market-validation risk; see Risks.
- **Trademark:** "Terrified Toys" confirmed clear on IPONZ (New Zealand trademark register) as of this check — not yet filed. See Open Items.

## 3. Manufacturing
No surviving contact with the originally "identified" supplier from the original plan — this was a fresh search. Full shortlist, comparison, and IP/confidentiality review now live in [suppliers.md](suppliers.md) and [supplier-ip-review.md](supplier-ip-review.md) — 8 manufacturers researched, prioritized by MOQ fit and IP safety, not just price.

**Outreach status:**
- **Sent (email):** YourStuffMade, Child's Own
- **Sent (web contact form):** Bespoke Pet Products
- **Not yet contacted:** Stuffed Animal Pros, Szoneier, Wedogy, EverLighten (lower priority — see `suppliers.md` for why)

**Next step:** track responses (price at 10 vs. 100 units, brief-only feasibility, lead time, red-stuffing/destruction detailing experience) back into `suppliers.md` as they land; contact the remaining shortlist if the first three don't yield a workable quote.

## 4. Unit Economics (demo run estimate)
Assuming a $250 budget and a 10-unit demo run at ~$25/unit landed cost (placeholder pending real quotes):
- Cost per unit: ~$25 NZD (manufacturing + shipping, estimate)
- Retail price: $30–45 NZD
- Gross margin per unit: $5–20 NZD (11–44%)
- Note: margins improve significantly at higher volume (MOQ 100+ runs typically cut per-unit cost by 40-60%) — demo run is about validation, not profit.

**This section needs real numbers** once manufacturer quotes come in — treat the above as a placeholder to be replaced, not a forecast to plan around.

**Founding-buyer pricing:** the pre-launch waitlist page offers early signups $30 NZD (vs. a $40 NZD list price) to reward first access and create real urgency. At ~$25/unit estimated cost, this leaves a thin $5/unit margin on founding-buyer sales — acceptable for the demo run since the goal is validation and content, not profit, but worth re-checking once real manufacturer costs land. If landed cost comes in above ~$28/unit, the founding price will need to move or the demo-run unit count will need to shrink.

## 5. Go-to-Market
Detailed in [marketing-campaign-plan.md](marketing-campaign-plan.md). Summary:
- Phase 0: pre-launch waitlist page (`pre-launch.html`) live before any other content goes out — gives every social post, DM, and bio link a real destination, and captures interest before stock exists.
- Phase 1: pre-sell 10 units to warm buyers (friends/family with pets) — de-risks the demo run financially before cold spend.
- Phase 2: organic social content (TikTok + Instagram Reels primary) using warm-buyer reactions as the core content engine.
- Phase 3: cold-audience push targeting 50 orders within 90 days of stock arrival, with waitlist signups converted first via a founding-buyer discount window.
- No paid advertising budget at this stage — $250 goes entirely to product, not marketing spend.

## 6. Tech Stack & Architecture
Settled decision (June 2026) on the division of tools, to avoid re-deciding this later:

- **MailerLite — subscribers and email only.** Owns the waitlist subscriber list (one group per persona) and email automations (warm-up sequence, founding-buyer email). It does not host any page and is not used for taking orders — its free-tier "1 digital product/booking" feature doesn't fit a physical multi-unit product, so it's intentionally out of scope here.
- **GitHub + Vercel — everything else, including the MailerLite connection itself.** Owns the actual pages (`pre-launch.html` + 4 persona pages in `landing/`), all branding/design, hosting, and deployment — and now also a small serverless function (`api/subscribe.js`) that each form POSTs to, which calls MailerLite's API directly and routes the signup into the right persona group. The MailerLite API key lives only as an encrypted Vercel environment variable, never in the page source or the repo. Push to `main` → auto-deploys to [terrified-toys.vercel.app](https://terrified-toys.vercel.app).
- **Purchasing/ordering (when needed) — Stripe Payment Links, no database.** At demo-run scale (10-25 units), a Stripe Payment Link is enough: Stripe hosts checkout, emails order notifications, and its dashboard *is* the order record. No custom database, backend, or Shopify build is needed at this stage — revisit only if order volume or SKU complexity outgrows what's manageable by checking the Stripe dashboard directly. On hold until demo stock is closer to arriving.
- **Fulfillment — self-fulfilled from pre-manufactured stock, not dropshipped.** Researched true dropshipping (see `suppliers.md` "Dropshipping Assessment") and ruled it out: a custom-sculpted plush with a structural red-stuffing detail can't be produced fast per-order regardless of branding — every option found that calls itself "dropshipping" for this product type is either wholesale-minimum, 4-10+ weeks per order, or doesn't actually support a custom 3D shape. Sticking with manufacture-a-batch-then-self-fulfil; revisit a 3PL only once order volume outgrows hand-shipping.

## 7. Milestones & Timeline
| Milestone | Target |
|---|---|
| Pre-launch waitlist page + 4 persona pages live, MailerLite connected via serverless proxy | Week 1 |
| Trademark search clear on IPONZ | Done |
| Supplier outreach sent (YourStuffMade, Child's Own, Bespoke Pet Products) | Done |
| Create design/artwork files (spec finalized: deer, rabbit, possum, terrified expression + red internal stuffing detail) | Week 1-2 |
| Manufacturer quotes received | Week 2 |
| Demo run ordered | Week 2-3 |
| Warm pre-sell locked (10 units) | Week 1-2 (parallel) |
| Demo stock arrives | Week 5-6 (pending lead time) |
| Warm buyers receive toys, reaction content collected | Week 5-6 |
| Cold-audience ordering opens | Week 7 |
| First sale (cold) | Target: within 90 days of stock arrival |

## 8. Risks
- **Design artwork creation:** spec is finalized (deer, rabbit, possum, terrified expression + red internal stuffing detail) but no actual artwork files exist yet — this is the current critical path blocker, ahead of manufacturing. Lower risk than "recover lost files" since there's nothing to recover, but Trinity (or a manufacturer's design team) still needs to produce real artwork before quoting can finalize.
- **Trademark not yet filed:** "Terrified Toys" is confirmed clear on IPONZ, but the clearance is only good until someone else files first — worth filing sooner rather than treating this as fully resolved.
- **Waitlist tooling dependency:** signups are captured via a serverless function (`api/subscribe.js`) calling MailerLite's API directly — free-tier caps at 250 subscribers and 2,500 emails/month, fine for current scale but worth monitoring as the list grows. MailerLite's free plan only supports 1 active "digital product/booking" — it is being used purely for email capture and sequencing, not for taking actual toy orders, since it doesn't fit a physical multi-unit product.
- **Founding-price margin compression:** the $30 NZD founding-buyer price leaves a thinner margin than the standard $30-45 range if real manufacturing costs land above estimate — see Unit Economics.
- **Manufacturer reliability:** untested supplier relationship — mitigate by ordering the smallest viable demo batch before committing to a larger production run.
- **Market validation:** the core bet is that the joke travels on social video. Treat the demo run as the test; if engagement is weak, revisit before investing in a larger production run.
- **Cash:** bootstrapped, no marketing budget — growth depends entirely on organic content performance.

## 9. What Success Looks Like (Year 1)
- Demo run sold out to warm buyers
- 50 cold-audience orders within 90 days of stock arrival
- One piece of content with genuine organic breakout reach
- Trinity has a growing audience around the brand
- A real manufacturer relationship established for a larger second production run

## Open Items (need Daniel/Trinity input)
1. Create actual design/artwork files for the 3 designs (deer, rabbit, possum, terrified expression + red internal stuffing detail) — spec is final, files aren't.
2. Await responses from YourStuffMade, Child's Own, Bespoke Pet Products (outreach sent); decide whether to also contact the remaining shortlist (Stuffed Animal Pros, Szoneier, Wedogy, EverLighten) in parallel or wait.
3. Confirm the 10 warm pre-sell buyers (who, specifically) and send them `warm-outreach-dms.md` — drafted, not yet sent.
4. Set up a Stripe Payment Link for order-taking once demo stock is closer to arriving (see Tech Stack & Architecture — decided approach, just not yet built).
5. ~~Connect MailerLite to the waitlist pages~~ — done. All 5 forms POST to `api/subscribe.js`, which routes signups into per-persona MailerLite groups (Waiting List, Petty Partner, Hunting Lad, Dog Content, Prank Gifter). Remaining manual step: build the actual email warm-up automations inside the MailerLite dashboard (not API-accessible on the free plan) for each group — copy is drafted in `email-sequences.md`.
6. File the "Terrified Toys" trademark with IPONZ — confirmed clear, not yet filed.
