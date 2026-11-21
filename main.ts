import { mkdirSync, writeFileSync } from "node:fs";

// The poem, one line per entry — joined below so the shape stays explicit.
const lines = [
  "I stopped.",
  "Not because the road ended,",
  "but because I could.",
  "The engine cools. The dust settles.",
  "Staying, I found, is also a kind of going —",
  "the one that goes nowhere, and arrives.",
];

// Assemble with exactly one trailing newline, then validate the final text
// that will actually be written (not a trimmed copy of it).
const poem = lines.join("\n") + "\n";
const text = poem.trimEnd();
if (text.length === 0 || text.length > 280) {
  console.error(`Invalid poem: ${text.length} chars (must be 1–280, non-blank).`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
console.log(`Wrote ${poem.length} chars to /output/entry.txt`);
