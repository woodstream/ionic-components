import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  demoValue: string;
  constructor(public navCtrl: NavController) {

  }

  onClick(){
    console.log(this.demoValue);
  }

}
