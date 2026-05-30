import Rich from './Rich';
import { ABOUT } from '../lib/content';

export default function About() {
  return (
    <section className="section section--black">
      <div className="about-card">
        <div className="col">
          <h2>{ABOUT.title}</h2>
          <Rich as="div" className="body-text" html={ABOUT.body} />
        </div>
        <div className="col">
          <div className="about-img">
            <img src={ABOUT.image} alt="Joab Pereira" />
          </div>
        </div>
      </div>
    </section>
  );
}
