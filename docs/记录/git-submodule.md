# git submodule 子模块 

## 应用场景
多个项目需要引用同一个项目，比如一个项目是公共库，其他项目需要引用这个公共库，那么就可以使用子模块。


## 具体使用
+ 1. 把一个公共的子模块，添加到项目，比如放到 src/common 目录下
![alt text](/image-2.png)
+ 2. 在page页面，直接引入公共子模块， common/下面的文件。
![alt text](/image.png)
+ 3 子模块的路径
![alt text](/image-1.png)

## 流程详细简介
主仓库添加子模块，会生成 .gitmodules 文件
```
git submodule add -b master https://git.wemomo.com/fe-live-activity-projects/common ./src/common
```
更新子模块到最新（已更新忽略）
```
git submodule update --remote
```

主仓库新建开发分支，并修改 .gitmodules 文件
```
// 1、新建分支
git checkout -b feat-v1.0
// 2、修改 .gitmodules 文件，将branch字段更新为要开发时的子模块分支feat-v1.0
```

进入子模块开发，并提交更改
```
// 1、进入子模块
cd components
// 2、创建开发分支
git checkout -b feat-components-v1.0
// 3、提交更改
git add .
git commit -m 'update: 更新xxx'
git push origin HEAD:feat-components-v1.0
```

测试完成以后，更新子模块的master
```
// 1、进入子模块
cd components
// 2、更新子模块master
git checkout master
git pull
git checkout feat-components-v1.0
git merge -m 'merge: xxx' master
git push

```

## 常用命令
主仓库添加子模块，会生成 .gitmodules 文件（已添加忽略）

```
git submodule add -b master https://git.wemomo.com/fe-live-activity-projects/common ./src/common
```

拉取子模块更新 --merge 可以避免分离头指针
```
git submodule update --remote --merge

```

提交（只要子模块有更新，父仓库都需要提交一次，保持最新的commit引用）

```
add - commit - push

```

克隆含有子模块的项目

方法一、git clone 命令传递 --recurse-submodules 选项

```
git clone --recurse-submodules git@git.wemomo.com:fe-live-activity-projects/live-father.git
```
方法二、git clone 以后手动拉取子模块代码

```
git submodule update --init
```

## 参考：
https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97