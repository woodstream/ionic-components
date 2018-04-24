import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccordionPage } from './accordion';

@NgModule({
  declarations: [
    AccordionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AccordionPage),
  ],
})
export class AccordionPageModule {}
