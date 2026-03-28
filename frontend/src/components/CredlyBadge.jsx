import React, {useEffect, useRef} from 'react';

const SCRIPT_SRC = 'https://cdn.credly.com/assets/utilities/embed.js';

export default function CredlyBadge({ badgeId, width = 150, height = 270, host = 'https://www.credly.com' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure the badge div has the appropriate data attributes
    const el = containerRef.current;
    if (!el) return;
    el.setAttribute('data-share-badge-id', badgeId);
    el.setAttribute('data-iframe-width', String(width));
    el.setAttribute('data-iframe-height', String(height));
    el.setAttribute('data-share-badge-host', host);

    // If script already present, append another script to trigger embed on dynamic content.
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (!existing) {
      const s = document.createElement('script');
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    } else {
      // Re-insert the script tag to force re-run of the embed initialization for dynamically added badges
      const s = document.createElement('script');
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
      // Cleanup the injected script after a short delay to avoid clutter
      setTimeout(() => {
        if (s.parentNode) s.parentNode.removeChild(s);
      }, 5000);
    }
  }, [badgeId, width, height, host]);

  return <div ref={containerRef} data-share-badge-id={badgeId} data-iframe-width={width} data-iframe-height={height} data-share-badge-host={host}></div>;
}
