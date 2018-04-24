import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ItemDivider } from 'ionic-angular/components/item/item-divider';

/**
 * Generated class for the IndexGroupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
