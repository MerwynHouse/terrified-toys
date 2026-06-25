# Terrified Toys — Launch Campaign Brief

## 1. Campaign Overview
**Campaign name:** "It Knows" Launch
**Summary:** Introduce Terrified Toys via short-form video content built around a single joke — the toy's face says it knows exactly what's about to happen to it — driving pre-sales from warm buyers, then cold-audience orders.

**Primary objective:** Sell out the 10-unit warm pre-sell and generate 50 cold-audience orders within 90 days of demo stock arriving.
**Secondary objectives:**
- Build an audience around Trinity's content (target: 1,000 combined TikTok/Instagram followers by day 90)
- Produce one piece of content with genuine organic reach (10x+ normal views) to validate the core joke travels

## 2. Target Audience
**Primary segment:** Pet owners aged 20–45 who are active in TikTok/Instagram/Facebook pet communities, buy toys and gifts for their own pets, and have disposable income for impulse pet purchases ($30-45 NZD range).
- **Pain points:** Pet toys get shredded in minutes; existing toys are generic and uninteresting to buy or gift.
- **Motivations:** Wants something funny to show off online, not just durable. Cares about the moment of giving/filming the toy as much as the toy's lifespan.
- **Where they spend time:** TikTok FYP (pet content, comedy), Instagram Reels, Facebook pet breed/community groups.
- **Buying stage:** Mostly unaware they want this until they see it — this is an impulse/awareness-to-purchase campaign, not a considered-purchase funnel.

**Secondary segment:** Gift buyers — people buying for someone else's pet (birthdays, white elephant/Secret Santa, "new puppy" gifts). Same channels, but messaging should lean into "tag someone whose dog needs this."

## 3. Key Messages
**Core message:** "It knows what's coming." — the toy's terror is the entire pitch; let the visual/video carry it.

