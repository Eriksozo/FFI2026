import Rich from './Rich';
import { FOOTER } from '../lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img className="footer-logo" src={FOOTER.logo} alt="Fábrica de Frases Infinitas" />
        <Rich as="p" className="footer-cnpj" html={FOOTER.cnpj} />
        <p className="footer-disclaimer">{FOOTER.disclaimer}</p>
      </div>
    </footer>
  );
}
