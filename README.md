# 王越豪 · 个人网站

两个站点,共用同一份内容源。

| 站点 | 地址 | 发布目录 | 仓库 |
|---|---|---|---|
| 个人主页 | https://razoredge-wyh.github.io/ | `home/` | `RazorEdge-wyh.github.io` |
| 创新班选拔作品展示 | https://razoredge-wyh.github.io/my-site/ | `showcase/` | `my-site` |

## 目录结构

```
shared/            两个站点共用的唯一内容源
  content.js       ← 所有文字内容都在这里,改文案只改这个文件
  render.js        极简排版渲染器(标题、列表、相册、主题切换)
  style.css        共用的排版样式

home/              个人主页(部署到根域名仓库)
  index.html       页面结构
  content.js       ┐
  render.js        ├ 部署时由 deploy.ps1 从 shared/ 自动复制
  style.css        ┘
  images/          由 deploy.ps1 从根 images/ 自动复制

showcase/          创新班选拔作品展示(部署到 my-site)
  index.html
  content.js / render.js / style.css / images/  同上

images/            两个站点共用的照片(5 张)
图片/               原始照片备份,不发布
.github/workflows/deploy.yml   my-site 的 Pages 发布配置
deploy.ps1         一键部署脚本
```

## 部署

```powershell
$env:GH_TOKEN="你的GitHub令牌"

# 个人主页
.\deploy.ps1 -SiteDir home -RepoName RazorEdge-wyh.github.io -RepoDescription "王越豪 RazorEdge · 个人主页"

# 创新班展示站
.\deploy.ps1
```

脚本会依次:装配 `shared/` 与 `images/` → 用 Git Data API 单次提交 → 确认 Pages 配置 → 触发工作流并等待结果。

令牌权限:经典令牌勾选 `repo` + `workflow`;细粒度令牌需要
`Administration 读写`、`Contents 读写`、`Workflows 读写`、`Pages 读写`。

## 设计原则

- 文字为主,照片为辅:首页只放 96px 小头像,照片集中在文末相册
- 没有卡片、阴影、光晕、渐变网格,只有字号层级、留白和细分隔线
- 正文行宽 680px,深/浅色主题默认跟随系统
- 全站只有一个强调色(`shared/style.css` 里的 `--accent`)

## 内容维护

改文案 → 只改 `shared/content.js`,两个站点同时生效,然后重跑 `deploy.ps1`。

- 作品、开源项目:改 `works` / `repos`
- 经历:改 `timeline`
- 照片:放进根 `images/`,改 `gallery` 里的引用
- 联系方式:改 `email` / `phone` / `links`
