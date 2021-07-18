module.exports = {
    css: {
      loaderOptions: {
        sass: {
          // sass-loader >= 8
          additionalData: `@import "vuetify/src/styles/styles.sass"`,
  
          // sass-loader < 8
          data: `@import "vuetify/src/styles/main.sass"`
        }
      }
    },
  }