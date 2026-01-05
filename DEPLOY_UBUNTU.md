# AI-Q India App - Ubuntu 部署手册

本手册详细介绍了如何在 Ubuntu 服务器上部署 **AI-Q India** Next.js 应用程序。

## 1. 系统环境准备

### 更新系统
```bash
sudo apt update && sudo apt upgrade -y
```

### 安装 Node.js (推荐 v20+)
使用 NodeSource 安装：
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 安装 PM2 (进程管理器)
```bash
sudo npm install -g pm2
```

---

## 2. 代码获取与初始化

### 克隆代码
```bash
git clone <你的仓库地址>
cd ai-q-india-app
```

### 安装依赖
```bash
npm install
```

### 构建项目
```bash
npm run build
```

---

## 3. 进程管理 (PM2)

使用 PM2 启动应用。我们已经将端口配置为 **3002**。

### 启动应用
```bash
pm2 start npm --name "ai-q-india" -- start
```

### 设置开机自启
```bash
pm2 save
pm2 startup
```
*(按照屏幕输出的指令执行以完成自启配置)*

---

## 4. Nginx 反向代理配置

为了通过 80 端口访问应用并配置域名，需要使用 Nginx。

### 安装 Nginx
```bash
sudo apt install nginx -y
```

### 创建配置文件
```bash
sudo nano /etc/nginx/sites-available/ai-q-india
```

写入以下内容 (将 `yourdomain.com` 替换为你的实际域名)：
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 启用配置并重启
```bash
sudo ln -s /etc/nginx/sites-available/ai-q-india /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 5. SSL 安全配置 (可选但推荐)

使用 Certbot 免费配置 HTTPS：
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com
```

---

## 6. 常用运维命令

- **查看运行状态**: `pm2 list`
- **查看实时日志**: `pm2 logs ai-q-india`
- **重启应用**: `pm2 restart ai-q-india`
- **停止应用**: `pm2 stop ai-q-india`
- **更新代码后重新构建**:
  ```bash
  git pull
  npm install
  npm run build
  pm2 restart ai-q-india
  ```

---

## 7. 端口说明
项目目前配置在端口 **3002**。如果需要更改，请修改 `package.json` 中的 `scripts` 部分，并同步更新 Nginx 的 `proxy_pass`。
