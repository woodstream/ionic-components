import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextAvatarPage } from './text-avatar';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    TextAvatarPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TextAvatarPage),
  ],
})
export class TextAvatarPageModule {}
