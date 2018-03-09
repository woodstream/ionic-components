先前写过另一篇文章[《ionic3开源组件》](https://www.jianshu.com/p/3e156999eaa4)，里面有一个分类我其实没怎么用过：
># 锚点滚动列表
>*   [ionic2-alpha-scroll](https://github.com/rossmartin/ionic2-alpha-scroll)
>*   [ionic2-indexed-scroll](https://github.com/HsuanXyz/ionic2-indexed-scroll)
>*   [ionic3-index-list](https://github.com/CK110/ionic3-index-list)——群里有人发就补充上来了

其中有不少人私信我，说[ionic3-index-list](https://github.com/CK110/ionic3-index-list)有问题，我没理，今天又有人和我说，于是我简单看了下源码，没发现什么问题，只是觉得它写得有点复杂了，和现有ionic的组件集成度还没那么好（如不能很好兼容使用单选和多选列表），所以花了几分钟，在大部分沿用原来代码的基础下，简单改动了下：
1. 移除多余的ion-index-cell；
2. ion-index-section修改为index-group，并替换为官方list的相关组件；
3. 修改锚点滚动逻辑；

>代码为index-list（原来代码基本没动，只改动锚点滚动逻辑）和index-group（重新实现）共两个组件，所以会发现两种不同的代码风格。
# 示范使用
然后就可以用了，示范用法如下：
```
<index-list radio-group [(ngModel)]="vm.selectedValue">
    <index-group *ngFor="let group of groups" index="{{group.key}}">
      <ion-item *ngFor="let item of group.items">
        <ion-label>{{item.name || item.title}}</ion-label>
        <ion-radio value="{{item.value}}"></ion-radio>
      </ion-item>
    </index-group>
  </index-list>
```

# 总结
因为只花了一点时间来改，可能有bug，若有，给我留言。另外，index-list其实应该可以再精简的，只是我目前懒得花时间去改了，留给你们谁有兴趣再改吧。