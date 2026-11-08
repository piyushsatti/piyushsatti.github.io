---
title: "Risk-Emulated: Java Terminal Strategy Game"
startDate: "2024-02-02"
endDate: "2024-04-09"
summary: "A team course project: a Risk-style strategy game played in the terminal, written in Java 21 and built with Maven. It has a map editor that loads, edits, validates and saves .map files, and JUnit tests."
tags: ["Java", "Maven", "JUnit", "Design Patterns", "Team project"]
image: ""
repo: "https://github.com/piyushsatti/risk-emulated"
---

## Overview

Risk-Emulated is a turn-based strategy game in the style of Risk, played entirely in a terminal. A team of six built it for the SOEN 6441 course project at Concordia University between February and April 2024. It is written in Java 21 and built with Maven. There is no server, database or graphical interface.

The game has two modes. In the map editor you load a `.map` file, add or remove continents, countries and borders, check that the map is playable, and save it. In gameplay you add players, assign countries and deploy armies, all by typing commands.

My part: I wrote the map loading, saving and validation code, the error handling around map commands, and early unit tests for map connectivity. In March 2024 I also moved the code to a model-view-controller layout with the game phases as states.

## Problem → Solution → Impact

- **Problem.** Players need to build or load a map, check that it can be played, then take turns placing armies, all from typed text commands.
- **Solution.** `GameEngine` runs a loop that moves between the main menu, the map editor and gameplay. `MapInterface` reads and writes `.map` files and checks a map before play: every country must be reachable from every other country, and the countries inside each continent must be connected to each other. `CommandValidator` checks each command and its `-add` or `-remove` options before anything changes, and named exceptions (such as `DuplicateCountryException` and `InvalidMapException`) say what went wrong. `TerminalRenderer` prints the menus, prompts and the map.
- **Impact.** A map that fails validation cannot be used to start a game, and a mistyped command is rejected with a message before it touches the map.

## Commands (examples)

- Map editor: `loadmap`, `editmap`, `savemap`, `showmap`, `validatemap`, and `editcontinent`, `editcountry`, `editneighbor` with `-add` or `-remove`.
- Gameplay: `gameplayer -add` or `-remove`, `assigncountries`, `deploy`.

## Testing

JUnit tests cover map validation (connected and disconnected maps), assigning countries to players, reinforcement counts and deploy checks. Run them with `mvn test`. Javadoc is generated with the Maven Javadoc plugin.

## Where it ended

The `main` branch holds the first build. The `build2_refactor` branch (last commit 9 April 2024) holds the final build: game phases as State classes, one class per command, an adapter for Conquest-format map files, six order types (deploy, advance, bomb, blockade, airlift, diplomacy), computer players with different strategies (aggressive, benevolent, random, cheater), a tournament mode, a game log, and test suites for the orders, commands and phases. In January 2026 I added a README and architecture and map-editor notes to `main`.
