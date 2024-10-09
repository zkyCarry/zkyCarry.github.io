# scss
scss 相当于一门css的编程语言。   
可以把他看做js等语言，只不过scss是操作样式的语言   
里面可以声明变量，各种数据结构也都支持。

## 基本用法

+ 嵌套
``` scss
针对子元素
.navxx {
  //针对子元素
  .a-info {
    padding: 6px 12px;
  }
}

 父选择器 & 符号
.navxx{
  background-color: blue;
  //针对自己的，一般需要条件判断的样式用这个
  &.a-info{
    padding: 6px 12px;
  }
  //针对自己的
  &:hover {
    background-color: darkblue;
  }
}
```

+ 声明变量$符， 一些关键字 @符号。 $xx: #fff; 

+ @extern 是导出，使用。 
``` scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}
```
+ @mixin 是混入，类似js的函数。 可以传参数的。 不能返回值。直接包含所有的样式
``` scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
          border-radius: $radius;
}

.box { 
  @include border-radius(10px); 
}
```

+ @function 是函数，可以返回值。
```scss
$grid-width: 40px;
$gutter-width: 10px;
@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { width: grid-width(5); }
```
+ @import 是引入。 可以引入其他scss文件。
```
@import "@/styles/common.scss";
```

+ @if @else @else-if
```scss
$theme: dark;

body {
  @if $theme == light {
    background-color: white;
    color: black;
  } @else if $theme == dark {
    background-color: black;
    color: white;
  } @else {
    background-color: gray;
    color: black;
  }
}

```
+ @for @each @while
```scss
//for
@for $i from 1 through 5 {
  .box-#{$i} {
    width: 20px * $i;
  }
}
生成：
.box-1 {
  width: 20px;
}

//each
$colors: red, green, blue;

@each $color in $colors {
  .#{$color}-text {
    color: $color;
  }
}
生成：
.red-text {
  color: red;
}

//while
$i: 1;

@while $i <= 5 {
  .item-#{$i} {
    margin: 5px * $i;
  }
  $i: $i + 1;
}

生成：
.item-1 {
  margin: 5px;
}

.item-2 {
  margin: 10px;
}
```

## 项目中的一些使用
```scss
<style lang="scss">
//类似函数
@mixin animation($name, $left) {
  @keyframes #{$name} {
    from {
      left: 400px;
      opacity: 0.2;
    }

    to {
      opacity: 1;
      left: #{$left}px;
    }
  }

  animation: #{$name} 0.5s ease-in-out 1 forwards;
}

  //数组配置声明
 $privileges: (
    // 在中间的单品
    (type: 11, top: 235, left: 97, width: 295, height: 70, animation: true),
    (type: 6, top: 235, left: 125, width: 220, height: 70, animation: true),
    (type: 10, top: 174, left: 123, width: 230, height: 182, animation: true),
    // 在顶部的单品
    (type: 1, top: 130, left: 150, width: 160, height: 160, animation: true),
    (type: 2, top: 130, left: 120, width: 174, height: 56, animation: true),
    (type: 5, top: 130, left: 207, width: 151, height: 73, animation: true),
    // 在下面的单品
    (type: 4, top: 271, left: 98, width: 216, height: 110, animation: true),
    // 静止的单品
    (type: 3, top: 97, left: 0, width: 283, height: 400, animation: false),
    (type: 7, top: 97, left: 0, width: 283, height: 400, animation: false),
    (type: 8, top: 97, left: 0, width: 283, height: 400, animation: false),
    (type: 9, top: 97, left: 0, width: 283, height: 400, animation: false),

  );

@each $privilege in $privileges {
  $type: map-get($privilege, type);
  $classname: privilege-#{$type}-img;
  $top: map-get($privilege, top);
  $left: map-get($privilege, left);
  $width: map-get($privilege, width);
  $height: map-get($privilege, height);
  $animation: map-get($privilege, animation);

  .#{$classname} {
    position: absolute;
    z-index: 30;
    width: #{$width}px;
    height: #{$height}px;
    top: #{$top}px;

    @if map-get($privilege, animation) {
      $animation-name: slideIn-#{$type};
      @include animation($animation-name, $left);
    }

    @else {
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
}

</style>
```
## 参考文档
[https://sass.nodejs.cn/documentation/](https://sass.nodejs.cn/documentation/)