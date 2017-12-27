let json = require('rollup-plugin-json');
let minify = require('rollup-plugin-babel-minify');
let typescript = require('rollup-plugin-typescript');

let ENV = process.env.NODE_ENV;

let config = {
  input: 'src/index.ts',
  plugins: [
    json(),
    typescript()
  ],
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};

if(ENV === 'production') config.plugins.push(minify({ comments: false, sourceMap: false }))

module.exports = config