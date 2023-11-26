import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/config';

export function buildPlugins(
  options: IBuildOptions,
): Array<WebpackPluginInstance> {
  const { paths, isDev } = options;
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
}
