'use client';

import { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = ({ src, fallbackSrc, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default ImageWithFallback;