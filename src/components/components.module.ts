import { NgModule } from '@angular/core';
import { PersonComponent } from './person/person';
import { ListPersonComponent } from './list-person/list-person';
import { PipeComponent } from './pipe/pipe';
@NgModule({
	declarations: [PersonComponent,
    ListPersonComponent,
    PipeComponent],
	imports: [],
	exports: [PersonComponent,
    ListPersonComponent,
    PipeComponent]
})
export class ComponentsModule {}
