import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { TBuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: TBuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module && config.module.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule) => {
      if (/svg/.test((rule as RuleSetRule).test as string)) {
        return { ...(rule as RuleSetRule), exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.module?.rules?.push(buildCssLoader(true));
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.plugins?.push(new DefinePlugin({ __IS_DEV__: true, __API_URL__: '' }));

  return config;
};
