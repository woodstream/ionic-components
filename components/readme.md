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
### index-list组件
index-list.html：
```
<!-- Generated template for the IndexListComponent component -->
<div class="index-list">
  <div class="index-list-wrapper" #scrollContent tappable (scroll)="onScroll($event)">
    <ng-content></ng-content>
  </div>
  <div class="index-list-nav" (touchstart)="touchstart($event)" (touchmove)="touchmove($event)" (touchend)="touchend($event)">
    <div class="index-bar" *ngFor="let index of _indexes;" [class.index-list-nav-activate]="index === _currentIndicator">
      {{index}}
    </div>
  </div>
  <div class="modal" [class.show]="_showModal">
    {{_currentIndicator}}
  </div>
</div>
```
index-list.scss：
```
index-list {
    ::-webkit-scrollbar {
        width: 0
      }
      .index-list{
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 100%;
        overflow: hidden;
      }
      .index-list-wrapper{
        width: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
      }
      .index-list-nav{
        width:6%;
        position: absolute;
        right: 0;
        display: flex;
        justify-content:center;
        flex-direction: column;
        text-align: center;
        background-color: rgba(245, 245, 245, 0.3);
        height: 100%;
        z-index: 1000;
        -webkit-touch-callout: none;
      }
      .index-bar{
        padding: 2px 6px;
        font-size: 12px;
      }
      .index-list-nav-activate{
        color: red;
      }
      .modal {
        top: 50%;
        left: 50%;
        z-index: 100;
        position: fixed;
        pointer-events: none;
        width: 20vw;
        height: 20vw;
        line-height: 20vw;
        margin-left: -10vw;
        margin-top: -10vw;
        color: #fff;
        font-size: 3em;
        text-align: center;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.52);
        -webkit-box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);
        box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);
        -webkit-transition: opacity .5s;
        -o-transition: opacity .5s;
        transition: opacity .5s;
        opacity: 0;
      }
      .modal.show {
        opacity: 1;
      }
}
```
index-list.ts：
```
import { Component, ElementRef, ViewChild, ContentChildren, QueryList } from '@angular/core';
import { IndexGroupComponent } from './index-group';

/**
 * Generated class for the IndexListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'index-list',
  templateUrl: 'index-list.html'
})
export class IndexListComponent {
  _indexes: any[] = []; //右侧导航
  _currentIndicator= '';
  _flag= true;
  _offsetTops: Array<number> = [];
  _navOffsetX: 0;
  _indicatorTime: any = null;
  _showModal = false;

  @ContentChildren(IndexGroupComponent) _listOfIndexSection: QueryList<IndexGroupComponent>;
  @ViewChild('scrollContent') scrollContent: ElementRef;
  constructor() {
    console.log('Hello IndexListComponent Component');
  }

  ngAfterViewInit(){
    if (this._flag && this._listOfIndexSection){
      this._listOfIndexSection.forEach((section: any) => {
        this._indexes.push(section.index);
        const offsetTop = section.getOffsetTop();
        this._offsetTops.push(offsetTop);
        console.log(section);
      });
      if(this._indexes.length>0){
        this._currentIndicator = this._indexes[0];
      }
      this._flag = false;
    }
  }

  onScroll(e:any) {
    e.preventDefault();
    const scrollTopOffsetTop = this.scrollContent.nativeElement.scrollTop;
    this._offsetTops.forEach((v, i) => {
      if (scrollTopOffsetTop >= v){
        this._currentIndicator = this._indexes[i];
      }
    });
  }

  touchstart(e:any){
    this._navOffsetX = e.changedTouches[0].clientX;
    this.scrollList(e.changedTouches[0].clientY);
  }

  touchmove(e:any){
    e.preventDefault();
    this.scrollList(e.changedTouches[0].clientY);
  }

  touchend(e:any){
    this._indicatorTime = setTimeout(() => {
      this._showModal = false;
      this._currentIndicator = '';
    }, 500);
  }

  scrollList(y:any){
    const currentItem:any = document.elementFromPoint(this._navOffsetX, y);
    if (!currentItem || !currentItem.classList.contains('index-bar')) {
      return;
    }
    this._currentIndicator = currentItem['innerText'];
    this.scrollIntoView(this._currentIndicator);
  }

  scrollIntoView(id: string){
    let element = document.getElementById(id);
    if(element){
      element.scrollIntoView();
      this._showModal = true;
      if (this._indicatorTime) {
        clearTimeout(this._indicatorTime);
      }
    }
  } 
}
```

### index-group组件

index-group.html：
```
<ion-item-group id="{{index}}">
    <ion-item-divider #header color="{{headColor}}">{{index}}</ion-item-divider>
    <ng-content></ng-content>
</ion-item-group>
```
index-group.scss不需要
index-group.ts：
```
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ItemDivider } from 'ionic-angular/components/item/item-divider';
@Component({
  selector: 'index-group',
  templateUrl: 'index-group.html'
})
export class IndexGroupComponent {

  @Input() index: string = 'A';
  @Input() headColor: string = 'light';
  @ViewChild('header') header: ItemDivider;
  constructor() {
  }
  getOffsetTop(){
    return this.header.getNativeElement().offsetTop;
  }
}
```
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