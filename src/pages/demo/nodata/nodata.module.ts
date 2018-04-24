import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NodataPage } from './nodata';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    NodataPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NodataPage),
  ],
})
export class NodataPageModule {}
