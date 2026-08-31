const fs = require('fs');

const rawCeiling = process.env.WATCHDOG_PODCAST_CEILING_S;
const defaultExpression = '4 * 60_000';
let ceilingExpression = defaultExpression;

if (rawCeiling !== undefined) {
  if (!/^\d+$/.test(rawCeiling)) {
    throw new Error('WATCHDOG_PODCAST_CEILING_S must be a positive integer');
  }
  const seconds = Number(rawCeiling);
  if (!Number.isSafeInteger(seconds) || seconds <= 0) {
    throw new Error('WATCHDOG_PODCAST_CEILING_S must be a positive integer');
  }
  ceilingExpression = `${seconds} * 1000`;
}

const file = 'src/lib/job-watchdog.ts';
const original = fs.readFileSync(file, 'utf8');
const content = original.replace(
  /podcast_audio:\s*(?:parsePodcastCeilingMs\(process\.env\.WATCHDOG_PODCAST_CEILING_S\)|4 \* 60_000|\d+ \* 1000),/,
  `podcast_audio: ${ceilingExpression},`,
);
if (content === original) {
  throw new Error(`Could not find podcast_audio timeout assignment in ${file}`);
}
fs.writeFileSync(file, content);
