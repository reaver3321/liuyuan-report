# GitHub 自动部署配置指南

本文档说明如何配置 GitHub Actions 自动部署到服务器。

## 前提条件

- 服务器: 139.224.12.176 (已可 SSH 访问)
- GitHub 仓库已创建
- 本地项目位于 `/home/admin/liuyuan-report`

## 步骤 1: 在服务器上配置 SSH 密钥

登录到服务器后执行:

```bash
# 生成 SSH 密钥对
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions -N ""

# 添加公钥到 authorized_keys
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys

# 设置正确的权限
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/github_actions

# 显示私钥内容 (复制到 GitHub Secrets)
echo "=== 私钥内容 (复制到 SSH_PRIVATE_KEY) ==="
cat ~/.ssh/github_actions

# 测试 SSH 连接
ssh -i ~/.ssh/github_actions admin@localhost echo "SSH test successful"
```

## 步骤 2: 安装并配置 Nginx

在服务器上执行:

```bash
# 安装 Nginx
sudo apt update
sudo apt install -y nginx

# 复制 nginx 配置文件
sudo cp /home/admin/liuyuan-report/nginx.conf /etc/nginx/sites-available/liuyuan-report

# 创建软链接启用站点
sudo ln -s /etc/nginx/sites-available/liuyuan-report /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx

# 设置开机自启
sudo systemctl enable nginx
```

## 步骤 3: 创建服务器部署目录

在服务器上执行:

```bash
# 创建部署目录
sudo mkdir -p /home/admin/liuyuan-report/dist
sudo chown -R admin:admin /home/admin/liuyuan-report

# 复制部署脚本到服务器
mkdir -p /home/admin/liuyuan-report/scripts
cp /home/admin/liuyuan-report/scripts/deploy.sh /home/admin/liuyuan-report/scripts/
chmod +x /home/admin/liuyuan-report/scripts/deploy.sh
```

## 步骤 4: 配置 GitHub Secrets

在 GitHub 仓库页面配置以下 Secrets:

1. 进入仓库 Settings → Secrets and variables → Actions
2. 点击 "New repository secret" 添加以下密钥:

| Secret 名称 | 值 | 说明 |
|------------|-----|------|
| `SSH_HOST` | `139.224.12.176` | 服务器 IP 地址 |
| `SSH_USERNAME` | `admin` | SSH 用户名 |
| `SSH_PRIVATE_KEY` | *(服务器私钥内容)* | 步骤 1 中生成的私钥完整内容 |
| `REMOTE_PATH` | `/home/admin/liuyuan-report` | 部署目标路径 |
| `GEMINI_API_KEY` | *(如有)* | Gemini API 密钥 (如项目需要) |

**注意**: `SSH_PRIVATE_KEY` 需要包含完整的私钥内容,包括:
```
-----BEGIN OPENSSH PRIVATE KEY-----
...完整的 base64 编码内容...
-----END OPENSSH PRIVATE KEY-----
```

## 步骤 5: 初始化 Git 仓库并推送

在本地执行:

```bash
cd /home/admin/liuyuan-report

# 检查是否已有 git 仓库
if [ ! -d .git ]; then
    git init
    git add .
    git commit -m "Initial commit: Add GitHub Actions deployment"
fi

# 添加远程仓库 (替换为你的 GitHub 仓库地址)
git remote add origin git@github.com:YOUR_USERNAME/liuyuan-report.git

# 推送到 master 分支 (首次推送)
git push -u origin master
```

## 步骤 6: 验证部署

1. 访问 GitHub 仓库的 Actions 页面
2. 查看工作流执行状态
3. 等待部署完成后访问: http://139.224.12.176
4. 网站应该正常显示

## 本地手动部署 (可选)

如需手动触发部署,执行:

```bash
cd /home/admin/liuyuan-report
./scripts/remote-deploy.sh
```

## 故障排查

### SSH 连接失败
- 检查服务器防火墙: `sudo ufw status`
- 确保端口 22 开放: `sudo ufw allow 22`
- 验证 SSH 密钥权限: `ls -la ~/.ssh/github_actions`

### Nginx 403 错误
- 检查文件权限: `ls -la /home/admin/liuyuan-report/dist`
- 确保所有者正确: `sudo chown -R admin:admin /home/admin/liuyuan-report`

### GitHub Actions 失败
- 查看 Actions 日志获取详细错误信息
- 确认所有 Secrets 已正确配置
- 验证 deploy.sh 脚本在服务器上存在且有执行权限

## 添加 HTTPS (可选)

使用 Let's Encrypt 免费证书:

```bash
# 安装 certbot
sudo apt install -y certbot python3-certbot-nginx

# 获取证书 (会自动配置 Nginx)
sudo certbot --nginx -d 139.224.12.176

# 自动续期
sudo systemctl enable certbot.timer
```

## 工作流程

```
推送代码到 master 分支
         ↓
GitHub Actions 自动触发
         ↓
检出代码 → 安装依赖 → 构建
         ↓
通过 SSH 上传 dist 目录
         ↓
执行服务器端 deploy.sh 脚本
         ↓
Nginx 自动服务新的静态文件
         ↓
部署完成!
```

## 维护命令

```bash
# 查看 Nginx 日志
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# 重启 Nginx
sudo systemctl restart nginx

# 查看最近的备份
ls -lt /home/admin/liuyuan-report/dist.backup_*

# 回滚到上一个版本 (如需要)
mv /home/admin/liuyuan-report/dist.backup_YYYYMMDD_HHMMSS /home/admin/liuyuan-report/dist
```
