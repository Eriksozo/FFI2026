import Rich from './Rich';
import WistiaPlayer from './WistiaPlayer';
import { HERO } from '../lib/content';

export default function Hero() {
  return (
    <section className="section section--black hero-glow" style={{ paddingBottom: 90 }}>
      <div className="container stack hero-stack">
        <div className="hero-head">
          <span className="hero-eyebrow">{HERO.eyebrow}</span>
          <Rich as="h1" className="eyebrow hero-title" html={HERO.headline} />
          <Rich as="h2" className="h-lead hero-sub" html={HERO.subheadline} />
        </div>
        <div className="video-wrap">
          <WistiaPlayer mediaId="1t4e68t2d9" padding="56.25%" />
        </div>
        <a className="btn" href={HERO.ctaHref}>{HERO.cta}</a>
        <Rich as="p" className="price-line" html={HERO.priceFrom} />
        <p className="guarantee-line">{HERO.guarantee}</p>
        <img className="seal" src={HERO.guaranteeImg} alt="Garantia de 7 dias" />
      </div>

      <div className="divider-curve" aria-hidden="true">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,60 C300,0 900,0 1200,60 L1200,60 L0,60 Z" fill="#081109" />
        </svg>
      </div>
    </section>
  );
}
