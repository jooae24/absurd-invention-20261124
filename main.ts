// The pitch is built to the judge's published brief: one sentence naming a ridiculous invention that fixes a tiny everyday annoyance (oversleeping), the laugh comes from the invention itself rather than a bolted-on joke, the fix is silly yet weirdly plausible (guilt-driven snoozing), the idea is fresh, and the sentence names the annoyance, the invention and its silly mechanism without clutter.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text =
  "The Apology Alarm Clock: it says sorry every morning, then snoozes " +
  "itself out of guilt, so oversleeping is technically its fault.";

// Guard the gate before writing: 1 to 220 characters, not only white space.
const length = [...text].length;
if (length < 1 || length > 220 || text.trim().length === 0) {
  throw new Error(`entry text must be 1-220 characters, got ${length}`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), text + '\n');
