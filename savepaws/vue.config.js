const EXCLUDED_RE = /\.pure\.svg$/;

module.exports = {
  chainWebpack: (config) => {
    config.module.rule("svg").test((filename) => EXCLUDED_RE.test(filename));
    config.module.rule("svg").issuer((file) => !EXCLUDED_RE.test(file));
    config.module
      .rule("svg-component")
      .test((filename) => filename.endsWith(".svg") && !EXCLUDED_RE.test(filename))
      .use("vue")
      .loader("vue-loader")
      .end()
      .use("svg-to-vue-component")
      .loader("svg-to-vue-component/loader");
  },
};
