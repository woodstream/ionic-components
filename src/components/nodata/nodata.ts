import { Component, Input } from '@angular/core';

/**
 * Generated class for the NodataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nodata',
  templateUrl: 'nodata.html'
})
export class NodataComponent {

  @Input() isShow: boolean = false;
  @Input() tipText: string = '暂无数据';
  constructor() {

  }

}