**Supporting messages:**
1. The joke is in the toy's face, not in copy — show, don't explain.
2. It's a genuinely good, durable plush — not just a gag. ("Your dog will still wreck it. That's the point.")
3. Perfect impulse gift — for your own pet or someone else's.
4. Made by two people building this for real, not a faceless drop-shipped brand. (Lean on Trinity's authentic creative voice.)

**Tone by channel:**
- TikTok/Reels: deadpan comedic — captions play it completely straight ("Day 1 of giving him a toy that knows its fate")
- Instagram feed/static posts: slightly more polished product-photography tone, still dry humour
- Facebook pet groups: warmer, more conversational — community-first, less "ad-like"

## 4. Channel Strategy
| Channel | Why | Format | Effort | Budget |
|---|---|---|---|---|
| Pre-launch waitlist page | Central conversion point for every other channel — gives social content somewhere to send traffic before there's a Shopify store | Single-page site (`pre-launch.html`), MailerLite-backed name+email form | Low (built) | $0 |
| TikTok (organic) | Primary discovery engine for this audience; short comedic video is the native format for the joke | Reels-style clips: unboxing, "first encounter," destruction in slow-mo | Medium-High | $0 (time only) |
| Instagram Reels + Feed | Same content repurposed; feed posts double as product catalog | Reels + carousel product shots | Medium | $0 (time only) |
| Facebook pet groups | Earned/community — share organically in relevant groups (with permission/no-spam norms) | Native posts, photos/video + caption | Low | $0 |
| Direct outreach (warm pre-sell) | Fastest, most reliable 10 sales — friends/family with pets | DM/text + a simple order form or direct payment link | Low | $0 |
| Paid social ads | Skip for demo run — budget is $250 and should go to product, not ads, until organic content validates the joke | — | — | $0 for now |

### Pre-launch page (`pre-launch.html`)
Single-file, self-contained waitlist/pre-order page, dark-comedic brand tone, both current product photos (black poodle/deer, apricot poodle/rabbit) used as hero social proof. Captures name + email via a MailerLite embedded form (switched from Formspree; a Supabase-backed option was scoped but shelved to avoid a paid-plan requirement).

**Why MailerLite over Formspree/Supabase:** MailerLite's free plan (250 subscribers, 2,500 emails/month) gives a real subscriber list plus 3 free automations — meaning the email warm-up sequence and founding-buyer email below can run natively inside the same free tool, instead of needing a separate email sender. Formspree only gave us an inbox; Supabase would have meant either exposing write-access credentials client-side or paying to lock it down properly.

**Important limitation:** MailerLite's free plan includes only 1 active "digital product or booking" slot, which doesn't fit a physical, multi-unit plush toy. MailerLite is being used purely as the subscriber/email tool here — actual order-taking for the demo run and cold launch still needs its own mechanism (see "Simple order form/payment link" below), not MailerLite's product-sales feature.

**Conversion approach applied (NZ/AU, novelty/humor niche):**
- Headline leads with the visual joke, not a generic "coming soon" — the product image carries the pitch.
- Social proof substitutes for reviews (none exist pre-launch): founder authenticity + a waitlist counter ("47+ dog owners already on the list").
- Urgency is real, not manufactured: the 25-unit demo run cap is the actual scarcity mechanic, framed as "founding buyer" early access + discounted price rather than a fake countdown.
- CTA copy stays in brand voice ("Reserve Mine — My Dog Doesn't Need To Know Yet") instead of generic "Sign Up."
- Price shown in NZD with NZ/AU shipping called out explicitly to avoid currency-confusion bounce.

**Setup task (Daniel):** create a free MailerLite account, a "Waitlist" subscriber group, and an embedded form, then send the embed code so it can be dropped into `pre-launch.html` in place of the current Formspree placeholder. Until then the form will fail silently to visitors (error state will show).

## 5. Content Calendar (8 weeks: pre-sell → demo arrival → cold launch)

| Week | Content Piece | Channel | Notes | Status |
|---|---|---|---|---|
| 1 | Publish pre-launch waitlist page, connect MailerLite embedded form | Web (`pre-launch.html`) | Daniel — must happen before any traffic-driving content goes out | Done (page built); MailerLite embed swap pending |
| 1 | Direct outreach to 10 warm buyers ("first run, want one?") | DM/text | Daniel — now links to the waitlist page instead of an ad-hoc form | Pending |
| 1 | Behind-the-scenes: "why we're doing this" founder post | Instagram Feed | Trinity, sets authentic tone | Pending |
| 2 | Order demo run from manufacturer | — | Daniel, depends on manufacturer quote | Pending |
| 2-4 | Waiting period — teaser content: design sketches, "meet the toys" reveal one design at a time | TikTok + IG Reels | 2-3 short videos, builds anticipation, every caption/bio link drives to the waitlist page | Pending |
| 2-4 | Email warm-up sequence to waitlist signups (2-3 short emails: "meet the toys," demo run update, "it's almost here") | Email (MailerLite automation, triggered on joining the Waitlist group) | Trinity/Daniel — keeps early signups warm until stock arrives so they convert instead of going cold; fits inside MailerLite's free 3-automation limit | Pending |
| 5 | Demo stock arrives — unboxing video | TikTok + Reels | First "real" hero content | Pending |
| 5 | Deliver to warm buyers, ask for filmed reactions | TikTok + Reels | UGC — pet's first reaction to toy is the best organic content | Pending |
| 6 | Compile warm-buyer reaction clips into highlight content | TikTok + Reels + Feed | This is the most likely "breakout" content candidate | Pending |
| 6 | Share in 2-3 relevant Facebook pet groups | Facebook | Low effort, direct | Pending |
| 7 | "Destruction" content — toy meets its fate, in slow motion | TikTok + Reels | Leans fully into the joke/premise | Pending |
| 7 | Open cold-audience ordering (Shopify or simple order form) | All channels | CTA push begins; waitlist gets first/early access before this goes wide | Pending |
| 7 | Founding-buyer email to waitlist: early access + discount window before public launch | Email | Converts warm waitlist before cold-audience push starts | Pending |
| 8 | Gift-angle content: "tag someone whose dog needs this" | TikTok + Reels + Facebook | Targets secondary audience (gift buyers) | Pending |
| 8 | Review/recap: where things stand, thank warm buyers | Instagram Feed | Builds trust/community for next phase | Pending |

## 6. Content Pieces Needed
- **Pre-launch waitlist page** (must-have, built) — `pre-launch.html`, central destination for all social/DM traffic; needs a real MailerLite embedded-form code connected before launch
- **Email warm-up sequence** (must-have) — 2-3 short emails to waitlist signups during weeks 2-4 so early interest doesn't go cold before stock arrives
- **Unboxing video** (must-have) — first reveal of demo stock
- **3-5 design reveal teasers** (must-have) — one per toy design, builds anticipation pre-stock
- **Founder/BTS post** (must-have) — Trinity's voice, why this brand exists
- **Pet reaction UGC compilation** (must-have) — highest-value asset, likely breakout candidate
- **"Destruction" slow-mo video** (must-have) — most directly sells the core joke
- **Gift-angle post** (nice-to-have) — targets secondary audience, can reuse existing footage
- **Simple order form/payment link** (must-have) — needed before cold launch (week 7); doesn't need full Shopify build for demo run
- **Countdown/launch-date messaging** (nice-to-have) — once demo arrival date is confirmed with the manufacturer, add a real countdown to the waitlist page rather than a vague "coming soon"

## 7. Success Metrics
**Primary KPI:** 10/10 warm pre-sell units sold by week 5; 50 cold-audience orders by day 90 post-launch (week 7 start).
**Secondary KPIs:**
- Combined TikTok + Instagram followers: 1,000 by day 90
- At least 1 video crossing 10x normal view count (breakout signal)
- Engagement rate on content >5% (likes+comments+shares / views)
- Order form conversion rate from social traffic (track via link clicks → orders)
- Waitlist signups via `pre-launch.html`: target 75-100 by week 6 (gives a buffer above the 50 cold-order target, since not every signup converts)
- Waitlist-to-purchase conversion rate once founding-buyer email goes out in week 7

**Tracking:** Manual tally for pre-sells (small volume); platform-native analytics (TikTok/IG insights) for content performance; UTM-tagged order-form link for cold conversion tracking; MailerLite subscriber count/group view for waitlist signups (visible and queryable directly in the MailerLite dashboard — no separate export needed).
**Reporting cadence:** Weekly check-in between Daniel and Trinity during the 8-week window.

## 8. Budget Allocation ($250 NZD)
- **Demo run production:** $250 (100% — this is the entire budget; no separate marketing spend at this stage)
- **Marketing cost:** $0 cash — entirely organic content + founder time
- **Contingency:** None built in at this budget level — if the demo run costs more than quoted, marketing timeline slips rather than budget growing

## 9. Risks and Mitigations
- **Risk: joke doesn't land outside your existing network.** Mitigation: treat weeks 2-6 as a real test — if teaser content gets near-zero engagement, revisit messaging/format before committing to cold-audience push in week 7.
- **Risk: manufacturer lead time delays demo stock past week 4-5.** Mitigation: confirm lead time in writing before ordering; build a buffer week into the calendar rather than compressing pre-sell delivery.
- **Risk: warm buyers don't film/share reactions (most valuable content depends on their cooperation).** Mitigation: ask explicitly when delivering toys, make it easy (a 10-second video request, not a production ask), consider a small thank-you incentive for those who do.

## 10. Next Steps
1. Create a free MailerLite account, a "Waitlist" group, and an embedded form; send the embed code so it can replace the Formspree placeholder in `pre-launch.html`, then test a submission end-to-end before sharing the link anywhere.
2. Confirm manufacturer and get demo run quote/lead time in writing (see manufacturer shortlist).
3. Lock in the 10 warm pre-sell buyers this week — send them the waitlist page link, not an ad-hoc DM form.
4. Trinity starts teaser content (design reveals) while demo run is in production; every post/bio links to the waitlist page.
5. Draft the 2-3 email warm-up sequence for waitlist signups (weeks 2-4).
6. Set up the simplest possible order-taking mechanism for cold launch (doesn't need to be Shopify yet — a form + manual fulfillment is fine for 50 orders).
