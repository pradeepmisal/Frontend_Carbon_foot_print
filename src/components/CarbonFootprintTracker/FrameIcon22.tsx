import { memo, SVGProps } from 'react';

const FrameIcon22 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1546_466)'>
      <path
        d='M7 9.1875C8.20812 9.1875 9.1875 8.20812 9.1875 7C9.1875 5.79188 8.20812 4.8125 7 4.8125C5.79188 4.8125 4.8125 5.79188 4.8125 7C4.8125 8.20812 5.79188 9.1875 7 9.1875Z'
        stroke='white'
        strokeWidth={0.875}
        strokeMiterlimit={10}
      />
      <path
        d='M9.625 1.75H4.375C2.92525 1.75 1.75 2.92525 1.75 4.375V9.625C1.75 11.0747 2.92525 12.25 4.375 12.25H9.625C11.0747 12.25 12.25 11.0747 12.25 9.625V4.375C12.25 2.92525 11.0747 1.75 9.625 1.75Z'
        stroke='white'
        strokeWidth={0.875}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.84375 4.8125C10.2062 4.8125 10.5 4.51869 10.5 4.15625C10.5 3.79381 10.2062 3.5 9.84375 3.5C9.48131 3.5 9.1875 3.79381 9.1875 4.15625C9.1875 4.51869 9.48131 4.8125 9.84375 4.8125Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_1546_466'>
        <rect width={14} height={14} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FrameIcon22);
export { Memo as FrameIcon22 };
