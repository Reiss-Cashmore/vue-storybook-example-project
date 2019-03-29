// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
  },
  configureWebpack: config => {
    config.module.rules.push({
      resourceQuery: /blockType=story/,
      loader: 'vue-storybook'
    });
    config.module.rules.push({
      resourceQuery: /blockType=docs/,
      use: ['storybook-readme/vue/docs-loader', 'html-loader', 'markdown-loader'],
    });
    
  }
}