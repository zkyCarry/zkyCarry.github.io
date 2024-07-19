# scss
scss 相当于一门css的编程语言。 可以把他看做js等语言，只不过scss是操作样式的语言
里面可以声明变量，各种数据结构也都支持。

## 项目内的一些用法
```
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