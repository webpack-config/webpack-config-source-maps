import {partial, inject} from 'webpack-partial';
import {SourceMapDevToolPlugin} from 'webpack';

export default ({
  runtime: enableRuntime = process.env.NODE_ENV !== 'production',
} = {}) => (config) => {
  const {entry, target} = config;

  // TODO: Generate real URLs using SOURCE_MAP_URL.
  const url = () => '[url]';
  const runtime = require.resolve('./runtime.js');

  return partial(config, {
    // Embed source map support for sane debugging.
    entry: enableRuntime && target === 'node' ?
      inject(entry, [runtime]) : entry,

    // Include source-maps for libraries too!
    module: {
      loaders: [{
        name: 'source-map',
        test: /\.jsx?$/,
        loader: require.resolve('source-map-loader'),
      }],
    },

    // Generate our own source-map files.
    plugins: [
      new SourceMapDevToolPlugin({
        test: /\.(css|js)($|\?)/,
        filename: 'map/[filebase].[hash].map',
        append: `\n//# sourceMappingURL=${url()}`,
        moduleFilenameTemplate: '[resource-path]',
        module: true,
        columns: true,
      }),
    ],
  });
};
