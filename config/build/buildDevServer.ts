import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { TBuildOptions } from './types/config';

export function buildDevServer(options: TBuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
