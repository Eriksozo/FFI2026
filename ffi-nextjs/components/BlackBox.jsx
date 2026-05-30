import Rich from './Rich';
import { BLACKBOX } from '../lib/content';

export default function BlackBox() {
  return (
    <section className="section section--panel">
      <div className="container stack">
        <Rich as="h2" className="h-section" html={BLACKBOX.title} />
        <img src={BLACKBOX.image} alt="Fábrica de Frases Infinitas" style={{ maxWidth: 520 }} />
        <Rich as="div" className="body-text" html={BLACKBOX.body} />
      </div>
    </section>
  );
}
