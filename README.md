# 介绍
## 技术架构
- electron：创建桌面化程序
- 纯html+js+css

## 功能
实现rsa私钥和公钥自动生成，取值范围可以满足一般电脑在20秒以内运算出答案

## 目录说明
```
.
├── README.md
├── img
│   └── rsa.ico         应用程序图标
├── index.css       
├── index.html
├── index.js
├── main.js             electron入口文件
├── out
│   └── RSA-win32-x64   打包成生成的应用程序文件夹
└── package.json        配置信息
```
## 涉及方法函数
```js
function bigprimeRandom() {}//随机生成大素数
function inputPQ(){}//计算n和φ(n)
function getE(){}//计算公钥e
function getD() {}//计算私钥d
function transform(mc,edn,key){}//加解密
```
## 注意点
方法仅供参考，只能实现数字加解密。涉及到字母等，需稍作修改。

## 使用方法
### 安装环境
nodejs
### 安装
根目录执行`npm install`
### 运行
根目录执行`npm start`
### 打包成windows应用程序
1. 非windows平台打包成windosw应用程序需要安装wine64
    - mac:`brew cask install wine-stable`
    - linux:[Wine Is Not an Emulator](https://www.winehq.org/)

2. 根目录执行`npm run package`

## 其他
修改软件名、版本信息、描述、入口点、作者等信息，修改脚本命令以及应用程序图标，参考package.json