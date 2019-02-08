module.exports = { 
    devServer: {
      https: true
    },
    css: {
        loaderOptions: {
          sass: {
            data: `
              @import "./public/scss/_variables.scss";   
              @import "./public/scss/_mixins.scss";         `
          }
        }
      },
      chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        // clear all existing loaders.
        // if you don't do this, the loader below will be appended to
        // existing loaders of the rule.
        svgRule.uses.clear()
        // add replacement loader(s)
        svgRule
          .use('vue-svg-loader')
            .loader('vue-svg-loader'),

        config.module
          .rule("vue")
          .use("vue-loader")
          .loader("vue-loader")
          .tap(options => {
            // modify the options...
            options.transformToRequire = {
                'img': 'src',
                'image': 'xlink:href',
                'b-img': 'src',
                'b-img-lazy': ['src', 'blank-src'],
                'b-card': 'img-src',
                'b-card-img': 'img-src',
                'b-carousel-slide': 'img-src',
                'b-embed': 'src'
            };
          });
      }
}
// module.exports = {
//     vueLoader: {
        // transformToRequire: {
            // 'img': 'src',
            // 'image': 'xlink:href',
            // 'b-img': 'src',
            // 'b-img-lazy': ['src', 'blank-src'],
            // 'b-card': 'img-src',
            // 'b-card-img': 'img-src',
            // 'b-carousel-slide': 'img-src',
            // 'b-embed': 'src'
        // }
//       }
// }