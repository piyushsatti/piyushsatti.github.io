---
title: "My Coding Heroes"
description: "A tribute to the developers and thinkers who have shaped my technical philosophy."
pubDate: "2024-09-20"
updatedDate: "2024-09-26"
tags: ["philosophy", "inspiration"]
image: "/og-images/quake-fisr.png"
imageAlt: "Code snippet visual illustrating the Quake fast inverse square root"
imageCaption: "John Carmack popularised the fast inverse square root trick—my reminder that constraints can be creative."
tldr:
  - "Two pillars: craftsmanship (Uncle Bob) and constraints-driven pragmatism (Carmack)"
  - "Clean Code lessons improved quality but at first destroyed delivery speed"
  - "Carmack re-framed limits as a creative catalyst, not a blocker"
  - "Balance: choose when to polish and when to ship"
  - "Goal: deliberate practice toward writing code that is both clean and fast enough"
---

There comes a point (or several small ones) where you look up from a sprint board and wonder if there is more to all these tickets than velocity charts. I'm not even “there” yet career‑wise—still carving out a foothold—but I already have a mental North Star. Actually two of them: **Robert “Uncle Bob” Martin** and **John Carmack**. They sit on opposite sides of the same coin that I keep flipping in my head every time I start something new.

## Origins: Pen, Paper, Turbo C++

My first brush with programming was back in 11th standard on rattly lab machines running Turbo C++. Everything until then was pen‑and‑paper pseudo-code. First lab day I got lucky: I sat next to the “smart kid” whose screen was drawing shapes. I copied, experimented, and slowly internalized syntax and loops. Still, something felt missing. I wanted the computer to do something _useful_, not just draw a rectangle because a textbook said so. That hunger stayed dormant for a while.

## Freelance Chaos Mode

Fast forward to COVID. I took any freelance gig that would pay for time and curiosity: bash scripts, tiny APIs, web automations, accessibility tooling, odd web3 experiments—Frankenstein side quests. I also made basically every mistake:

- Fuzzy requirements (because I was afraid to sound “slow” by asking clarifying questions)
- Poor data modeling that collapsed under real usage
- Performance issues I only noticed when the client did
- Zero plan for post‑delivery support

Mistakes had a price: lost repeat work. That stung enough to trigger a new competition in my brain: build better software, faster, and still be around to support it.

## Encounter with Uncle Bob: Craft Over Chaos

At some point YouTube recommended “Clean Code (Lesson 1)”. Doorway opened. Suddenly code felt like an _essay_ with structure, rhythm, and moral obligations. I binged SOLID, naming, functions, dependency boundaries—then tried to apply everything, everywhere, immediately.

Result? Delivery cratered. Clients complained about slower turnaround, “unnecessary” questions, why I couldn’t just “get it done.” I had traded speed for purity. Classic overcorrection.

What I eventually learned (painfully): most freelance projects do **not** deserve the full cathedral treatment. Maybe 10% do. The rest need something: clear naming, minimal duplication, a seam or two for change, and then—ship it. But Uncle Bob rewired my baseline definition of “acceptable.” That foundation persists.

<div style="margin:1.5rem 0; padding:0.75rem 1rem; border:1px solid var(--accent); font-size:0.9rem;">
<strong>Lesson Mismatch:</strong> Learning clean code increases cognitive load before it compounds into speed. Early slowdown is normal; panic‑refactoring your habits isn’t.
</div>

### Clean Code Playlist (gateway drug)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7EmboKQH8lM" title="Clean Code Lesson 1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

## John Carmack: Elegance Under Constraints

My next bottleneck wasn’t elegance—it was limits. I’d subconsciously relied on “just throw more compute at it.” Then I started watching breakdowns of classic engine tricks. The romantic moment everyone cites is the fast inverse square root from Quake. It’s less about copying the exact bit hack and more about the _attitude_: profile reality, then warp it.

Pseudo‑shape of the famous idea:

```text
magic = 0x5f3759df - ( bits(number) >> 1 )
y = float_from_bits(magic)
y = y * (1.5 - 0.5 * number * y * y)  # One Newton–Raphson iteration
```

That “weird” first line isn’t random; it encodes an approximate exponent adjustment. It’s a vibe shift: constraints aren’t the enemy—they’re the sculpting medium.

Recommended long-form listen:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/I845O57ZSy4" title="John Carmack Interview" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

## Synthesis: When the Two Worlds Meet

The tension between these heroes is productive:

| Force                             | Shadow Side          | Productive Reframe                       |
| --------------------------------- | -------------------- | ---------------------------------------- |
| Craft (Uncle Bob)                 | Perfection paralysis | Calibrate quality to project horizon     |
| Performance/Constraints (Carmack) | Premature cleverness | Optimize _measured_ hot paths            |
| Abstraction                       | Overengineering      | Expose seams only where change is likely |
| Speed                             | Tech debt avalanche  | Time-box refactors between deliveries    |

The win condition (for me) is _selective_ intensity. Not every CRUD endpoint needs a treatise; not every loop needs a bit‑level hack. But knowing both mindsets lets you deliberately dial them in.

## Practical Filter I Now Use

1. Who will live with this code? (Just me for a weekend? A team for a year?)
2. What’s the failure cost? (Embarrassment? Lost money? Safety?)
3. Where will change likely land? (Isolate those seams.)
4. Is speed of iteration more valuable than future cleanliness _right now_?
5. Have I measured before optimizing? (Logs/profilers or it didn’t happen.)

If a task scores “low stakes, short life,” I borrow 10% of the Clean Code toolkit, ship, and move on. If it’s core or long‑lived, I invest earlier. If it’s performance critical, I turn on Carmack brain only after capturing a real profile.

## Conclusion

I still don’t “feel” like I’ve arrived in the industry. But I have a compass: craft when it will compound, constraint‑driven creativity when reality is tight, and speed everywhere else. Heroes aren’t there to be copied line for line—they’re calibration points. Mine just happen to sit at opposite poles of the same discipline.

If you’re earlier on the path: binge the lessons, break your speed, feel the friction, then slowly stitch balance back in. That’s normal. Keep going.

## Further Links

- Clean Code (playlist): https://www.youtube.com/watch?v=7EmboKQH8lM&list=PLmmYSbUCWJ4x1GO839azG_BBw8rkh-zOj
- Fast inverse square root (background): https://en.wikipedia.org/wiki/Fast_inverse_square_root
- Carmack – algorithm story (short explainer): https://www.youtube.com/watch?v=p8u_k2LIZyo
- Carmack long-form interview: https://www.youtube.com/watch?v=I845O57ZSy4
