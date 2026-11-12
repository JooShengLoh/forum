# 回声论坛

前端展示版：社区帖子、多层评论、图片上传、个人主页、学习课堂、会员方案和六个生活小应用。支持中英文及深浅主题。

## 部署到 GitHub Pages（无需编译）

1. 登录 GitHub，创建名为 `huisheng-forum` 的 Public 仓库。Public 仓库里的源码会公开。
2. 解压 ZIP。在仓库里点击 Add file → Upload files。
3. 上传解压后的文件，尤其是 index.html、style.css、app.js。index.html 必须直接位于仓库根目录，不要上传 ZIP，也不要把文件再包进一层文件夹。
4. 点击 Commit changes，提交到 main 分支。
5. 进入 Settings → Pages。
6. Build and deployment → Source 选择 Deploy from a branch。
7. Branch 选择 main，文件夹选择 / (root)，点击 Save。
8. 等待部署完成，打开 Pages 页面提供的网站链接。通常为 https://你的用户名.github.io/huisheng-forum/ 。
9. 将这个网站链接发送给朋友，而不是 localhost 链接。

后续更新：上传新版文件覆盖仓库里的同名文件并提交，Pages 会重新部署。
如果出现 404：先检查 Actions 中的部署状态、Pages 分支设置，以及 index.html 是否位于根目录。

官方说明：
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 本地运行

需要 Node.js。Windows 双击 start-local.bat，或者在此文件夹中运行：

    node server.cjs

然后打开 http://127.0.0.1:3000 。如果端口已占用，先关闭此前启动的同端口服务。
不要直接双击 index.html 作为正式测试方式；图片数据库等功能需要通过本地服务器或 HTTPS 网站访问。

## 数据与功能范围

- 不需要 API 密钥，也没有服务器端数据库。
- 用户新增帖子、评论、学习记录、小应用记录等保存在当前浏览器 localStorage。
- 上传照片保存在当前浏览器 IndexedDB。
- 不同用户的数据不会互通；清除浏览器存储会删除本地记录。
- 本机 localhost 与 GitHub Pages 是不同来源，已有数据不会自动迁移。
- 此下载包含源代码及预置示例内容，不包含本机浏览器里的私人记录、草稿或上传照片。
- 预置作者是虚构示例身份，人像照片不表示照片中的人物发表了相关内容。
- 会员价格为展示配置，未接入付款、真实登录及服务端付费权限；不能用于保护真实收费课程。
- 图片与字体有部分外部依赖，完全离线时可能无法加载。

## 文件

- index.html：页面入口
- style.css：样式与主题
- app.js：前端功能、课程、小应用及预置数据
- .nojekyll：让 Pages 直接发布静态文件
- server.cjs / start-local.bat：可选的本地启动工具，GitHub Pages 不运行它们

## 图片来源

课程与示例帖子图片：Unsplash / images.unsplash.com。
部分作者照片：Random User / randomuser.me，作为虚构账号展示头像。
插画头像：DiceBear Lorelei / api.dicebear.com。
