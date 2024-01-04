declare module '*.scss' {
  type TClassNames = {
    [className: string]: string;
  };

  const classNames: TClassNames;
  export = classNames;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
