import Rich from './Rich';
import { CheckCircle, WarnCircle } from './Icons';
import { COMPARE } from '../lib/content';

export default function Compare() {
  return (
    <section className="section section--panel">
      <div className="compare">
        <div className="compare-card compare-card--bad">
          <h3>{COMPARE.badTitle}</h3>
          <ul className="icon-list">
            {COMPARE.bad.map((t, i) => (
              <li key={i}><WarnCircle /><Rich html={t} /></li>
            ))}
          </ul>
        </div>
        <div className="compare-card compare-card--good">
          <h3>{COMPARE.goodTitle}</h3>
          <ul className="icon-list">
            {COMPARE.good.map((t, i) => (
              <li key={i}><CheckCircle /><Rich html={t} /></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
