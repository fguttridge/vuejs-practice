module.exports = { 
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
            }
            return options;
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