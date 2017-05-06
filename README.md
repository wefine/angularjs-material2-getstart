# Angular Material2 快速起步


## 使用Angular-CLI创建工程
```bash
npm install -g angular-cli
ng --version
ng new material-app
```

## 启动命令
使用Angular-CLI创建完工程后，就可以启动看看效果。可以通过`--port 4212`参数指定端口。 
```bash
ng serve
````
访问地址：`http://localhost:4200/`


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


## 常见问题
### 自定义主题
Material2自定义主题的官方文档地址为：https://github.com/angular/material2/blob/master/guides/theming.md

#### 主题文件
如果自定义主题，建议新建一个自己的[s]css主题文件，如my-theme.scss，将它跟style.css文件放在一起（目录同级）。

#### 配置angular-cli.json
在apps/styles数组中增加自己的文件名，注意要放到默认的后面。
```css
    "styles": [
        "styles.scss",
        "trivia.theme.scss"
    ],
```
#### 一个示例
```scss
@import '~@angular/material/theming';
// Plus imports for other components in your app.

// Include the common styles for Angular Material. We include this here so that you only
// have to load a single css file for Angular Material in your app.
// Be sure that you only ever include this mixin once!
@include mat-core();

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue.
$my-app-primary: mat-palette($mat-indigo);
$my-app-accent: mat-palette($mat-pink, A200, A100, A400);

// The warn palette is optional (defaults to red).
$my-app-warn: mat-palette($mat-red);

//customize the background theme
$my-app-theme-background: (
    status-bar: map_get($mat-teal, 300),
    app-bar: map_get($mat-teal, 100),
    background: map_get($mat-teal, 50),
    hover: rgba(black, 0.04),
    card: white,
    dialog: white,
    disabled-button: rgba(black, 0.12),
    raised-button: white,
    focused-button: $black-6-opacity,
    selected-button: map_get($mat-grey, 300),
    selected-disabled-button: map_get($mat-grey, 400),
    disabled-button-toggle: map_get($mat-grey, 200),
);

//app theme funtion returns the theme from the palletes
@function my-app-theme($primary, $accent, $warn, $background) {
    @return (
        primary: $primary,
        accent: $accent,
        warn: $warn,
        is-dark: false,
        foreground: $mat-light-theme-foreground,
        background: $background
    );
}

// Create the theme object (a Sass map containing all of the palettes).
$mine-app-theme: my-app-theme($my-app-primary, $my-app-accent, $my-app-warn, $my-app-theme-background);

// Include theme styles for core and each component used in your app.
// Alternatively, you can import and @include the theme mixins for each component
// that you are using.
@include angular-material-theme($mine-app-theme);


```

## 待续
