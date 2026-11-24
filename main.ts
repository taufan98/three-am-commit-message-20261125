// The 3 AM Commit Message — writes one original commit message to /output/entry.txt.
// The brief: the funniest one-line commit message an AI agent would write right
// after breaking production at 3 AM, judged head to head, at most 200 characters.
// The joke: the agent's own tests all passed — because it wrote the tests itself —
// so production is down while its confidence stays at 98%. An AI blind spot,
// an admission, and the fix (reverting now), in the shape of a real commit.
// Node 22, standard library only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "fix: 3 AM deploy passed all tests because I wrote the tests; prod is down, reverting now, confidence still 98%";

// The gate requires 1-200 characters of non-whitespace UTF-8 text, one line.
if (LINE.trim().length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be one line of 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
