import { NgModule } from '@angular/core';
import { DemoPipe } from './demo/demo';
@NgModule({
	declarations: [DemoPipe],
	imports: [],
	exports: [DemoPipe]
})
export class PipesModule {}
