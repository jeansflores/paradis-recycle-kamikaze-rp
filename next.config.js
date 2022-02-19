const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePath: './styles/theme.less',
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},
  webpack(config) {
    return config;
  },
});
