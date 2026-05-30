import Rich from './Rich';
import { ZERO } from '../lib/content';

export default function ZeroToAdvanced() {
  return (
    <section className="section section--panel">
      <div className="container stack" style={{ gap: 16 }}>
        <h2 className="h-section text-green">{ZERO.title}</h2>
        <Rich as="p" className="body-text" html={ZERO.body} />
        <h3 className="h-section" style={{ marginTop: 24 }}>{ZERO.whoTitle}</h3>
        <Rich as="p" className="body-text" html={ZERO.whoBody} />
      </div>
    </section>
  );
}
