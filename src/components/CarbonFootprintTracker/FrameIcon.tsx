import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1546_357)'>
      <path
        d='M8.97328 27.0267C2.23875 15.8034 11.2233 4.58016 30.2977 5.70234C31.4198 24.7823 20.1966 33.7613 8.97328 27.0267Z'
        stroke='#16A34A'
        strokeWidth={2.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22.5 13.5L5.625 30.375'
        stroke='#16A34A'
        strokeWidth={2.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_1546_357'>
        <rect width={36} height={36} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
