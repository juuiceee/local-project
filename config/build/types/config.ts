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
};

export type TBuildOptions = {
  mode: TBuildMode;
  paths: TBuildPaths;
  isDev: boolean;
  port: number;
};
