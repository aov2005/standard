const path = require('path');
const webpack = require('webpack');
module.exports = {
  dev: process.env.NODE_ENV !== 'production',
  /*
    ** Headers of the page
    */
  head: {
    title: 'Hello World',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'renderer', content: 'webkit' },
      { name: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'email=no', content: 'format-detection' },
      { name: 'telephone=no', content: 'format-detection' },
      { name: 'robots', content: 'all' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
    ** Customize the progress bar color
    */
  loading: { color: '#3B8070' },
  srcDir: path.join(__dirname, 'nuxt/'),
  buildDir: './www/static/_nuxt/',

  /*
  ** Build configuration
  */
  build: {
    analyze: false,
    cssSourceMap: false,
    publicPath: '/static/_nuxt/dist/',
    vendor: [],
    plugins: [
      new webpack.ContextReplacementPlugin(
        /moment[\\\/]locale$/,
        /^\.\/(zh-cn)$/
      ),
      new webpack.HashedModuleIdsPlugin()
    ]
    /*
    ** Run ESLint on save
    */
    // extend(config, {isDev}) {
    //     // config.devtool = (isDev ? 'eval-source-map' : false);
    // }
  },
  plugins: [],
  router: {}
};
