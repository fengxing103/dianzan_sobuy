const webpack = require('webpack')

module.exports = {
    publicPath:"./",
    outputDir:"dist",
    assetsDir:"static",
    indexPath:"index.html",
    productionSourceMap:false,
    configureWebpack: {

       plugins: [

          new webpack.ProvidePlugin({

            $:"jquery",

            jQuery:"jquery",

            "windows.jQuery":"jquery"

          })

        ]

    }

}