# 使用mysql

### 基本操作
1. 安装参照 https://www.cnblogs.com/Andya/p/17384722.html
2. Navicat 数据库图标工具破解参照： https://www.cnblogs.com/Andya/p/17384722.html
3. 环境变量配置：
```
export PATH=$PATH:/usr/local/mysql/bin
export MYSQL_HOME=/usr/local/mysql
export PATH=${PATH}:${MYSQL_HOME}/support-files

```
4. 电脑左上角-》系统偏好设置-》mysql-》 这里可以启动和关闭mysql，也可以设置开机自启。
5. 启动报错问题：https://stackoverflow.com/questions/4963171/mysql-server-startup-error-the-server-quit-without-updating-pid-file
6. 启动 / 关闭：
```
//启动
sudo mysql.server start
//关闭
sudo mysql.server stop
```
7. navicat 连接数据库，这个开始时候输入密码有问题，要点一下，才能输入。
 <img src="/mysql.png" style="max-width: 50%" />

8. 创建数据库：选择字符和排序。
 <img src="/mysql1.png" style="max-width: 50%" />

9. 卸载mysql： mac左上角苹果图标-》 系统偏好设置-》 mysql-》卸载，卸载后，删除mysql文件夹。