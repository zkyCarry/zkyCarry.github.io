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

## 常用命令
```
sudo  运行一个命令 // 以管理员运行一个命令
sudo su  //切换到root用户 之后都是以root用户运行

//本地登陆mysql
mysql -u root -p

// 查看mysql 启动使用的pid
ps aux | grep mysql

// 杀死pid
sudo kill -9 PID
```

## 常见问题
mac 本地安装的mysql，终端创建数据库的时候，报错ERROR 3680 (HY000)，通过下面的办法可以解决。：
```
mac上Navicat新建数据库3680错误解决办法
1.在设置里关闭mysql，若不能关闭，在终端输入：
sudo /usr/local/mysql/support-files/mysql.server stop
这里要是不能重启，
2.在终端输入：
cd /usr/local/mysql/bin/
3.回车进入后，登录管理权限：
sudo su
4.进入之后，需跳过mysql安全验证
./mysqld_safe --skip-grant-tables &
5.enter后会发现前面关闭的mysql重新跑起来了
6.输入：
./mysql
7.输入：
FLUSH PRIVILEGES;
8.接下来就可以修改密码了：
//旧的mysql
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('此处为你的新密码');
//新的8.x版本。
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'yourpasswd';
9.重启mysql
sudo /usr/local/mysql/support-files/mysql.server restart
10.输入：
mysql -uroot -p
输入修改的密码登录再进入navicat新建数据库发现，没有提示3680错误。

暂不知是什么原因。
```