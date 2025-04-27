'use client';

import React from 'react';

interface MapEmbedProps {
  address: string;
}

export function MapEmbed({address}: MapEmbedProps) {
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://maps.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <iframe
      width="100%"
      height="300"
      style={{border: 0}}
      loading="lazy"
      allowFullScreen
      src={googleMapsUrl}
    ></iframe>
  );
}
