const { environment } = require('@rails/webpacker')


//追加
const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    Swiper: 'swiper/swiper-bundle' //この行を追記
  })
)

//追加

module.exports = environment
