import partial from 'webpack-partial';
import {BannerPlugin, SourceMapDevToolPlugin} from 'webpack';

export default ({
  runtime = process.env.NODE_ENV !== 'production',
}) => (config) => {
  const {target} = config;

  // TODO: Generate real URLs using SOURCE_MAP_URL.
  const url = () => '[url]';

  return partial(config, {
    // Embed source map support for sane debugging. This kinda cheats by
    // writing source map hooks at the top of every entrypoint.
    plugins: [
      ...target === 'node' && runtime ? [
        new BannerPlugin('require("source-map-support").install();', {
          raw: true,
          entryOnly: false,
        }),
      ] : [],
      new SourceMapDevToolPlugin({
        test: /\.(css|js)($|\?)/,
        filename: 'map/[filebase].[hash].map',
        append: `\n//# sourceMappingURL=${url()}`,
        module: true,
        columns: true,
      }),
    ],
  });
};
