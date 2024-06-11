import autoprefixer from 'autoprefixer';
import typescript from '@rollup/plugin-typescript';
import cssnano from 'cssnano';
import emitEJS from 'rollup-plugin-emit-ejs';
import htmlMinifier from 'rollup-plugin-html-minifier';
import nodeResolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import postcssEnv from 'postcss-preset-env';
import type { Plugin, RollupOptions } from 'rollup';

const DEV = 'DEV' in process.env;
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const postCssPlugins: unknown[] = [autoprefixer, postcssEnv];

if (!DEV) {
  postCssPlugins.push(cssnano({ preset: ['default', { mergeRules: false }] }));
}

const plugins: Plugin[] = [
  nodeResolve({ extensions }),
  typescript(),
  postcss({
    modules: true,
    extract: true,
    plugins: postCssPlugins,
  }),
  emitEJS({ src: 'src' }),
];

if (!DEV) {
  plugins.push(
    htmlMinifier({ options: { collapseWhitespace: true } }),
    terser()
  );
}

const config: RollupOptions = {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: DEV ? 'inline' : true,
    entryFileNames: '[name].[hash].js',
  },
  plugins,
};

export default config;
