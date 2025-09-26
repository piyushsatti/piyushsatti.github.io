---
title: "My Missing Semester"
description: "Notes from MIT's tooling bootcamp that finally patched the gaps in my developer toolkit."
pubDate: "2025-09-26"
updatedDate: "2025-09-26"
tags: ["productivity", "learning", "tooling"]
image: "/terminal-preview.svg"
imageAlt: "Terminal window illustration inspired by retro monitors"
imageCaption: "The command line stopped feeling like punishment once I treated it like an instrument."
tldr:
  - "MIT's Missing Semester exposed my tooling blind spots: shell, editors, dotfiles, automation"
  - "Treating the terminal like an instrument unlocks flow; scripts and aliases are the sheet music"
  - "Version control, debugging, and data wrangling sessions are practical fire drills, not theory"
  - "Small daily rituals—journaled dotfiles, tmux sessions, watch scripts—compound into reliability"
  - "I now have a personal syllabus for levelling up beyond feature tickets"
---

Every degree syllabus I have seen worships algorithms and projects, not the gritty tools that keep engineers sane. Cue MIT's **Missing Semester** playlist—it felt like the adviser I wish I met in my freshman fall. Instead of more theory, it walks through the connective tissue of real-world software work: shells, editors, automation, reproducibility. I'm writing this while my terminal is still glowing because the course filled exactly the gap I have been tripping over.

## The blind spots I kept shipping with

I can wire up services and ship features, but my workflow still had duct tape:

- Terminal sessions littered with copy-pasted commands because I never invested in shell scripting.
- Dotfiles that were basically a pile of aliases copied from strangers.
- Git used like a glorified USB drive.
- Debugging sessions that relied on "remember where the print statement was" rather than systematic tooling.

Missing Semester doesn't shame you for that—it treats the tooling layer as a craft and shows how to iterate on it deliberately.

## Lesson 1: Shell as an amplifier

The first lecture hammers home that the shell is a programmable environment, not a command graveyard. Three upgrades I adopted instantly:

1. **Shortcuts with intent** – Aliases are now namespaced (`gs` for status, `gco` for checkout) and backed by shell functions when logic grows.
2. **Composition mindset** – Piping `ripgrep`, `fd`, and custom scripts together feels like building Lego. I finally internalised `xargs` as glue.
3. **History that works for me** – `fzf` + reverse search means I re-run complex commands without hunting.

> Treat your shell like a musical instrument. Scales (basic commands) are boring, but that's how you improvise confidently during outages.

### Watch the opening session

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Z56Jmr9Z34Q" title="The Missing Semester of Your CS Education" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

## Lesson 2: Dotfiles as a living document

The course pairs the shell lecture with a dotfiles tour. Two practices stuck:

- Keep dotfiles in version control and treat the repo like a lab notebook. Commits document why a tweak exists.
- Use bootstrap scripts to onboard future machines. I wrote a `setup.sh` that symlinks configs and installs baseline tooling.

To enforce discipline, I added a weekly calendar block just to prune or annotate dotfiles. Future me will thank present me for the breadcrumbs.

## Lesson 3: Editors, tmux, and flow

I always flirted with Vim, then fled to GUI editors when deadlines hit. The Missing Semester pairing of **Vim + tmux** finally clicked because they framed them as window management and focus tools, not rites of passage.

- Mapped `leader-f` to telescope files, `leader-b` to buffer switch, and a `tmux` session template launches servers + tests side-by-side.
- Learned to record macros, making repetitive log formatting a ten-second move.
- Adopted `tmux-resurrect` so a reboot does not nuke my setup.

## Lesson 4: Version control and debugging as safety nets

The git session was the therapy I needed. I stopped fearing `reflog`, embraced interactive rebases, and started tagging releases in personal projects. The debugging lecture paired `strace`, `lsof`, and Python's `pdb` with real use cases—my next production mystery now has a checklist instead of panic.

## Lesson 5: Data wrangling & automation reps

`awk`, `sed`, `jq`, and `csvkit` used to feel like esoteric trivia. The instructors chain them to clean logs, summarise data, and feed it back into scripts. Combined with cron + `make`, it turns small chores (log pruning, dependency audits) into background processes.

<div style="margin:1.5rem 0; padding:0.85rem 1rem; border:1px solid var(--accent); font-size:0.9rem;">
<strong>Automation rule of thumb:</strong> If I run a command more than twice a week, it earns a shell function or a script checked into my dotfiles repo.
</div>

## My action plan

1. **Weekly tooling retro** – 30 minutes every Friday to snapshot dotfiles and log friction points.
2. **Pair script with documentation** – Every script now ships with a `README` snippet in the repo explaining inputs/outputs.
3. **Practice drills** – Once a month I recreate an environment from scratch using only my bootstrap script to prove it works.
4. **Teach someone else** – Sharing a new trick on my team Slack keeps me accountable and spreads the joy.

## Further links

- Missing Semester playlist: https://www.youtube.com/playlist?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J
- Official course site with notes + exercises: https://missing.csail.mit.edu
- My dotfiles (work in progress): https://github.com/piyushsatti/dotfiles

Tag pages: [/tags/productivity](/tags/productivity) · [/tags/learning](/tags/learning) · [/tags/tooling](/tags/tooling)
