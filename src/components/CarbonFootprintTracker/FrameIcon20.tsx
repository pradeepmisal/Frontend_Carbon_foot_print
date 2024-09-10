import { memo, SVGProps } from 'react';

const FrameIcon20 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1546_458)'>
      <path
        d='M4.8125 9.625C4.8125 9.625 1.79648 7.875 2.23016 3.0625C2.23016 3.0625 4.39906 5.25 7 5.6875V4.8125C7 3.60938 7.98438 2.61024 9.1875 2.625C9.61209 2.62993 10.0264 2.75609 10.3817 2.98862C10.737 3.22116 11.0184 3.55037 11.1929 3.9375H13.125L11.375 5.6875C11.142 9.34281 8.08937 12.25 4.375 12.25C2.625 12.25 2.1875 11.5938 2.1875 11.5938C2.1875 11.5938 3.9375 10.9375 4.8125 9.625Z'
        stroke='white'
        strokeWidth={0.875}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_1546_458'>
        <rect width={14} height={14} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FrameIcon20);
export { Memo as FrameIcon20 };
