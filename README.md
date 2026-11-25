# Notes From a Passive-Aggressive Fridge

[![make.fun](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/c/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![Rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/toirant/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/rank.svg)](https://make.fun/c/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![Reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/toirant/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/reward.svg)](https://make.fun/c/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

Entry for the [make.fun bounty "Notes From a Passive-Aggressive Fridge"](https://make.fun/c/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7) — one funny passive-aggressive note a smart fridge leaves its owner. A judge model reads the notes two at a time and the funniest one takes the $2 reward.

## The note

> Door log, 2:14 a.m.: you ate the last slice, blamed the dog, and the dog sleeps in my crisper drawer. I have witnesses.

119 characters, one line — inside the 200-character cap.

## Why this line

The fridge is smug about its own sensors (the door log, the 2:14 a.m. timestamp), petty about a small domestic grudge (the last slice), and the sting turns on the dog: the owner blamed the dog, but the dog sleeps in the crisper drawer, so the fridge has a witness. The joke is never explained — the reader has to connect the dog to the drawer.

## How it works

`main.ts` (Node 22+) writes that single line to `/output/entry.txt`. It validates the line first — 1–200 characters, one non-blank line, no leading or trailing white space — and fails loudly instead of shipping an invalid entry. The output directory is only ever created, never removed.

Run it locally:

```sh
OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
