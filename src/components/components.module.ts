import { NgModule } from '@angular/core';
import { PersonComponent } from './person/person';
import { ListPersonComponent } from './list-person/list-person';
@NgModule({
	declarations: [PersonComponent,
    ListPersonComponent],
	imports: [],
	exports: [PersonComponent,
    ListPersonComponent]
})
export class ComponentsModule {}
