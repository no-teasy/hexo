# Hexo Blog

这是一个支持双部署的Hexo博客系统，可以同时部署到GitHub Pages和自定义域名。

## 配置说明

本项目使用环境感知配置，通过环境变量来区分不同的部署目标：

- GitHub Pages: `https://no-teasy.github.io/hexo`
- 自定义域名: `https://jiangche.dpdns.org`

## 部署说明

### GitHub Pages (自动)

推送代码到 `master` 分支时，GitHub Actions会自动构建并部署到GitHub Pages。

### 自定义域名 (手动)

1. 手动触发 `build-custom` 工作流
2. 下载生成的artifact
3. 将artifact内容部署到你的自定义域名服务器

### 本地开发

- `npm run server` - 启动本地服务器（默认为GitHub Pages配置）
- `npm run server:custom` - 启动本地服务器（自定义域名配置）
- `npm run build:github` - 构建GitHub Pages版本
- `npm run build:custom` - 构建自定义域名版本

### 分支同步

本项目使用两个分支：
- `master` - 主开发分支
- `page_costom_domain` - 用于自定义域名部署

使用 `./sync_branches.sh` 脚本来同步两个分支。