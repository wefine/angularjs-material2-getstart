# Angular Material2 快速起步


## 使用Angular-CLI创建工程
```bash
ng new material-app
```

## 安装基本依赖
```bash
cd material-app
yarn add @angular/material @angular/flex-layout material-design-icons hammerjs roboto-fontface
yarn add -D @types/hammerjs
```
说明:   
* @angular/flex-layout 布局  
* material-design-icons 图标  
* hammerjs 手势  
* roboto-fontface	字体  


## 样式引入
在src/style.css文件顶部引入以下样式:
```css
@import '~material-design-icons/iconfont/material-icons.css';
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
@import '~roboto-fontface/css/roboto/roboto-fontface.css';
```

## 启动命令
```bash
ng serve
````
访问地址：`http://localhost:4200/`

## 待续
