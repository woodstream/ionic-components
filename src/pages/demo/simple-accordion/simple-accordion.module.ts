import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimpleAccordionPage } from './simple-accordion';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SimpleAccordionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SimpleAccordionPage),
  ],
})
export class SimpleAccordionPageModule {}
