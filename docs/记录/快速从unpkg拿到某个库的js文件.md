# 快速从unpkg.com拿到某个库的js文件

## 具体使用
[unpkg](https://unpkg.com/)

地址栏输入`unpkg.com/库的名字`。需要下载到本地`ctrl+s`即可~~。  
如果想看某个库的npm包，输入`unpkg.com/browse/`库的名字/，注意最后的`/`,就能看到整个npm的包了。
如地址栏输入`unpkg.com/vue`，会自动重定向到`https://unpkg.com/vue@2.6.10/dist/vue.js`。  
然后可以改版本号，也可以变成vue.min.js拿到压缩版。输入`unpkg.com/browse/vue/`就能看到npm包的详情了  

例子：  
正确的：https://unpkg.com/browse/pdfjs-dist@4.9.155/  
错误的：https://unpkg.com/browse/pdfjs-dist@4.9.155   

```
写简单的html文件测试的时候，可以直接<script src="https://unpkg.com/vue"></script>。
有时候需要简单的测试，不想用npm的时候想要迅速拿到js文件，就可以简单的用下这个法子。
```
## 其他网站
[cdn.jsdelivr.net](https://www.jsdelivr.com/)