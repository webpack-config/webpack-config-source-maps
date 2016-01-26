#webpack-config-source-maps

Add support for source maps to your [webpack] build.

![build status](http://img.shields.io/travis/webpack-config/webpack-config-source-maps/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/webpack-config/webpack-config-source-maps/master.svg?style=flat)
![license](http://img.shields.io/npm/l/webpack-config-source-maps.svg?style=flat)
![version](http://img.shields.io/npm/v/webpack-config-source-maps.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/webpack-config-source-maps.svg?style=flat)

## Usage

Install:

```sh
npm install --save webpack-config-source-maps
```

Add to your `webpack.config.babel.js`:

```javascript
import sourceMaps from `webpack-config-source-maps`;

sourceMaps()({
  /* existing webpack configuration */
})
```

[webpack]: https://webpack.github.io
