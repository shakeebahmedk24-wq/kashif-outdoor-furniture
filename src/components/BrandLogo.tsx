interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const KASHIF_LOGO_URL =
  'https://i.postimg.cc/nVs9XhV9/Gemini-Generated-Image-z5716az5716az571-removebg-preview.png';

export function BrandLogo({ size = 'md' }: BrandLogoProps) {
  const logoHeights = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-14',
    lg: 'h-16 sm:h-20'
  };

  return (
    <div className="inline-flex items-center select-none">
      <img
        src={KASHIF_LOGO_URL}
        alt="Kashif Outdoor Furniture"
        className={`${logoHeights[size]} w-auto object-contain drop-shadow-[0_2px_12px_rgba(212,175,55,0.22)] transition-transform duration-300 hover:scale-[1.03]`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export function PakistanStripe({ className = '' }: { className?: string }) {
  return (
    <div className={`flex h-[4px] w-full overflow-hidden ${className}`}>
      <div className="w-1/4 bg-[#ffffff]" title="White" />
      <div className="w-3/4 bg-[#01411c]" title="Pakistan Green" />
    </div>
  );
}
