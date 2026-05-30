import './globals.css';

export const metadata = {
  title: 'Fábrica de Frases Infinitas | Joab Pereira',
  description:
    'A maior comunidade de frases para baixistas do Brasil com aulas exclusivas toda semana. Passo a passo direto na prática e sem enrolação.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="grain" aria-hidden="true"></div>
        {children}
        <script src="/effects.js" defer></script>
      </body>
    </html>
  );
}
