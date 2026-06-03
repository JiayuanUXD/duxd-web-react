// 自定义 webpack 构建配置
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { version } = require('../package.json');
// const { getPWAConfig } = require('../site/config/pwa');

// 组件 dist 打包
exports.component = (config) => {
  if (process.env.BUILD_TYPE === 'hooks') {
    config.entry = path.resolve(__dirname, '../hooks/src-es/index.ts');
    config.output.filename = 'ddmc-hooks.min.js';
    config.output.library = 'ddmchooks';
  } else {
    config.entry = path.resolve(__dirname, '../components/index.tsx');
  }

  config.plugins.pop();
  config.plugins.push(
    new webpack.BannerPlugin({
      banner: `DdmcDesign v${version}\n\nCopyright 2019-present, Bytedance, Inc.\nAll rights reserved.\n`,
    })
  );
};

// 图标 dist 打包
exports.icon = (config) => {
  config.plugins.pop();
  config.plugins.push(
    new webpack.BannerPlugin({
      banner: `DdmcDesign v${version}\n\nCopyright 2019-present, Bytedance, Inc.\nAll rights reserved.\n`,
    })
  );
};

// 官网
exports.site = (config, env) => {
  const isProd = env === 'prod';
  if (isProd) {
    config.output.publicPath = '/';
  }

  config.entry = {
    react: path.resolve(__dirname, '../site/src/index.js'),
    'react-en': path.resolve(__dirname, '../site/src/index-en.js'),
  };

  config.module.rules[1].use[1].options.demoDir = '__demo__';

  config.module.rules[1].use[1].options.autoHelmet = {
    formatTitle: (value) => `${value} | DdmcDesign`,
  };

  config.plugins[0] = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../site/public/index.ejs'),
    templateParameters: {
      title: 'Ddmc Design - 企业级产品的完整设计和开发解决方案',
      lang: 'zh',
    },
    chunks: ['react'],
  });

  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'react-en.html',
      template: path.resolve(__dirname, '../site/public/index.ejs'),
      templateParameters: {
        title:
          'Ddmc Design - Complete design and development solutions for enterprise-level products',
        lang: 'en',
      },
      chunks: ['react-en'],
    })
  );

  config.resolve.alias['@ddmc-design/web-react'] = path.resolve(__dirname, '..');
  // config.resolve.alias['dayjs$'] = 'moment-timezone';
  // update the react-dnd, with issue: https://github.com/facebook/react/issues/20235
  config.resolve.alias['react/jsx-runtime'] = require.resolve('react/jsx-runtime.js');
  config.resolve.alias['react/jsx-dev-runtime'] = require.resolve('react/jsx-dev-runtime.js');
  delete config.resolve.alias['react'];

  if (env === 'dev') {
    config.devServer.historyApiFallback = {
      rewrites: [
        { from: /^(\/(react|docs|showcase)){0,1}\/en-US/, to: '/react-en.html' },
        { from: /^\/$/, to: '/index.html' },
      ],
    };
  }

  try {
    const { getPWAConfig } = require('../site/config/pwa');

    getPWAConfig(config, env);
  } catch (_) {
    console.error('[Ddmc React]: site/config/pwa not exists');
  }
};
