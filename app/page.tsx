import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const presentationMarkup = readFileSync(
  join(process.cwd(), 'public', 'presentation.html'),
  'utf8',
);

export default function HomePage() {
  return (
    <main className="presentation-shell">
      <iframe
        className="presentation-frame"
        srcDoc={presentationMarkup}
        title="Travel Buddies Technology Project Planning"
      />
    </main>
  );
}
