import { memo, SVGProps } from 'react';

const FrameIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1546_366)'>
      <path
        d='M9.625 7H12.25C12.366 7 12.4773 7.04609 12.5594 7.12814C12.6414 7.21019 12.6875 7.32147 12.6875 7.4375V10.9375C12.6875 11.0535 12.6414 11.1648 12.5594 11.2469C12.4773 11.3289 12.366 11.375 12.25 11.375H1.75C1.63397 11.375 1.52269 11.3289 1.44064 11.2469C1.35859 11.1648 1.3125 11.0535 1.3125 10.9375V7.4375C1.3125 7.32147 1.35859 7.21019 1.44064 7.12814C1.52269 7.04609 1.63397 7 1.75 7H4.375'
        stroke='white'
        strokeWidth={0.875}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M7 7V1.3125' stroke='white' strokeWidth={0.875} strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M4.375 3.9375L7 1.3125L9.625 3.9375'
        stroke='white'
        strokeWidth={0.875}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.2812 9.84375C10.6437 9.84375 10.9375 9.54994 10.9375 9.1875C10.9375 8.82506 10.6437 8.53125 10.2812 8.53125C9.91881 8.53125 9.625 8.82506 9.625 9.1875C9.625 9.54994 9.91881 9.84375 10.2812 9.84375Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_1546_366'>
        <rect width={14} height={14} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FrameIcon3);
export { Memo as FrameIcon3 };
