import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I stopped.
Not because the road ended,
but because I could.
The engine cools. The dust settles.
Staying, I found, is also a kind of going —
the one that goes nowhere, and arrives.
`;

// Validate the entry before writing: non-blank, 1–280 chars (make.fun limit).
const text = poem.trimEnd();
if (text.length === 0 || text.length > 280) {
  console.error(`Invalid poem: ${text.length} chars (must be 1–280, non-blank).`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
console.log(`Wrote ${poem.length} chars to /output/entry.txt`);
