import { PRICING } from '../lib/content';

// Fixed bottom CTA — appears on scroll (toggled by effects.js).
export default function StickyBar() {
  return (
    <div className="sticky-bar" aria-label="Oferta">
      <div className="sticky-bar-text">
        <strong>Fábrica de Frases Infinitas</strong>
        <span>{PRICING.premium.price} · ou 3x de R$53,63</span>
      </div>
      <a className="btn btn--buy" href="#compra">Garantir agora</a>
    </div>
  );
}
