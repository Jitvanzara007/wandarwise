import { useState, useEffect } from 'react';
import { FiLoader } from 'react-icons/fi';

export const ImageWithFallback = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const loadImage = async () => {
      try {
        const img = new Image();
        img.src = src;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
        setImgSrc(src);
      } catch (error) {
        console.error('Error loading image:', error);
        setImgSrc('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800');
      } finally {
        setIsLoading(false);
      }
    };
    loadImage();
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <FiLoader className="animate-spin h-8 w-8 text-gray-400" />
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={() => {
          console.error('Image failed to load:', src);
          setImgSrc('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800');
        }}
      />
    </div>
  );
}; 