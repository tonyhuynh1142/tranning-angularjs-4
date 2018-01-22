import { NgModule } from '@angular/core';
import { PersonComponent } from './person/person';
import { ListPersonComponent } from './list-person/list-person';
import { PipeComponent } from './pipe/pipe';
import { WeatherAppComponent } from './weather-app/weather-app';
@NgModule({
	declarations: [PersonComponent,
    ListPersonComponent,
    PipeComponent,
    WeatherAppComponent],
	imports: [],
	exports: [PersonComponent,
    ListPersonComponent,
    PipeComponent,
    WeatherAppComponent]
})
export class ComponentsModule {}
