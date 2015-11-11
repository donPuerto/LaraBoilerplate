var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var paths = {
    'bower_base_path': './vendor/bower_components/',
    'bootstrap': './vendor/bower_components/bootstrap-sass/assets/'
};

elixir(function (mix) {
  /*copying files from vendor bower components*/
    mix.copy(paths.bootstrap + 'stylesheets/', 'resources/assets/sass')
        .copy(paths.bootstrap + 'fonts/bootstrap', 'public/fonts')
        .copy(paths.bootstrap + 'javascripts/bootstrap.js', 'resources/assets/js/libs/bootstrap.js')
        .copy(paths.bower_base_path + 'jquery/dist/jquery.min.js', 'resources/assets/js/libs/jquery.js')
        .copy(paths.bower_base_path + 'font-awesome/css/font-awesome.min.css', 'resources/assets/css/font-awesome.css')

        /*fontawesome fonts*/
        .copy(paths.bower_base_path + 'font-awesome/css/font-awesome.min.css', 'public/css/FontAwesome.otf')
        .copy(paths.bower_base_path + 'font-awesome/css/font-awesome.min.css', 'public/css/fontawesome-webfont.eot')
        .copy(paths.bower_base_path + 'font-awesome/css/font-awesome.min.css', 'public/cssfontawesome-webfont.svg')
        .copy(paths.bower_base_path + 'font-awesome/css/font-awesome.min.css', 'public/css/fontawesome-webfont.ttf')
        .copy(paths.bower_base_path + 'font-awesome/css/font-awesome.min.css', 'public/css/fontawesome-webfont.woff')
        .copy(paths.bower_base_path + 'font-awesome/css/font-awesome.min.css', 'public/css/fontawesome-webfont.woff2')

        .sass([
            'app.scss',
            './resources/assets/css/font-awesome.css',
            './resources/assets/css/main.css'
        ],'public/css/app.css')


        /*unification of all js files*/
        .scripts([
            "./resources/assets/js/libs/jquery.js",
            "./resources/assets/js/libs/bootstrap.js",
            /*addition js lib here*/
            './resources/assets/js/libs/main.js'
        ], 'public/js/app.js', './')
        /*file versioning*/
        .version([
            'css/app.css',
            'js/app.js'
        ])




});
