## 前言 ##
- 本项目属业余时间开发，纯属为了交流与学习，代码质量与性能等优化持续进行，如果这个项目对你有帮助，请给个star，谢谢！（2018-01-19）
- 前台地址：**xxx.com**
- 后台地址：**xxx.com/backend**
- QQ：**292304400**，微信：**Ruizhenger**，邮箱：**linlm1994@gmail.com**，欢迎交流
- 持续更新ing

## 项目简介 ##
> 本项目同时开发前后台，主要使用laravel + vue + iview + webpack，代码严格遵守psr-2规范，感谢支持！


## Technology application ##
- laravel5.5 + vue2.0 + vuex + vue-router + webpack + ES6/7 + iview + redis + sass

## Requirements ##
- PHP 7
- mysql 5.6 or later
- composer （download link：[https://getcomposer.org/download/](https://getcomposer.org/download/ "composer下载地址")）
- nodejs （download link：[http://nodejs.cn/download/](http://nodejs.cn/download/ "nodejs下载地址")）
- npm （New version of the nedejs has include it）

## Install ##
#### 1. Clone the source code or create new project. ####
> git clone https://github.com/linlianmin/ububs.git

#### 2. Set the basic config ####
> cp .env.example .env

#### 3. Create laravel app_key and create database  ####
> php artisan key:generate

> php artisan migrate:refresh --seed （must be set database config）
#### 4. Install the extended package dependency ####
> composer install

> npm install

if npm speeds slower，can do command（npm install -g cnpm --registry=https://registry.npm.taobao.org）,if do this, npm should be change cnpm

#### 5. Install yarn and run it ####
> npm install -g yarn

> yarn run dev

Now we can visit it, thank you for your reading!

## Preview ##
The future update, thank you!