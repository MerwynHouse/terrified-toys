# Terrified Toys — Launch Campaign Brief

## 1. Campaign Overview
**Campaign name:** "It Knows" Launch
**Summary:** Introduce Terrified Toys via short-form video content built around a single joke — the toy's face says it knows exactly what's about to happen to it — driving pre-sales from warm buyers, then cold-audience orders.

**Primary objective:** Sell out the 10-unit warm pre-sell and generate 50 cold-audience orders within 90 days of demo stock arriving.
**Secondary objectives:**
- Build an audience around Trinity's content (target: 1,000 combined TikTok/Instagram followers by day 90)
- Produce one piece of content with genuine organic reach (10x+ normal views) to validate the core joke travels

## 2. Target Audience
Full persona detail (demographics, psychographic triggers, channel-by-persona, objections) now lives in [brand-strategy.md](brand-strategy.md) — this section is a condensed pointer, not the source of truth.

**Four personas:** The Petty Partner (gift-for-partner's-dog, relationship banter), The Hunting Lad (working/hunting dog owner, durability-focused), The Dark-Humor Dog-Content Degenerate (TikTok/Reels, impulse-buys off a single video — primary organic discovery engine), The Prank Gifter (white elephant/Secret Santa, doesn't need to own a dog). See [brand-strategy.md](brand-strategy.md) Section 4-5 for the full breakdown and channel-by-persona table.

## 3. Key Messages
**Core message:** "It knows what's coming." — the toy's terror is the entire pitch; let the visual/video carry it.

**Supporting messages:**
1. The joke is in the toy's face, not in copy — show, don't explain.
2. It's a genuinely good, durable plush — not just a gag. ("Your dog will still wreck it. That's the point.")
3. Perfect impulse gift — for your own pet or someone else's.
4. Let the dogs sell it — real pet reactions and UGC carry the proof, not a founder-origin story (see `brand-strategy.md` pillar 3, "Let The Dogs Sell It"). Founder/BTS content is a supporting footnote, not the lead message.

**Product note:** three canonical designs exist as a finalized brief — NZ deer, rabbit, possum. The terrified facial expression is the main hook on every design; each toy also has a secondary red internal-stuffing detail that shows through when chewed (not branded as "gore" — see `brand-strategy.md` Section 2 do/don't list). See `outreach-emails.md` for the full spec sent to manufacturers. No artwork files exist yet, so all current live content still uses the two existing reference photos (deer, rabbit — red stuffing detail not visible). Update this section once real product photography exists.

**Tone by channel:** see [brand-strategy.md](brand-strategy.md) Section 2 (Brand Personality & Voice) for the full voice guide and do/don't list — this campaign should pull tone from there rather than redefine it here.

## 4. Channel Strategy
Persona-specific channel detail (which channel for which persona, and why) now lives in [brand-strategy.md](brand-strategy.md) Section 5. This table covers the channel mechanics; each row links to the landing page that channel's traffic should actually go to — see "Per-Persona Funnels & Landing Pages" below.

| Channel | Why | Format | Links To | Effort | Budget |
|---|---|---|---|---|---|
| TikTok (organic) | Primary discovery engine, especially for the Dog-Content persona; short comedic video is the native format for the joke | Reels-style clips: unboxing, "first encounter," destruction in slow-mo | `landing/dog-content.html` | Medium-High | $0 (time only) |
| Instagram Reels + Feed | Same content repurposed; feed posts double as product catalog | Reels + carousel product shots | `landing/dog-content.html` or `landing/petty-partner.html` depending on the post's angle | Medium | $0 (time only) |
| Facebook hunting/dog groups | Earned/community, durability-focused angle resonates here | Native posts, photos/video + caption | `landing/hunting-lad.html` | Low | $0 |
| Instagram/Facebook gift-search content | Targets Prank Gifter and Petty Partner personas around gifting occasions | Gift-angle posts, carousel | `landing/prank-gifter.html` or `landing/petty-partner.html` | Low | $0 |
| Direct outreach (warm pre-sell) | Fastest, most reliable 10 sales — friends/family with pets, persona usually unknown | DM/text + a Stripe Payment Link | `pre-launch.html` (generic) | Low | $0 |
| Paid social ads | Skip for demo run — budget is $250 and should go to product, not ads, until organic content validates the joke | — | — | — | $0 for now |

### Pre-launch page (`pre-launch.html`)
Single-file, self-contained waitlist/pre-order page, dark-comedic brand tone, both current product photos (black poodle/deer, apricot poodle/rabbit) used as hero social proof. Captures name + email and posts to `api/subscribe.js`, a serverless function that calls MailerLite's API directly (switched from Formspree; a Supabase-backed option was scoped but shelved to avoid a paid-plan requirement; MailerLite's no-code embed widget was also considered but the serverless-proxy approach was used instead so the page keeps its own styling and one shared backend can route 5 different pages into 5 different persona groups).

