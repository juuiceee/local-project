import { ResolveOptions } from 'webpack';
import { TBuildPaths } from './types/config';

export function buildResolves(paths: TBuildPaths): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
