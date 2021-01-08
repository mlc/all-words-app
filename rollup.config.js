import babel from '@rollup/plugin-babel';
import html from '@rollup/plugin-html';
import nodeResolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const DEV = 'DEV' in process.env;

const plugins = [
  nodeResolve({ extensions: ['.js', '.ts', '.tsx'] }),
  babel({
    extensions: ['.js', '.jsx', '.ts', 'tsx'],
    babelHelpers: 'runtime',
  }),
  html({
    attributes: { html: { lang: 'en-US' } },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    title: 'all valid wor(l)ds',
  }),
];

if (DEV) {
  plugins.push(
    serve({
      contentBase: ['dist'],
      open: true,
    })
  );
}

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'iife',
    sourcemap: DEV ? 'inline' : true,
    entryFileNames: '[name].[hash].js',
  },
  plugins,
};
