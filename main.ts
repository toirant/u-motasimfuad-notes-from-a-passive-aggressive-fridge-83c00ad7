// Notes From a Passive-Aggressive Fridge
// make.fun bounty u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7
//
// The fridge keeps a door log, and it keeps score. The joke is the turn at
// the end: the owner blames the dog, but the dog is the fridge's alibi —
// it sleeps in the crisper drawer, so the fridge has a witness. Small,
// domestic, petty, and smug about its own sensors. Nothing is explained;
// the reader has to connect the dog to the drawer themselves.

const NOTE =
  "Door log, 2:14 a.m.: you ate the last slice, blamed the dog, and the dog sleeps in my crisper drawer. I have witnesses.";

// The sealed gate only accepts UTF-8 text of 1 to 200 characters, a single
// line, not only white space. Check the line here and fail loudly instead
// of shipping an entry the gate would refuse.
const MAX_CHARS = 200;

function validate(note: string): void {
  if (note.length < 1 || note.length > MAX_CHARS) {
    throw new Error(`entry is ${note.length} chars, must be 1-${MAX_CHARS}`);
  }
  if (note.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (note.includes("\n") || note.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // A trailing space would be invisible on the fridge's door screen and
  // would still count against the 200-char cap, so refuse it outright.
  if (note !== note.trim()) {
    throw new Error("entry must not start or end with white space");
  }
}

validate(NOTE);

// The grader mounts /output and runs this program as an unprivileged user,
// so the output directory is only ever created, never removed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, NOTE, "utf8");
console.log(`Wrote ${NOTE.length} chars to ${outPath}`);
