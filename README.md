# 王越豪 · 创新班选拔作品展示

作品展示站源码 —— 线上地址：**https://razoredge-wyh.github.io/my-site/**

面向湖南科技大学 2026 级创新班选拔的展示页：个人介绍、技能、成长经历、作品与公开项目、相册。
纯静态站点，零依赖、零构建：原生 HTML / CSS / JavaScript。

同时维护个人主页：https://razoredge-wyh.github.io/
两个站点共用同一份内容源，`content.js` 与 `style.css` 保持一致。

## 文件说明

| 文件 | 作用 |
| --- | --- |
| `showcase/index.html` | 页面结构 |
| `showcase/content.js` | **全部文字内容**：简介、facts、traits、skills、timeline、works、repos、gallery |
| `showcase/render.js` | 极简渲染器，并处理深/浅色主题切换 |
| `showcase/style.css` | 排版样式，全站只有一个强调色变量 `--accent` |
| `showcase/images/` | 站点照片（5 张） |
| `.github/workflows/deploy.yml` | GitHub Pages 自动部署 |

> 注意站点文件位于 `showcase/` 子目录（这与个人主页仓库不同 —— 那边文件平铺在根目录）。

## 本地预览

```bash
cd showcase
python -m http.server 8000
# 然后访问 http://127.0.0.1:8000
```

直接双击 `showcase/index.html` 也可以，但个别浏览器对 `file://` 下的相对路径有限制，起本地服务更稳妥。

## 修改内容

**改文案只需要动 `showcase/content.js`。**

- 姓名 / 简介 / 标语：`name` `nameEn` `tagline` `intro`
- 首页信息条：`facts`
- 性格与做事方式：`traits`
- 技能：`skills`
- 经历时间线：`timeline`
- 作品与公开项目：`works` `repos`
- 照片：把图片放进 `showcase/images/`，再改 `gallery` 里的引用

## 部署

推送到 `main` 分支即自动发布：

1. GitHub Actions 读取 `.github/workflows/deploy.yml`
2. 将 `showcase/` 子目录作为站点产物上传
3. 通过 GitHub Pages 部署到 https://razoredge-wyh.github.io/my-site/

也可以在 Actions 页面手动触发（`workflow_dispatch`）。

## 许可

[MIT](LICENSE)