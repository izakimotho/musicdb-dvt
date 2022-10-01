import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { ApiService } from 'src/app/core/services/api.services';
//Components
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AppComponent } from './app.component';   
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './modules/common/page-not-found/page-not-found.component';
import { ThousandSuffPipe } from './core/pipes/thousand-suff.pipe'; 
 
@NgModule({
  declarations: [
    AppComponent,PageNotFoundComponent,
    ThousandSuffPipe,
    //MinuteSecondsPipe,
  ],
  imports: [
    BrowserModule,
     HttpClientModule ,
    AppRoutingModule,FooterComponent,HeaderComponent
  ],
  providers: [
    ApiService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }