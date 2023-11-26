import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IBuildPaths } from './types/config';
import { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(paths: IBuildPaths): Array<WebpackPluginInstance> {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
  ];
}
