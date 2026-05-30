import Rich from './Rich';
import { ArrowRight } from './Icons';
import { PRICING } from '../lib/content';

function Plan({ plan, premium }) {
  return (
    <div className={`plan ${premium ? 'plan--premium' : ''}`}>
      <h3 className="plan-name">{plan.name}</h3>
      <img className="plan-mockup" src={plan.mockup} alt={plan.name} />
      <ul className="icon-list">
        {plan.items.map((t, i) => (
          <li key={i}><ArrowRight /><Rich html={t} /></li>
        ))}
      </ul>
      <Rich as="p" className="plan-note" html={plan.note} />
      <Rich as="p" className="plan-from" html={plan.from} />
      <div className="price-big">{plan.price}</div>
      {plan.installment && <Rich as="p" className="installment" html={plan.installment} />}
      <a className="btn btn--buy" href={plan.href}>{plan.cta}</a>
      <img className="seal" src={PRICING.guaranteeImg} alt="Garantia de 7 dias" />
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="section section--panel" id="oferta">
      <div className="container container--wide stack" id="compra" style={{ scrollMarginTop: 20 }}>
        <Rich as="p" className="body-text" html={PRICING.intro} />
        <h2 className="h-section">{PRICING.introTitle}</h2>

        <div className="plans">
          <Plan plan={PRICING.premium} premium />
        </div>

        <div className="stack" style={{ marginTop: 40 }}>
          <img src={PRICING.sealImg} alt="Selo de garantia de 7 dias" style={{ maxWidth: 200 }} />
          <Rich as="p" className="body-text" html={PRICING.guaranteeText} />
        </div>
      </div>
    </section>
  );
}
