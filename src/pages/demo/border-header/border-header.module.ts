import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorderHeaderPage } from './border-header';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    BorderHeaderPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BorderHeaderPage),
  ],
})
export class BorderHeaderPageModule {}
