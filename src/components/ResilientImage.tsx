import {useState} from 'react';
import {Sparkles} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Lumina Brightening Serum',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#FCE7EE] via-[#FFF4F7] to-[#F9D8E4] p-6 text-center text-[#7E3C55] ${className}`}
      >
        <Sparkles className="mb-2 h-7 w-7 text-[#D8316F]" aria-hidden="true" />
        <span className="font-display text-base font-medium text-[#24141B]">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
