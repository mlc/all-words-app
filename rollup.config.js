import autoprefixer from 'autoprefixer';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import cssnano from 'cssnano';
import emitEJS from 'rollup-plugin-emit-ejs';
import htmlMinifier from 'rollup-plugin-html-minifier';
import nodeResolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import sizes from 'rollup-plugin-sizes';
import { terser } from 'rollup-plugin-terser';
import postcssEnv from 'postcss-preset-env';

const DEV = 'DEV' in process.env;
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const postCssPlugins = [autoprefixer, postcssEnv];

if (!DEV) {
  postCssPlugins.push(cssnano({ preset: ['default', { mergeRules: false }] }));
}

const plugins = [
  nodeResolve({ extensions }),
  commonjs(),
  babel({
    extensions,
    babelHelpers: 'runtime',
  }),
  postcss({ extract: true, plugins: postCssPlugins }),
  emitEJS({ src: 'src' }),
  sizes(),
];

if (DEV) {
  plugins.push(
    serve({
      contentBase: ['dist'],
      open: true,
    })
  );
} else {
  plugins.push(htmlMinifier({ collapseWhitespace: true }), terser());
}

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: DEV ? 'inline' : true,
    entryFileNames: '[name].[hash].js',
  },
  plugins,
};
