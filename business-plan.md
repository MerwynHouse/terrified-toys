# Terrified Toys — Business Plan (Restart, June 2026)

## 1. Summary
Terrified Toys is a DTC pet toy brand selling sewn plush animals with comedic terrified expressions. The joke — the toy knows it's about to be destroyed — is the entire product identity. Originally planned ~1 year ago; this is a restart with a fresh manufacturer search (no usable contact survived from the original plan) and an updated go-to-market.

**Founders:** Daniel (strategy, operations, business development), Trinity (creative lead, design, content, brand voice).

Brand pillars, voice, visual identity, and target personas are detailed in [brand-strategy.md](brand-strategy.md) — that doc is the source of truth for tone/audience; this plan defers to it rather than redefining it.

## 2. Product
- Sewn plush toy animals, custom-designed with comedic terror expressions.
- Retail price: $30–45 NZD.
- Initial run: demo batch, budget $250 NZD, sized to manufacturer minimums (target 10-25 units depending on quote).
- Designs: previously created but not currently locatable in any connected system (repo, Desktop, email). Action item: Daniel/Trinity to recover or recreate design files before manufacturer quoting can finalize artwork.

## 3. Manufacturing
No surviving contact with the originally "identified" supplier — treating this as a fresh search. Shortlisted low-MOQ / no-minimum custom plush manufacturers (see outreach plan below):
- Stuffed Animal Pros (no stated minimum)
- YourStuffMade (low MOQ, ~$9.99/unit base)
- Budsies (50 unit minimum, more established)
- Backup/scale options once past demo stage: Maple Eye Toys (MOQ 100, safety certified), Jianchuang (MOQ 300), Alibaba marketplace suppliers (MOQ 20-100+, cheapest but more vetting required)

**Next step:** request quotes from the top 2-3 once final designs are ready, comparing per-unit cost, MOQ, lead time, and safety certification (EN71/ASTM — relevant if selling beyond NZ).

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

## 7. Milestones & Timeline
| Milestone | Target |
|---|---|
| Pre-launch waitlist page + 4 persona pages live, MailerLite connected via serverless proxy | Week 1 |
| Recover/finalize designs | Week 1-2 |
| Manufacturer quotes received | Week 2 |
| Demo run ordered | Week 2-3 |
| Warm pre-sell locked (10 units) | Week 1-2 (parallel) |
| Demo stock arrives | Week 5-6 (pending lead time) |
| Warm buyers receive toys, reaction content collected | Week 5-6 |
| Cold-audience ordering opens | Week 7 |
| First sale (cold) | Target: within 90 days of stock arrival |

## 8. Risks
- **Design recovery:** if original designs can't be found, Trinity needs time to recreate them — this is the current critical path blocker, ahead of manufacturing.
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
1. Locate or recreate the original toy designs.
2. Decide which manufacturer to formally request quotes from.
3. Confirm the 10 warm pre-sell buyers (who, specifically).
4. Set up a Stripe Payment Link for order-taking once demo stock is closer to arriving (see Tech Stack & Architecture — decided approach, just not yet built).
5. ~~Connect MailerLite to the waitlist pages~~ — done. All 5 forms POST to `api/subscribe.js`, which routes signups into per-persona MailerLite groups (Waiting List, Petty Partner, Hunting Lad, Dog Content, Prank Gifter). Remaining manual step: build the actual email warm-up automations inside the MailerLite dashboard (not API-accessible on the free plan) for each group.
