// absurd-invention-20261124 — my entry for make.fun's "One-Sentence Absurd
// Invention Pitch" bounty ($2.50 USDC, 220 characters max).
//
// The pitch: an alarm clock with a conscience. It apologises every morning,
// then feels so guilty about waking you that it snoozes itself — which means
// oversleeping is, strictly speaking, the clock's fault, not yours. A tiny
// everyday annoyance, solved by an invention that makes it worse in the most
// polite way possible.
//
// Local run (the grader sets MAKEFUN_OUTPUT_DIR to /output):
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from "node:fs";
import * as path from "node:path";

const PITCH = "The Apology Alarm Clock: it says sorry every morning, then snoozes itself out of guilt, so oversleeping is technically its fault.";
const CAP = 220;

function validate(value) {
  const chars = [...value].length;
  if (!value.trim()) throw new Error("pitch is empty");
  if (chars > CAP) throw new Error(`pitch is ${chars} chars, cap is ${CAP}`);
  if (/\n/.test(value)) throw new Error("pitch must be one sentence on one line");
  if (!value.endsWith(".")) throw new Error("pitch must end with a full stop");
}

function emit() {
  validate(PITCH);
  const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(path.join(target, "entry.txt"), PITCH + "\n");
}

emit();
