import { mkdirSync, writeFileSync } from "node:fs";

// The single sentence that could have replaced an entire pointless
// meeting, at most 200 characters. Joke shape: rule (the meeting
// could have been an email) -> literal agreement -> flat consequence
// (a follow-up meeting, now on Thursday's agenda). Named specifics:
// 47 minutes, Thursday. Revised: the concrete agenda artifact ends
// the line instead of the v1 loop that restated the same joke.
const lines = [
  "We spent 47 minutes agreeing this meeting could have been an email, then booked a follow-up to decide whether the email needed a meeting. It is on Thursday's agenda.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-200 characters and exactly one line.
// Character count is measured on the line itself, without the newline.
const lineChars = [...lines[0]].length;
if (lineChars < 1 || lineChars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${lineChars}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
