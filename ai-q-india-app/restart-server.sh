#!/bin/bash

# AI-Q India App 自动化重启/部署脚本
# 适用环境: Ubuntu + PM2

APP_NAME="ai-q-india"
# 脚本所在目录即为项目根目录 (ai-q-india-app)
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "------------------------------------------"
echo "开始重启服务: $APP_NAME"
echo "项目目录: $PROJECT_DIR"
echo "------------------------------------------"

# 进入项目目录
cd "$PROJECT_DIR"

# 拉取最新代码
echo "1. 正在从仓库拉取最新代码..."
# 即使在子目录下，git pull 也会自动寻找并更新整个仓库
git pull

# 安装依赖
echo "2. 正在安装依赖..."
npm install

# 构建项目
echo "3. 正在构建项目 (Next.js)..."
npm run build

# 重启 PM2 进程
echo "4. 正在重启 PM2 进程..."
# 如果进程不存在则启动，存在则重启
pm2 restart $APP_NAME || pm2 start npm --name "$APP_NAME" -- start

# 保存 PM2 状态以确保开机自启
pm2 save

echo "------------------------------------------"
echo "服务已成功重启！"
echo "当前 PM2 状态:"
pm2 list
echo "------------------------------------------"
