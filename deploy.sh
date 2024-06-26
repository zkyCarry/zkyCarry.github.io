#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run build

# 进入生成的文件夹

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'add'

# main-blog分支的名字
git push -f https://github.com/zkyCarry/zkyCarry.github.io.git master:main-blog