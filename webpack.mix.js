let mix = require('laravel-mix');

mix.disableNotifications();

mix.setPublicPath('assets/dist');

mix.js('assets/src/js/index.js', 'script.js');
mix.sass('assets/src/scss/index.scss', 'style.css');