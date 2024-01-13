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
declare const __API_URL__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
