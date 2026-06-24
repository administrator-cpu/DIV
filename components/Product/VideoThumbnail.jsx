'use client';

import { useState } from 'react';

export default function VideoThumbnail({ videoId, title, onClick }) {
  const [imgError, setImgError] = useState(false);

  if (!videoId) return null;

  return (
    <button
      onClick={onClick}
      className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer"
      aria-label={title || 'Play video'}
    >
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title || 'Video thumbnail'}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          if (!imgError) {
            e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            setImgError(true);
          }
        }}
      />

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </button>
  );
}