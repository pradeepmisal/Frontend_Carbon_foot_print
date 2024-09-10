import { memo, SVGProps } from 'react';

const FrameIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1546_372)'>
      <path
        d='M52.5 13.125H7.5C6.46447 13.125 5.625 13.9645 5.625 15V45C5.625 46.0355 6.46447 46.875 7.5 46.875H52.5C53.5355 46.875 54.375 46.0355 54.375 45V15C54.375 13.9645 53.5355 13.125 52.5 13.125Z'
        stroke='#16A34A'
        strokeWidth={3.75}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M39.375 39.375H46.875'
        stroke='#16A34A'
        strokeWidth={3.75}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M28.125 39.375H31.875'
        stroke='#16A34A'
        strokeWidth={3.75}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M5.625 22.5H54.375' stroke='#16A34A' strokeWidth={3.75} strokeLinecap='round' strokeLinejoin='round' />
    </g>
    <defs>
      <clipPath id='clip0_1546_372'>
        <rect width={60} height={60} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FrameIcon4);
export { Memo as FrameIcon4 };
