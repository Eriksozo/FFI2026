'use client';

import { useEffect } from 'react';

// Loads the Wistia runtime once, then renders the same responsive embed
// markup the original site used. `padding` controls the aspect ratio
// (56.25% = 16:9 landscape, 177.78% = 9:16 portrait).
export default function WistiaPlayer({ mediaId, padding = '56.25%' }) {
  useEffect(() => {
    const scripts = [
      `https://fast.wistia.com/embed/medias/${mediaId}.jsonp`,
      'https://fast.wistia.com/assets/external/E-v1.js',
    ];
    const created = [];
    scripts.forEach((src) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
      created.push(s);
    });
  }, [mediaId]);

  return (
    <div className="wistia_responsive_padding" style={{ padding: `${padding} 0 0 0`, position: 'relative' }}>
      <div
        className="wistia_responsive_wrapper"
        style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
      >
        <div
          className={`wistia_embed wistia_async_${mediaId} seo=true videoFoam=true`}
          style={{ height: '100%', position: 'relative', width: '100%' }}
        >
          <div
            className="wistia_swatch"
            style={{
              height: '100%', left: 0, opacity: 0, overflow: 'hidden',
              position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%',
            }}
          >
            <img
              src={`https://fast.wistia.com/embed/medias/${mediaId}/swatch`}
              style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }}
              alt=""
              aria-hidden="true"
              onLoad={(e) => { e.currentTarget.parentNode.style.opacity = 1; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
