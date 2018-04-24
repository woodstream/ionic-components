import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimeoutDebouncer } from 'ionic-angular/util/debouncer';

/**
 * Generated class for the IconSearchbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'icon-searchbar',
  templateUrl: 'icon-searchbar.html'
})
export class IconSearchbarComponent {

  @Input() iconName: string = 'ios-funnel';

  _debounce: number = 250;
  _inputDebouncer: TimeoutDebouncer = new TimeoutDebouncer(this._debounce);

  @Input() value: any;
  @Input()
  set debounce(debounce: number){
    this._debounce = debounce;
    this._inputDebouncer.wait = debounce;
  }
  get debounce(){
    return this._debounce;
  }


  @Output() iconClick: EventEmitter<any> = new EventEmitter();
  @Output() inputChanged: EventEmitter<any> = new EventEmitter();


  constructor() {

  }

  onIconClick($event){
    this.iconClick.emit($event);
  }

  onInputChanged($event){
    this._inputDebouncer.debounce(() => {
      this.inputChanged.emit($event);
    });
  }

}
