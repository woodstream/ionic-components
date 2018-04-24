import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IconSearchbarPage } from './icon-searchbar';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    IconSearchbarPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IconSearchbarPage),
  ],
})
export class IconSearchbarPageModule {}
