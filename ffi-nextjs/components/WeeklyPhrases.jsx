import Rich from './Rich';
import { CheckCircle } from './Icons';
import { WEEKLY } from '../lib/content';

export default function WeeklyPhrases() {
  return (
    <section className="section section--black">
      <div className="cols">
        <div className="col">
          <img src={WEEKLY.mockup} alt="App Fábrica de Frases Infinitas" />
        </div>
        <div className="col stack">
          <Rich as="h2" className="h-section" html={WEEKLY.title} />
          <Rich as="p" className="body-text" html={WEEKLY.body} />
          <ul className="icon-list">
            {WEEKLY.items.map((t, i) => (
              <li key={i}>
                <CheckCircle />
                <Rich html={t} />
              </li>
            ))}
          </ul>
          <a className="btn" href="#compra">COMECE AGORA</a>
        </div>
      </div>
    </section>
  );
}
