import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the EastHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'border-header',
  templateUrl: 'border-header.html'
})
export class BorderHeaderComponent {

  @Input() title: string = '标题';
  @Input() borderWidth: number = 3;
  @Input() borderColor: string = '#2c87c3';
  @Input() badgeCount: number = 0;
  @Input() badgeColor: string = '#FF0000';

  borderLeft: any;
  badge: any;

  constructor(private sanitizer: DomSanitizer) {
    let styleBorder: string = `${this.borderWidth}px solid ${this.borderColor}`;
    this.borderLeft = sanitizer.bypassSecurityTrustStyle(styleBorder);

    let styleBadge: string = `background-color:${this.badgeColor}`;
    this.badge = sanitizer.bypassSecurityTrustStyle(styleBadge);
  }
}
