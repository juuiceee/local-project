import { ResolveOptions } from 'webpack';
import { IBuildPaths } from './types/config';

export function buildResolves(paths: IBuildPaths): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
