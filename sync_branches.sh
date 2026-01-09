#!/bin/bash

# 同步分支并为不同环境构建
echo "同步master分支到page_costom_domain分支..."

# 切换到page_costom_domain分支
git checkout page_costom_domain

# 合并master分支的更改
git merge master -m "Sync with master branch"

# 提交更改
git push origin page_costom_domain

# 切换回master分支
git checkout master

echo "分支同步完成！"