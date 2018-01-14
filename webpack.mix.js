let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');
/*
 * 前台
 */
 mix.styles([
    'node_modules/font-awesome/css/font-awesome.min.css'
], 'public/css/frontend/vendor.css');

mix.sass('resources/assets/frontend/sass/app.scss', 'public/css/frontend/app.css');
mix.js('resources/assets/frontend/js/app.js', 'public/js/frontend');