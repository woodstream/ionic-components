import { Component, Input, ElementRef, Injectable } from '@angular/core';

@Injectable()
export class ColorProvider {

  COLORS: any[] = [
    "#e57373",
    "#f06292",
    "#ba68c8",
    "#9575cd",
    "#7986cb",
    "#64b5f6",
    "#4fc3f7",
    "#4dd0e1",
    "#4db6ac",
    "#81c784",
    "#aed581",
    "#ff8a65",
    "#d4e157",
    "#673ab7",
    "#ffb74d",
    "#a1887f",
    "#90a4ae"
  ];

  constructor() {
    
  }

  public getColor(str?: string): string {
    return this.COLORS[Math.abs(this.toNumber(str)) % this.COLORS.length];
  }

  private toNumber(str: string): number {
    if(!str){
      str = '';
    }
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = 31 * h + str.charCodeAt(i);
      h |= 0; // Convert to 32bit integer
    }
    return h;
  }
}
/**
 * Generated class for the AvatarTextComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'text-avatar',
  templateUrl: 'text-avatar.html'
})
export class TextAvatarComponent {
  constructor(private element: ElementRef, private colorProvider: ColorProvider){  }
    
  @Input() text: string = '';
  @Input() textColor: string = '#fff';
  @Input()
  set color(color: string) {
    this.element.nativeElement.style.backgroundColor = this.colorProvider.getColor(color);
  }

}
