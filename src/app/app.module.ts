// import { ComponentsModule } from './../components/components.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// http
import { HttpModule } from '@angular/http'

import { ChildComponent } from './child.component';
import { ParentCompnent } from './parent.component';
import { CardComponent } from './card.component';
import { SignInComponent } from './sign-in.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PersonComponent } from '../components/person/person';
import { ListPersonComponent } from '../components/list-person/list-person';
import { WeatherAppComponent } from '../components/weather-app/weather-app';
// import { PipeComponent } from '../components/pipe/pipe';

// Import provider
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IpService } from './ip.service';
import { WeatherService } from '../components/weather-app/weather.service';
import { SignInService } from './sign-in.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PersonComponent,
    ListPersonComponent,
    TabsPage,
    ChildComponent,
    ParentCompnent,
    CardComponent,
    WeatherAppComponent,
    SignInComponent
    // PipeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IpService,
    WeatherService,
    SignInService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
