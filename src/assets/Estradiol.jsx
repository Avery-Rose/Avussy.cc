import * as React from 'react';

const Estradiol = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 479 303.3'
    style={{
      enableBackground: 'new 0 0 479 303.3',
    }}
    xmlSpace='preserve'
    {...props}
  >
    <path d='m152.759 172.42 1.2-2.078 39.49 22.8-1.2 2.078zM112.6 194.2h2.4v45.6h-2.4zM152.748 261.546l39.503-22.782 1.2 2.08-39.504 22.78zM259.8 190.8h-13.4l-.5 2.4h14.3zM258.1 181.2h-10l-.5 2.4h10.9zM254.7 162h-3.3l-.4 2.4h4.2zM256.4 171.6h-6.7l-.4 2.4h7.6zM347.4 183.6h10.9l-.4-2.4h-10.1zM351.2 162l-.4 2.4h4.1l-.4-2.4zM349.1 174h7.5l-.4-2.4h-6.7zM345.7 193.2H360l-.4-2.4h-13.5zM60.6 261.4c-2.1-1.2-4.4-1.8-7-1.8s-5 .6-7 1.8c-2.1 1.2-3.7 3-4.9 5.2-1.2 2.3-1.8 4.9-1.8 7.8 0 2.9.6 5.5 1.8 7.7s2.8 4 4.9 5.2 4.4 1.9 7.1 1.9c2.6 0 4.9-.6 7-1.8 2.1-1.2 3.7-2.9 4.9-5.2s1.8-4.8 1.8-7.8-.6-5.6-1.8-7.8-2.9-4-5-5.2zm1.5 19.2c-.8 1.7-2 3.1-3.5 4-1.5.9-3.2 1.4-5.1 1.4-1.9 0-3.6-.5-5-1.4-1.5-.9-2.6-2.2-3.5-4-.8-1.7-1.2-3.8-1.2-6.1 0-2.4.4-4.5 1.2-6.3s2-3.1 3.4-4 3.2-1.4 5.1-1.4c1.9 0 3.6.5 5.1 1.4s2.6 2.3 3.4 4 1.2 3.8 1.2 6.2c.1 2.4-.3 4.5-1.1 6.2zM32.1 271.8H18V260h-3.8v28.7H18v-13.5h14.1v13.5h3.8V260h-3.8zM260.1 214h-14v-11.8h-3.8v28.6h3.8v-13.4h14v13.4h3.8v-28.6h-3.8zM295.9 131H310v13.4h3.8v-28.6H310v11.8h-14.1v-11.8h-3.8v28.6h3.8zM359.9 214h-14.1v-11.8H342v28.6h3.8v-13.4h14.1v13.4h3.8v-28.6h-3.8z' />
    <path d='M441.3 128.3 409 83.9l17.1-32.1-14.5-4.7-5.1 36-52.3 17 6.2-55.9h-15.2l6.2 55.4L305.3 73l-1.7-1-.6-.3-.6.3-48.2 27.8-1.7 1-.6.3v57.6l-48.7 28.1-47.6-27.5-1.7-1-.6-.3-.6.3-1.7 1-48.2 27.8-.6.3V245l-31.3 18.1 1.2 2.1 31.3-18.1 47.6 27.5 1.7 1 .6.3.6-.3 1.7-1 47.6-27.5 49.3 28.5.6.3.6-.3 1.7-1 48.2-27.8.6-.3v-57.6l48.8-28.2 54.3 17.6.8.3.5-.7 1.2-1.6 31.5-43.4 1.2-1.6.5-.7-.5-.7-1.2-1.6zm-1.3 2.3-32.8 45.2-53.1-17.3v-55.9l53.1-17.3 32.2 44.3.6 1zm-87.1 28.8zm-98.6-56.9 1.1-.7L303 74.4l48.7 28.1v56.2l-47.1 27.2 6-35.1h-15.2l6 35.1-47.1-27.2V102.5zm-149.7 86.4 48.7-28.1 48.7 28.1v56.2l-48.7 28.1-48.7-28.1V188.9zm197.2 56.2-1.1.7-47.6 27.5-48.7-28.1V189l48.7-28.1 48.7 28.1v56.1zM418.4 41.9c2.1 1.2 4.4 1.9 7.1 1.9 2.6 0 4.9-.6 7-1.8 2.1-1.2 3.7-2.9 4.9-5.2 1.2-2.2 1.8-4.8 1.8-7.8s-.6-5.6-1.8-7.8c-1.2-2.2-2.8-4-4.9-5.2-2.1-1.2-4.4-1.8-7-1.8s-5 .6-7 1.8c-2.1 1.2-3.7 3-4.9 5.2s-1.8 4.9-1.8 7.8c0 2.9.6 5.5 1.8 7.7 1.1 2.3 2.7 4 4.8 5.2zm-1.5-19.1c.8-1.8 2-3.1 3.4-4 1.5-.9 3.2-1.4 5.1-1.4 1.9 0 3.6.5 5.1 1.4s2.6 2.3 3.4 4c.8 1.8 1.2 3.8 1.2 6.2 0 2.4-.4 4.4-1.3 6.2s-2 3.1-3.5 4c-1.5.9-3.2 1.4-5.1 1.4-1.9 0-3.6-.5-5-1.4-1.5-.9-2.6-2.2-3.5-4-.8-1.7-1.2-3.8-1.2-6.1.2-2.4.6-4.5 1.4-6.3zM461 14.7v11.7h-14.1V14.7h-3.8v28.6h3.8V29.8H461v13.5h3.8V14.7z' />
  </svg>
);

export default Estradiol;