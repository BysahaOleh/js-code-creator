var json = require('rollup-plugin-json');
var babel = require('rollup-plugin-babel');
var minify = require('rollup-plugin-babel-minify');

var ENV = process.env.NODE_ENV;

var config = {
  input: 'src/index.js',
  plugins: [
    json(),
    babel()
  ],
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};

if(ENV === 'production') config.plugins.push(minify({ comments: false, sourceMap: false }))

module.exports = config