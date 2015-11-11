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
    'jquery': 'vendor/bower_components/jquery/dist/',
    'bootstrap': 'vendor/bower_components/bootstrap-sass/assets/stylesheets/',
    'bootstrapjs': 'vendor/bower_components/bootstrap-sass/assets/javascripts/',
    'bootstrapfont': 'vendor/bower_components/bootstrap-sass/assets/fonts/bootstrap/',
    'fontawesome': 'vendor/bower_components/font-awesome/css/',
    'fontawesomefont': 'vendor/bower_components/font-awesome/fonts/'
};

elixir(function (mix) {
  /*copying files from vendor bower components*/
    mix.copy(paths.bootstrap, 'resources/assets/sass')
        .copy(paths.bootstrapjs +'bootstrap.js', 'resources/assets/js/libs')
        .copy(paths.bootstrapfont, 'public/fonts')
        .copy(paths.jquery+'jquery.min.js', 'resources/assets/js/libs')
        .copy(paths.fontawesome+'font-awesome.css', 'resources/assets/css/libs')
        .copy(paths.fontawesomefont, 'public/build/fonts')

        /*sass compilation + added css libraries*/
        .sass([
            'app.scss',
            '../css/libs/font-awesome.css',
            '../css/libs/main.css'
        ],'public/css/app.css')


        /*unification of all js files*/
        .scripts([
            "./resources/assets/js/libs/jquery.min.js",
            "./resources/assets/js/libs/bootstrap.js",

            /*addition js lib here*/
            './resources/assets/js/libs/main.js'
        ], 'public/js/app.js')


        /*file versioning*/
        .version([
            'css/app.css',
            'js/app.js'
        ])




});
