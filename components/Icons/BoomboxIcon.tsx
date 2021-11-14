import React from 'react';

interface BoomboxIconProps {
  className?: string;
}

export const BoomboxIcon: React.FC<BoomboxIconProps> = ({ className }) => {
  return (
    <svg width="79" height="63" viewBox="0 0 79 63" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M38.3497 30.2992C38.3497 47.2765 59.5784 62.5 45 62.5C30.4216 62.5 0 55.9222 0 38.9449C0 21.9676 36.9216 0 51.5 0C66.0784 0 38.3497 13.3219 38.3497 30.2992Z" fill="#C655EE" />
      <path d="M77.5 24.2406C74.5972 11.5258 66.9484 -0.653214 51 0.0272369C35.7656 0.677225 28.378 10.7832 25 24.2406C20.9172 40.506 18.5 59.5 44.5 62.5C68.8005 62.5 81.4196 41.4089 77.5 24.2406Z" fill="url(#paint0_linear_27:14)" />
      <path d="M69.7122 35.925C68.1633 42.5813 62.2685 44.4957 55.7123 46.425C48.9454 48.4163 43.1509 48.4079 37.7123 44.925C31.6096 41.0169 37.7123 26.425 37.7123 26.425C37.7123 26.425 42.494 15.1419 49.2123 14.1833C56.744 13.1086 60.898 16.8762 65.2123 22.425C68.6233 26.8122 70.9718 30.5124 69.7122 35.925Z" fill="url(#paint1_linear_27:14)" />
      <defs>
        <linearGradient id="paint0_linear_27:14" x1="88.5" y1="34.5267" x2="5" y2="34.5267" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C655EE" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient id="paint1_linear_27:14" x1="18.7123" y1="30.925" x2="67.7123" y2="30.925" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE84BB" />
          <stop offset="0.0001" stopColor="#C655EE" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>

  );
};