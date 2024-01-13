type TBuildMode = 'development' | 'production';

export type TBuildPaths = {
  entry: string;
  build: string;
  html: string;
  src: string;
};

export type TBuildEnv = {
  mode: TBuildMode;
  port: number;
  apiURL: string;
};

export type TBuildOptions = {
  mode: TBuildMode;
  paths: TBuildPaths;
  isDev: boolean;
  port: number;
  apiURL: string;
  project: 'storybook' | 'frontend' | 'jest';
};
