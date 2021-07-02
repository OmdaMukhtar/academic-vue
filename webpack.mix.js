let mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

var webpack = require("webpack");
var WebpackLaravelMixManifest = require("webpack-laravel-mix-manifest");

mix.webpackConfig({
  plugins: [
    new webpack.ProvidePlugin({
        $: require.resolve('jquery'),
        jQuery: require.resolve('jquery'),
        Popper: 'popper.js/dist/umd/popper.js'   
    }),

    // Write out 「mix-manifest.json」 to build directory.
    new WebpackLaravelMixManifest()
  ],
});


mix.js([
        'src/assets/js/jquery-3.2.1.min.js',
        'src/assets/js/plugins/bootstrap-notify.js',
        'src/assets/js/plugins/chartjs.min.js',
        'src/assets/js/plugins/perfect-scrollbar.jquery.min.js',
        'src/assets/js/bootstrap.min.js',
        'src/assets/js/custom-2.js',
        'src/assets/js/custom.js',
        // 'src/assets/js/now-ui-dashboard.js',
        // 'src/assets/js/now-ui-dashboard.min.js',
        'src/assets/js/popper.min.js',
        'src/assets/js/utils.js',

    ], 'public/build/js/app.js').version()
    
    .sass('src/assets/css/sass/style.scss', 'public/build/css/style.css').version()
    .sass('src/assets/css/sass/now-ui-dashboard.scss', 'public/build/css/now-ui-dashboard.css').version()
    .sass('src/assets/fonts/flat-icon/_flaticon.scss', 'public/build/css/flaticon.css').version()
    .styles([

        'src/assets/css/bootstrap.min.css',
        'src/assets/css/now-ui-dashboard.css',
        'src/assets/css/now-ui-dashboard.css.map',
        'src/assets/css/style.css',
        'src/assets/css/style.css.map',

        // Fonts
        'src/assets/fonts/flat-icon/flaticon.css',
        'src/assets/fonts/font-awesome/css/font-awesome.css',
        'src/assets/fonts/font-awesome/css/font-awesome.min.css.css',

    ], 'public/build/css/all.css').version()
    
    .copyDirectory('src/assets/fonts/font-awesome/fonts/', 'public/build/fonts')

.setPublicPath('public');
