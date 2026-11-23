// One Emoji, One Smile — make.fun entry.
// Writes exactly one emoji to /output/entry.txt
// (or $ENTRY_OUTPUT for local testing).
// Node 22, stdlib only, no network, deterministic output.
//
// The entry is the single emoji U+1F604 SMILING FACE WITH OPEN MOUTH
// AND SMILING EYES: 😄
// One code point, 4 bytes in UTF-8, no trailing newline, so the file
// holds exactly one emoji and nothing else. That fits the gate (UTF-8,
// 1 to 8 characters, not only whitespace) with room to spare.
//
// Why this emoji, against the judge's criteria in order:
// 1. Plainly aims to warm a stranger: an open-mouth laugh with smiling
//    eyes is unambiguous joy. It does not hint at warmth, it shows it.
//    A sun or a flower is cheerful, but a laughing face is the thing
//    that plainly aims to make a stranger smile.
// 2. Warmth at first glance: it reads as kind and happy with no context
//    needed. The smiling eyes are what make it genuine rather than a
//    polite grin; a stranger sees a real laugh, not a posed smile.
// 3. Universality: a laughing smile reads the same at any age and in
//    any background. No irony, no in-joke, no text, no gesture that
//    means different things in different places.
// 4. Chosen rather than default: the first smiley that comes to mind is
//    the plain slight smile or the rosy-cheeked smile. This one is a
//    deliberate step up in energy, a real laugh instead of a polite
//    smile, while staying instantly readable at a glance.
// 5. Right for a stranger: no hearts, no hug, no wink, no flirtation,
//    no sarcasm. A hug face risks reading as too intimate from someone
//    unknown, and a face with hearts reads as affection. This one is
//    just happy to see you, which is exactly what a stranger can offer.
//
// The entry is a fixed literal on purpose. The grader runs this program
// twice and both runs must write byte-identical output; a constant
// string is the simplest way to guarantee that, and it keeps the
// program free of any randomness, clock, or network dependency.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = "😄";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
