let mix = require('laravel-mix')

mix.sass(`resources/assets/sass/app.scss`,`./css`)
    .setPublicPath(`public`)