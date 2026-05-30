import Rich from './Rich';
import { BONUSES } from '../lib/content';

export default function Bonuses() {
  return (
    <section className="section section--black">
      <div className="container container--wide">
        <Rich as="h2" className="h-section" html={BONUSES.title} />
      </div>
      <div className="bonus-grid">
        {BONUSES.cards.map((c, i) => (
          <article className="bonus-card" key={i}>
            <span className="bonus-tag">{c.tag}</span>
            <h3 className="bonus-title">{c.title}</h3>
            <div className="bonus-img"><img src={c.img} alt={c.title} /></div>
            <Rich as="p" className="bonus-desc" html={c.desc} />
            <Rich as="p" className="bonus-price" html={BONUSES.priceNote} />
          </article>
        ))}
      </div>
    </section>
  );
}
