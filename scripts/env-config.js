/* global hexo */

// 根据环境变量设置不同的URL和根路径
hexo.extend.filter.register('before_generate', function() {
  const env = process.env.HEXO_ENV || 'github'; // 默认为github pages环境
  
  if (env === 'custom') {
    // 自定义域名环境
    hexo.config.url = 'https://jiangche.dpdns.org';
    hexo.config.root = '/';
  } else {
    // GitHub Pages环境
    hexo.config.url = 'https://no-teasy.github.io/hexo';
    hexo.config.root = '/hexo/';
  }
});