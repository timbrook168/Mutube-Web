# Mutube-Web
Mutube-Web

# 部署
npm run prod
pm2 start dist-server/bin/www.js --name testchat

# Nginx重启
reload：sudo systemctl reload nginx
restart：sudo systemctl restart nginx

# pm2部署node项目
https://juejin.cn/post/6844903665107468296
启动：pm2 start start.js
启动并添加监视：pm2 start app.js --name start --watch
列出所有进程：pm2 list
删除进程(指定进程名)：pm2 delete app
删除进程(指定进程id)：pm2 delete 0
删除所有进程：pm2 delete all
查看具体进程情况：pm2 describe app
查看进程资源消耗：pm2 monit
重启进程：pm2 restart app
重启所有进程：pm2 restart all

# Nginx - Node 反向代理设置
https://hackernoon.com/a-tutorial-to-deploy-the-nodejs-app-to-nginx-server
{ 
    listen   80; 
    server_name 42.35.40.01; 
 
    location /  { 
        proxy_set_header X-Real-IP $remote_addr; 
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
        proxy_set_header Host $host; 
        proxy_set_header X-NginX-Proxy true; 
        proxy_pass http://localhost:3000/; 
        proxy_redirect http://localhost:3000/ https://$server_name/; 
    } 
}
