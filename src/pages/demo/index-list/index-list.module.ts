import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexListPage } from './index-list';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    IndexListPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IndexListPage),
  ],
})
export class IndexListPageModule {}
