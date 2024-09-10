import { memo, SVGProps } from 'react';

const FrameIcon19 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1546_454)'>
      <path d='M2.1875 7H11.8125' stroke='white' strokeWidth={0.875} strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M7.875 3.0625L11.8125 7L7.875 10.9375'
        stroke='white'
        strokeWidth={0.875}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_1546_454'>
        <rect width={14} height={14} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FrameIcon19);
export { Memo as FrameIcon19 };
