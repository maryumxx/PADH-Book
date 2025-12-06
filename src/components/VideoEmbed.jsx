import React from 'react';

/**
 * VideoEmbed component
 * Embeds videos (YouTube, Vimeo, etc.) responsively
 */
export default function VideoEmbed({ src, title = 'Video', aspectRatio = '16/9' }) {
  return (
    <div className="my-6">
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{ paddingBottom: aspectRatio === '16/9' ? '56.25%' : '75%' }}
      >
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
}
