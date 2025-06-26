import './icon.scss';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

type IconProps = {
  icon?: LucideIcon;
  imageUrl?: string;
  size?: number;
  className?: string;
};

export const Icon = ({ icon: IconComponent, imageUrl, size = 24, className = '' }: IconProps) => {
  if (imageUrl) {
    return (
      <Image
        src="/icon.png"
        alt="user-icon"
        width={size}
        height={size}
        className={`icon ${className}`}
        style={{ borderRadius: '50%' }}
      />
    );
  }

  if (IconComponent) {
    return <IconComponent size={size} className={`icon ${className}`} />;
  }

  return null;
};