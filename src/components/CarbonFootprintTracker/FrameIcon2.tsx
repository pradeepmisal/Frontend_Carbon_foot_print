import { memo, SVGProps } from 'react';

const FrameIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1546_361)'>
      <path
        d='M2.46914 12.5841C2.40542 12.6377 2.32772 12.6721 2.24518 12.683C2.16263 12.694 2.07867 12.6812 2.00315 12.6461C1.92763 12.611 1.86369 12.5551 1.81885 12.4849C1.77401 12.4148 1.75012 12.3333 1.75 12.25V3.5C1.75 3.38397 1.79609 3.27269 1.87814 3.19064C1.96019 3.10859 2.07147 3.0625 2.1875 3.0625H11.8125C11.9285 3.0625 12.0398 3.10859 12.1219 3.19064C12.2039 3.27269 12.25 3.38397 12.25 3.5V10.5C12.25 10.616 12.2039 10.7273 12.1219 10.8094C12.0398 10.8914 11.9285 10.9375 11.8125 10.9375H4.375L2.46914 12.5841Z'
        stroke='white'
        strokeWidth={0.875}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M5.25 6.125H8.75' stroke='white' strokeWidth={0.875} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M5.25 7.875H8.75' stroke='white' strokeWidth={0.875} strokeLinecap='round' strokeLinejoin='round' />
    </g>
    <defs>
      <clipPath id='clip0_1546_361'>
        <rect width={14} height={14} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FrameIcon2);
export { Memo as FrameIcon2 };
