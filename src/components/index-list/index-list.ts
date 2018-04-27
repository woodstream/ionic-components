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


  ngAfterContentChecked(){
    this.resetIndicator();
  }

  resetIndicator(){
    if (this._listOfIndexSection && this._listOfIndexSection.length > 0){
      this._indexes = [];
      this._offsetTops = [];
      let tempIndexs: any[] = [];
      this._listOfIndexSection.forEach((section: any) => {
        tempIndexs.push(section.index);
        const offsetTop = section.getOffsetTop();
        this._offsetTops.push(offsetTop);
        console.log(section);
      });
      this._indexes = tempIndexs;
      if(this._indexes.length>0){
        this._currentIndicator = this._indexes[0];
      }
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
