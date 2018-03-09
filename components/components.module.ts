import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IndexListComponent } from './index-list/index-list';
import { IndexGroupComponent } from './index-list/index-group';
@NgModule({
	declarations: [
		IndexListComponent,
		IndexGroupComponent
	],
	imports: [IonicModule],
	entryComponents: [],
	exports: [
		IndexListComponent,
		IndexGroupComponent,
    ]
})
export class ComponentsModule { }
