# Angular Material2 快速起步


## 使用Angular-CLI创建工程
```bash
npm install -g angular-cli
ng --version
ng new material-app
```

## 安装基本依赖
```bash
cd material-app
yarn add @angular/material @angular/flex-layout @angular/animations material-design-icons hammerjs roboto-fontface
yarn add -D @types/hammerjs json-server
```
说明:   
* @angular/flex-layout 布局  
* @angular/animations 动作
* material-design-icons 图标  
* hammerjs 手势  
* roboto-fontface	字体  
* json-server 提供JOSN数据的服务器，主要用于前台开发测试，真实情况下将访问的是后台

## 配置
### style.[s]css
在src/style.[s]css文件顶部引入以下样式:
```css
@import '~material-design-icons/iconfont/material-icons.css';
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
@import '~roboto-fontface/css/roboto/roboto-fontface.css';
```
说明：
* material-icons.css 本地化的图标样式文件，如果不想安装，则只能在index.html中配置墙外地址`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`
* deeppurple-amber.css 预编译好的四种样式之一（deeppurple-amber、indigo-pink、pink-bluegrey、purple-green）
* roboto-fontface.css 流行的并且在样式中默认使用的字体样式

### angular-cli.json
#### 手势
在`.angular-cli.json`文件的app>scripts数组中添加hammer库。
```javascript
    "scripts": [
        "../node_modules/hammerjs/hammer.min.js"
    ]
```
#### ng generate 默认设置（可选）
在`.angular-cli.json`文件的app>defaults段中进行修改。
```javascript
    "defaults": {
        "styleExt": "scss",
        "prefixInterfaces": false,
        "inline": {
            "style": false,
            "template": false
        },
        "spec": {
            "class": false,
            "component": true,
            "directive": true,
            "module": false,
            "pipe": true,
            "service": true
        }
    }
```

## 启动命令
```bash
ng serve
````
访问地址：`http://localhost:4200/`

## 待续
