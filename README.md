# 前端快速开发脚手架

> ### 脚手架特色
*  使用React相关技术栈快速开发SPA
*  模拟前后端分离开发
*  自主配置的开发环境
*  采用ES6语法，组件化、模块化开发
*  前端控制路由
*  SASS代替css
*  Fetch代替Ajax
*  使用MockJs模拟数据
*  借助FontAwesome + AnimateCSS提高颜值


> ### 更新记录
>   
>  
>  

## 目录
#### &sect; [技术栈](#features)
#### &sect; [快速开始](#getting-started)
  * [安装](#installation)
  * [启动](#start)

#### &sect; [项目架构](#architecture)
  * [目录结构](#tree)
  * [特色](#character)

#### &sect; [开发](#development)
  * [编码规范](#code-configure)    
  * [Webpack 配置](#webpack-configure)
  * [规范](#standard)
  * [性能](#performance)

#### &sect; [测试](#testing)  
#### &sect; [部署](#deployment)
#### &sect; [IM模块 DEMO](#im)
#### &sect; [参考](#reference)

****

## <a name="features">&sect; 技术栈</a>
> 详情可参阅 `package.json`

* React 15.3.2
* Redux
* React Router
* Ajax 请求库（fetch）
* Webpack
* ES6 + Babel
* antd (UI)
* immutable.js(Data)

***

## <a name="getting-started">&sect; 快速开始</a>
在开始前，希望您已通读如下资料

* [React 文档][react-doc]
* [Redux 文档][redux-doc]（看完后懵逼的请转看 [Redux 莞式教程][simple-tutorial]）
* [React Router 文档][react-router-doc]

同时您还需要熟悉 ES6。例如，请把如下代码  
`const foo = ({ hello: { world: bar } }) => ({ bar })`  
转译成 ES5（答案请自行到 [Babel REPL][babel-repl] 在线编译验证）

### <a name="installation">⊙ 安装</a>
> 建议升级node到 6.x + npm 3.x 环境  
> 推荐使用 `cnpm` 或手动切换到淘宝 npm 源  
> `npm set registry https://registry.npm.taobao.org/`

> **下载代码环境**
> _git地址：git@git.xiaoneng.cn:NtalkerWebClient/client.git_

进入git目录，运行 `npm install` 安装依赖包（为避免 Windows 下的 npm 软链接问题，可加上 `--no-bin-link` 完全解构所有依赖）

> 虽然我们已经切换到了淘宝 npm 源，但安装 `node-sass@3.8.0` 的时候还是很有可能卡住  
> 因为它的安装需要从 Github 的 AWS 服务器拉取二进制文件，因此您可以为它指定源：  
> `npm i node-sass@3.8.0 --registry=https://registry.npm.taobao.org`  

> `如果还是安装node-sass@3.8.0失败，可以到小能云动物园QQ群里找到该文件，拷贝到本地的node-modules目录下`  
> `如果安装了Microsoft Windows SDK for Windows 7 and .NET Framework 4，也可下载成功。https://www.microsoft.com/en-us/download/details.aspx?id=8279`


### <a name="start">⊙ 启动</a>
> 1、进入的命令窗口下，敲下 `npm insatll`或者 `cnpm insatll`安装依赖模块  

> 2、进入的命令窗口下，敲下 `npm run start:mock`启动Mock服务  

> 3、进入的命令窗口下，敲下 `npm run start`  启动Web服务(提示webpack:bundle is VALID)说明服务已启动  

> 进入的命令窗口下，敲下 `npm run build`或者`npm run prod`启动线上环境，并在项目文件夹下生成dist/js/bundle.js  

打开浏览器访问 `localhost:8080`可访问  

> 开发过程中，通过 Webpack 处理的静态资源都由基于内存的 `webpack-dev-server` 提供  
> P.S. 如果您还不清楚如何安装与启动，请看这个 [issue][how-to-start]

***

## <a name="architecture">&sect; 项目结构</a>
### <a name="tree">⊙ 目录结构</a>
```
.
├─ build/            # Webpack 配置目录
├─ dist/             # build 生成的生产环境下的项目
├─ src/              # 源码目录（开发都在这里进行）
│   ├─ container/     # 容器组件（Container,子组件的组合，存放页面逻辑）
│   ├─ components/     # 组件（COMPONENT）
│   ├─ actions/      # （ACTION）
    ├─ reducers/     # （REDUCER）
    ├─ store/        # （redux 的 createStore 加入中间件后的新函数）
│   ├── routes/        # 路由（ROUTE）
│   ├── services/      # 服务（SERVICE，用于统一管理 XHR 请求）
│   ├── utils/         # 工具库（公共文件）
│   │   ├─ datetime.js/          # 高阶组件（HOC，全称 Higher Order Component）
│   │   ├─ mixins/       # 混合（MIXIN）
│   ├── views/         # 路由视图基页（VIEW）
│   │   ├─ layout/       # 全局布局
│   ├── app.js         # 启动文件
│   ├── test/         # 测试代码
│   ├── index.html     # 静态基页
├── static/          # 放置无需经由 Webpack 处理的静态文件
├── .babelrc         # Babel 转码配置
├── .eslintignore    # （配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc        # ESLint 配置
├── .gitignore       # （配置）需被 Git 忽略的文件（夹）
├── package.json     # （包配置文件）
```

在这里您可能会问：怎么没有 `containers/` 目录？  
在本项目中，木偶组件与智能组件最大的差别在于：  
前者的状态是通过父组件传入获得，而后者是直接**连接**到 `state` 获得  
亦即：若一个木偶组件直接**连接**到 `state`，那么它就是一个所谓的智能组件  
（详见 [`src/utils/createContainer.js`][createContainer] 中对 `react-redux` 的 [`connect`][connect] 函数的封装）  
本示例项目唯一在组件的定义中自行使用 `connect` 函数的是 [`Navbar`][Navbar] 组件（且用到了 ES7 的装饰器）

有关木偶组件与智能组件更为精确的论述，推荐 Redux 作者 Dan 的[这篇文章][dan-post]，避免教条主义

> 您可以根据业务需求改动目录结构。若目录使用频繁，建议配置 [路径别名](#alias)  
> 默认的路径别名见上面目录结构注释中大写形式的常量

### <a name="character">⊙ 特色</a>
* 本示例项目秉承最佳实践，**高度洁癖**地实现代码分离/复用
* 优化目录结构，更好的模块分离，更接近 Vue 的开发模式
* Redux DevTools，可选 [Chrome 插件形式][chrome-extension]（默认） 或 内嵌页面的[组件形式][devtools-component]
* [Redux Logger][redux-logger] 打印动作及前后状态变化
* [why-did-you-update][why-did-u-update] 检测不必要的组件重渲染（默认关闭）
* 引入服务层统一管理 XHR 请求（好处请参考 Vue Demo 中的 [引入服务层][service-intro]）
* 引入 [路径别名](#alias) 实现优雅的加载模式
* 引入 [React Hot Reload][hot-loader]，支持热替换
* 生产环境下的编译对代码进行[优化][react-optimize]

> 有关 Redux DevTools 与 why-did-you-update 的启用与禁用，见下面的 [开发环境全局变量](#dev-global-vars) 配置

***

## <a name="development">&sect; 开发</a>
### <a name="code-configure">⊙ 编码规范---重要</a>
* React 代码规范
> https://zhuanlan.zhihu.com/p/21458464

### <a name="webpack-configure">⊙ Webpack 配置</a>
> 由于已经拥有相对成熟的 Webpack 配置，因此在一定程度上您可以不求甚解，但了解其配置会更能把握整体开发  

* 前端开发服务器为 `localhost:8080`，可在 `build/webpack.config.dev.js` 中找到
> 后端 RESTful API 基地址写在了 `src/config/api.js` 中，请根据实际自行修改
> 在此需要提醒，在 `package.json` 中设置 `NODE_ENV` 要注意末尾空格的[问题](http://stackoverflow.com/questions/11104028/#38948727)  
> 最好就是使用前 `trim` 一下：`process.env.NODE_ENV.trim()`
>
> 拓展阅读：[解读 UglifyJS](http://rapheal.sinaapp.com/tag/uglifyjs/)  
> 看看生产环境下编译 `if (__PROD__) { ... }` => `if (true) { ... }` 后 [UglifyJS](http://rapheal.sinaapp.com/2014/05/22/uglifyjs-squeeze/) 会如何处理

### <a name="chart">⊙ 图表相关</a>
API参考文档：
http://echarts.baidu.com/

### <a name="standard">⊙ 规范</a>
> 本示例项目的代码极尽详细地添加了注释，其中不乏最佳实践提示


### <a name="performance">⊙ 性能</a>
大概可参阅如下文章：

* React 文档 · [Advanced Performance](https://facebook.github.io/react/docs/advanced-performance.html)
* 反鸡汤 · [Should I use shouldComponentUpdate](http://jamesknelson.com/should-i-use-shouldcomponentupdate/)（[译文](http://www.infoq.com/cn/news/2016/07/react-shouldComponentUpdate)）
* 淘宝 FED · [高性能 React 组件](http://taobaofed.org/blog/2016/08/12/optimized-react-components/)
* 腾讯 Dev Club · [React 移动 Web 极致优化](http://dev.qq.com/topic/579083d1c9da73584b02587d)

***

## <a name="testing">&sect; 测试</a>
> mocha
> 测试文件路径：src/test/*.spec.js

***

## <a name="deployment">&sect; 部署</a>
在 `ntalker` 的命令窗口下，敲下 `npm run build`，将会在项目根目录下生成 `dist/`  
> 您可以使用命令行静态资源服务器 [serve] ( `npm install serve -g` )，敲下 `serve -p [端口] dist` 来快速查看 build 后的项目  
> 还可以 `cd dist` 后，`python -m SimpleHTTPServer [端口]` 或 `php -S localhost:[端口]` 快速便捷地实现静态资源服务器
>
> 关于生产环境下的部署与优化

***

## <a name="im">&sect; IM模块 </a>
DEMO
> import NIMClientConfig from './im/core/NIMClientConfig';  
> import NIMClient from "./im/core/NIMClient";  
> import SessionManager from "./logic/session/SessionManager";  
>   
> var nimClient = new NIMClient();  
> var callBack = new SessionManager();  
> var config = new NIMClientConfig();  
> //配置
> config.appId = 'appkey001';  
> config.userId = userId  
> config.userName = 'caixiaobing';
> config.device = "{\"id\":\"" + 11 + "\",\"deviceType\":\"" + 'pc' + "\",\"os\":\"" + 'ios' + "\",\"deviceModel\":\"" + null + "\",\"browse\":\"" + null + "\"}";  
> config.sessionId = userId + '_nim';  
> config.hosts = ['192.168.30.229'];  
> config.ports = [8083];  
>  
> nimClient.init(config, callBack);  
> nimClient.connect();//连接服务器
>   
>>说明：
>>  SessionManager extends ICallBack (./im/api/ICallBack)  
>>  ICallBack::onMessageArrivedHandler(message);//收到上行消息  
>>  ICallBack::onConnectStatusHandler(connectStatus, errorCode);//IMSDK向UI层报网络状态  
>>  ICallBack::onMessageDeliveredHandler(message, isArrived );//IMSDK向UI层反馈消息发送状态  
>>  
>>  NIMClient::init(nimConfig, icallBack);//初始化NIMClient配置  
>>  NIMClient::connect();//建立与服务器之间的连接  
>>  NIMClient::publish(payload, messageType, qos = 0);//发布消息  
>>  NIMClient::doDisconnect();//断开与服务器之间的连接  

***

## <a name="reference">&sect; 参考</a>
* [探讨 React 项目目录结构](http://marmelab.com/blog/2015/12/17/react-directory-structure.html)
* [React/React Native 的ES5 ES6写法对照表](http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8)
* [React 组件之间如何交流](http://www.tuicool.com/articles/AzQzEbq)
* [ECMAScript 6入门](http://es6.ruanyifeng.com/)
* [Webpack 入门指迷](https://segmentfault.com/a/1190000002551952)
* [webpack使用优化](https://github.com/lcxfs1991/blog/issues/2)
* [webpack 的 demos](http://zhizhi.betahouse.us/2015/09/27/yi-webpackde-demos/)
* [webpack 教科书式入门教程](https://segmentfault.com/a/1190000005022872)
* [Webpack傻瓜指南（二）开发和部署技巧](https://zhuanlan.zhihu.com/p/20397902)
* [传统 Ajax 已死，Fetch 永生](http://www.jianshu.com/p/THLARe#)
* [Fetch API](https://github.github.io/fetch/)
* [JavaScript教程](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)
* [JS中的call、apply、bind方法](http://www.tuicool.com/articles/EVF3Eb)
* [ECMAScript 5(ES5)中bind方法、自定义及小拓展](http://www.zhangxinxu.com/wordpress/2012/10/ecmascript-es5-bind-array-slice-call-apply/)
* [使用Mock.js进行独立于后端的前端开发](https://segmentfault.com/a/1190000003087224)

*** shell
$ npm start
License
----

白（版权所有）
