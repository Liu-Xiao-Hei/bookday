# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

cloundfunctions: 保存云函数的文件夹

miniprogram: 小程序开发目录

  |- components 公共组件

  |- images 图片

  |- pages 小程序所有页面

  |- style 部分小程序页面的公共样式

  |- app.js 小程序注册入口

  |- app.json 小程序配置

  |- app.wxss 全局样式

  |- sitemap.json 记录小程序页面是否能被微信索引

  微信索引: 表示页面能在微信搜索栏中搜索到

README.md: 项目描述

project.cofig.json: 保持开发的个性化配置

wxss: 响应式单位

  标准开发屏幕参考

  iphone6: 1px = 2rpx

  项目四大模块

    |- 首页
    |- 记账
    |- 图表
    |- 我的

小程序每一个页面包含四个文件

  wxml： 必须，类似HTML

  js：必须，js

  wxss：非必须：类似CSS

  json：非必须：配置

  微信小程序布局

    view标签：类似div

    text标签: 类似span
