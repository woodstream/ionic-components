import { TextAvatarComponent } from './text-avatar/text-avatar';
import { SimpleAccordionComponent } from './simple-accordion/simple-accordion';
import { NodataComponent } from './nodata/nodata';
import { IconSearchbarComponent } from './icon-searchbar/icon-searchbar';
import { BorderHeaderComponent } from './border-header/border-header';
import { AccordionComponent } from './accordion/accordion';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IndexListComponent } from './index-list/index-list';
import { IndexGroupComponent } from './index-list/index-group';
@NgModule({
	declarations: [
		IndexListComponent,
		IndexGroupComponent,
		AccordionComponent,
		SimpleAccordionComponent,
		BorderHeaderComponent,
		IconSearchbarComponent,
		NodataComponent,
		TextAvatarComponent
	],
	imports: [IonicModule],
	entryComponents: [],
	exports: [
		IndexListComponent,
		IndexGroupComponent,
		AccordionComponent,
		SimpleAccordionComponent,
		BorderHeaderComponent,
		IconSearchbarComponent,
		NodataComponent,
		TextAvatarComponent
    ]
})
export class ComponentsModule { }