**Why MailerLite over Formspree/Supabase:** MailerLite's free plan (250 subscribers, 2,500 emails/month) gives a real subscriber list plus 3 free automations — meaning the email warm-up sequence and founding-buyer email below can run natively inside the same free tool, instead of needing a separate email sender. Formspree only gave us an inbox; Supabase would have meant either exposing write-access credentials client-side or paying to lock it down properly.

**Important limitation:** MailerLite's free plan includes only 1 active "digital product or booking" slot, which doesn't fit a physical, multi-unit plush toy. MailerLite is being used purely as the subscriber/email tool here — actual order-taking for the demo run and cold launch still needs its own mechanism (see "Stripe Payment Link" below), not MailerLite's product-sales feature.

**Settled tech split (see [business-plan.md](business-plan.md) Tech Stack & Architecture for full detail):** MailerLite = subscribers + email only. GitHub/Vercel = the page itself, hosting, and auto-deploy. Stripe Payment Link = purchasing, when needed — no database required at this scale.

**Conversion approach applied (NZ/AU, novelty/humor niche):**
- Headline leads with the visual joke, not a generic "coming soon" — the product image carries the pitch.
- Social proof substitutes for reviews (none exist pre-launch): founder authenticity + a waitlist counter ("47+ dog owners already on the list").
- Urgency is real, not manufactured: the 25-unit demo run cap is the actual scarcity mechanic, framed as "founding buyer" early access + discounted price rather than a fake countdown.
- CTA copy stays in brand voice ("Reserve Mine — My Dog Doesn't Need To Know Yet") instead of generic "Sign Up."
- Price shown in NZD with NZ/AU shipping called out explicitly to avoid currency-confusion bounce.

**Status: live.** MailerLite account, groups, and the serverless connection are all built and tested end-to-end. Remaining setup task (Daniel): build the actual email warm-up automations inside the MailerLite dashboard for each group — automations aren't API-accessible on the free plan, so that part stays manual.

### Per-Persona Funnels & Landing Pages (built)
Each persona now gets its own dedicated landing page rather than every channel pointing at the generic `pre-launch.html` — same visual system, persona-specific hero copy and CTA, drawn from [brand-strategy.md](brand-strategy.md):
- `landing/petty-partner.html` — relationship-banter framing
- `landing/hunting-lad.html` — durability-forward, dry humor
- `landing/dog-content.html` — minimal copy, video/visual-first, deadpan
- `landing/prank-gifter.html` — gifting/white-elephant framing

`pre-launch.html` stays as the generic/default page for warm outreach and any bio link where persona isn't known. Each persona page's form posts a hidden `persona` field to `api/subscribe.js`, which routes the signup into that persona's own MailerLite group — live and tested, so the email warm-up sequence can already speak to each persona specifically once the automations themselves are built in MailerLite.

## 5. Content Calendar (8 weeks: pre-sell → demo arrival → cold launch)

