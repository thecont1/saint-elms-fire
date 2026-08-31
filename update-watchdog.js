const fs = require('fs');
const file = 'src/lib/job-watchdog.ts';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  'podcast_audio: 4 * 60_000,',
  'podcast_audio: process.env.WATCHDOG_PODCAST_CEILING_S ? parseInt(process.env.WATCHDOG_PODCAST_CEILING_S, 10) * 1000 : 4 * 60_000,'
);
fs.writeFileSync(file, content);
