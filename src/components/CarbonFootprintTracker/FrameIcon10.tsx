import { memo, SVGProps } from 'react';

const FrameIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1546_404)'>
      <path
        d='M7 12.25C9.8995 12.25 12.25 9.8995 12.25 7C12.25 4.10051 9.8995 1.75 7 1.75C4.10051 1.75 1.75 4.10051 1.75 7C1.75 9.8995 4.10051 12.25 7 12.25Z'
        stroke='white'
        strokeWidth={0.875}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M7 7V1.75' stroke='white' strokeWidth={0.875} strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M11.5467 4.375L2.45328 9.625'
        stroke='white'
        strokeWidth={0.875}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_1546_404'>
        <rect width={14} height={14} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FrameIcon10);
export { Memo as FrameIcon10 };
