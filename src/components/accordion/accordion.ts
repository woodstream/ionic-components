import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * 支持头部自定义
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent {

  @Input() header: string = '';
  @Input() isMutiOpen: boolean = true;    //是否展开多个
  @Input()
  set isShowContent(isShow: boolean) {
    //如果isMutiOpen = true时，该值设定失效
    if(!this.isMutiOpen){
      this.isShow = isShow;
    }
  }
  @Output() headerClick: EventEmitter<any> = new EventEmitter();

  isShow: boolean = false;
  constructor() {

  }

  onHeaderClick($event){
    if(this.isMutiOpen){
      this.isShow = !this.isShow;
    }
    this.headerClick.emit($event);
  }

}
