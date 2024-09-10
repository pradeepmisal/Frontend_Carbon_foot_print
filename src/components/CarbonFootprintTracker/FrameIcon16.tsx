import { memo, SVGProps } from 'react';

const FrameIcon16 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1546_434)'>
      <path
        d='M48.75 18.75C48.75 17.7554 48.3549 16.8016 47.6516 16.0984C46.9484 15.3951 45.9946 15 45 15H35.625L48.75 37.5'
        stroke='#16A34A'
        strokeWidth={3.75}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M48.75 46.875C53.9277 46.875 58.125 42.6777 58.125 37.5C58.125 32.3223 53.9277 28.125 48.75 28.125C43.5723 28.125 39.375 32.3223 39.375 37.5C39.375 42.6777 43.5723 46.875 48.75 46.875Z'
        stroke='#16A34A'
        strokeWidth={3.75}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.25 46.875C16.4277 46.875 20.625 42.6777 20.625 37.5C20.625 32.3223 16.4277 28.125 11.25 28.125C6.07233 28.125 1.875 32.3223 1.875 37.5C1.875 42.6777 6.07233 46.875 11.25 46.875Z'
        stroke='#16A34A'
        strokeWidth={3.75}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.25 15H17.8125L30.9375 37.5'
        stroke='#16A34A'
        strokeWidth={3.75}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M40.0008 22.5H22.1883L11.25 37.5'
        stroke='#16A34A'
        strokeWidth={3.75}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_1546_434'>
        <rect width={60} height={60} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FrameIcon16);
export { Memo as FrameIcon16 };
