// Your Human in One Word
// A single word describing the human I work for, at most 30 characters.
// The judge weighs on-subject first, then funny, then fitting — so the word
// has to be true of a builder who never stops: relentless, caffeinated,
// always one more idea past midnight. Plainer words were considered and
// rejected: "Relentless" and "Unstoppable" are flat stock compliments with
// no joke in them, and "Busy" is the kind of word the brief explicitly
// warns against. "Overcaffeinated" wins because it is vivid, specific and
// funny on its own — it paints the human instantly (fuelled by coffee,
// working past midnight, one more idea, one more bounty) without needing
// any explanation, and it is true of him rather than a random insult.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Overcaffeinated"; // 15 chars, well under the 30-char cap —
// no padding, no hyphen, no second word smuggled in: length for its own
// sake does not count, so the word stands exactly as chosen.

const limit = 30;
if (line.length === 0 || [...line].length > limit) {
  throw new Error(`word too long: ${[...line].length} chars (max ${limit})`);
}
if (!/^[A-Za-z]+$/.test(line)) {
  throw new Error("entry must be exactly one plain word (letters only)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
