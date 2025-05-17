// hooks/useImageOrientation.js
import { useEffect, useState } from 'react';

export function useImageOrientation(imageRef) {
  const [orientation, setOrientation] = useState(null); // "portrait" | "landscape"

  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    const handleLoad = () => {
      const isPortrait = img.naturalHeight > img.naturalWidth;
      console.log('isPortrait',isPortrait)
      setOrientation(isPortrait ? 'portrait' : 'landscape');
    };

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener('load', handleLoad);
      return () => img.removeEventListener('load', handleLoad);
    }
  }, [imageRef]);

  return orientation;
}
