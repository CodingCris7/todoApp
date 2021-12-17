const PostCssImportPlugin = require('postcss-import');
const AutoPrefixerPlugin = require('autoprefixer');
const TailWindPlugin = require('tailwindcss');

module.exports = {
  plugins: [
    PostCssImportPlugin(),
    AutoPrefixerPlugin(),
    TailWindPlugin('./tailwind.config.js'),
  ],
};