| Week | Content Piece | Channel | Notes | Status |
|---|---|---|---|---|
| 1 | Publish pre-launch waitlist page, connect to MailerLite | Web (`pre-launch.html`) | Daniel — must happen before any traffic-driving content goes out | Done — live and tested |
| 1 | Publish 4 persona landing pages (`landing/*.html`), connect to MailerLite | Web | Daniel — every persona-specific post/ad should link here instead of the generic page | Done — live and tested |
| 1 | Direct outreach to 10 warm buyers ("first run, want one?") | DM/text | Daniel — now links to the waitlist page instead of an ad-hoc form | Drafted (`warm-outreach-dms.md`), not yet sent |
| 1 | First founder post using the two existing reference photos | Instagram Feed | Trinity — 3 caption options drafted | Drafted (`instagram-posts.md`), not yet posted |
| 2 | Order demo run from manufacturer | — | Daniel, depends on manufacturer quote | Pending |
| 2-4 | Waiting period — teaser content: design sketches, "meet the toys" reveal one design at a time | TikTok + IG Reels | 2-3 short videos, builds anticipation, every caption/bio link drives to the waitlist page | Pending |
| 2-4 | Email warm-up sequence to waitlist signups (welcome + mid-sequence warm-up, per persona group) | Email (MailerLite automation, triggered on joining each group) | Trinity/Daniel — keeps early signups warm until stock arrives so they convert instead of going cold; fits inside MailerLite's free 3-automation limit | Copy drafted (`email-sequences.md`, all 5 groups); automations not yet built in MailerLite dashboard |
| 5 | Demo stock arrives — unboxing video | TikTok + Reels | First "real" hero content | Pending |
| 5 | Deliver to warm buyers, ask for filmed reactions | TikTok + Reels | UGC — pet's first reaction to toy is the best organic content | Pending |
| 6 | Compile warm-buyer reaction clips into highlight content | TikTok + Reels + Feed | This is the most likely "breakout" content candidate | Pending |
| 6 | Share in 2-3 relevant Facebook pet groups | Facebook | Low effort, direct | Pending |
| 7 | "Destruction" content — toy meets its fate, in slow motion | TikTok + Reels | Leans fully into the joke/premise | Pending |
| 7 | Open cold-audience ordering (Stripe Payment Link) | All channels | CTA push begins; waitlist gets first/early access before this goes wide | Pending |
| 7 | Founding-buyer email to waitlist: early access + discount window before public launch | Email | Converts warm waitlist before cold-audience push starts | Copy drafted (`email-sequences.md`, all 5 groups); not yet sent (waiting on stock) |
| 8 | Gift-angle content: "tag someone whose dog needs this" | TikTok + Reels + Facebook | Targets secondary audience (gift buyers) | Pending |
| 8 | Review/recap: where things stand, thank warm buyers | Instagram Feed | Builds trust/community for next phase | Pending |

## 6. Content Pieces Needed
- **Pre-launch waitlist page** (must-have, built and live) — `pre-launch.html`, generic/default destination for traffic where persona isn't known; MailerLite connection tested end-to-end
- **4 persona landing pages** (must-have, built and live) — `landing/petty-partner.html`, `landing/hunting-lad.html`, `landing/dog-content.html`, `landing/prank-gifter.html`; each routes into its own MailerLite group via `api/subscribe.js`
- **Email warm-up sequence** (must-have, drafted) — `email-sequences.md` — welcome, mid-sequence warm-up, and founding-buyer conversion copy for all 5 groups; needs to be built as MailerLite automations
- **Warm-buyer outreach DMs** (must-have, drafted) — `warm-outreach-dms.md` — short text + longer Instagram DM versions; not yet sent
- **First founder post captions** (must-have, drafted) — `instagram-posts.md` — 3 options using the two existing reference photos; not yet posted
- **Unboxing video** (must-have) — first reveal of demo stock
- **3-5 design reveal teasers** (must-have) — one per toy design, builds anticipation pre-stock; blocked on real artwork/product photos existing (see Product note above)
- **Pet reaction UGC compilation** (must-have) — highest-value asset, likely breakout candidate
- **"Destruction" slow-mo video** (must-have) — most directly sells the core joke
- **Gift-angle post** (nice-to-have) — targets secondary audience, can reuse existing footage
- **Stripe Payment Link** (must-have) — needed before cold launch (week 7); no database or full Shopify build needed at demo-run scale, Stripe's own dashboard is the order record
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
1. ~~Connect MailerLite to all 5 pages~~ — done. `api/subscribe.js` routes each page's signups into the right persona group; tested end-to-end. Remaining: build the email warm-up automations inside the MailerLite dashboard for each group (automations are UI-only on the free plan).
2. Awaiting manufacturer responses (outreach already sent to YourStuffMade, Child's Own, Bespoke Pet Products — see `suppliers.md`); get a demo run quote/lead time in writing once one comes back.
3. Send `warm-outreach-dms.md` to the 10 warm pre-sell buyers — drafted, not yet sent.
4. Post the first founder content using `instagram-posts.md`; Trinity continues teaser content (design reveals) once real artwork exists.
5. ~~Draft the email warm-up sequence~~ — done, see `email-sequences.md`. Remaining: build as MailerLite automations.
6. Set up a Stripe Payment Link for order-taking ahead of cold launch — no database needed at this scale (on hold until demo stock is closer to arriving).
