// Inline SVG icons matching the original FontAwesome glyphs used on the page.

export function CheckCircle({ className = 'ic ic--check' }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm113.2 165.6L235.4 357.1a24 24 0 0 1-36.3 2.6l-72.3-72.3a16 16 0 0 1 0-22.6l22.6-22.6a16 16 0 0 1 22.6 0l40.4 40.4 99.9-137a16 16 0 0 1 22.4-3.5l25.9 18.8a16 16 0 0 1 3.6 22.3z" />
    </svg>
  );
}

export function WarnCircle({ className = 'ic ic--warn' }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-28-340h56v160h-56V164zm28 224a36 36 0 1 1 0-72 36 36 0 0 1 0 72z" />
    </svg>
  );
}

export function ArrowRight({ className = 'ic ic--arrow' }) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M313.9 216H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h301.9v40.7c0 21.4 25.9 32.1 41 17l84.7-84.7c9.4-9.4 9.4-24.6 0-33.9L354.9 167.3c-15.1-15.1-41-4.4-41 17V216z" />
    </svg>
  );
}
