import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  
// Services
 
// Components 
import { ArtistSearchComponent } from './artist-search/artist-search.component';  

import { ArtistDetailsComponent } from './artist-details/artist-details.component';  
import { ArtistRoutingModule } from './artist-routing.module';
import { ApiService } from 'src/app/core/services/api.services';
import { ThousandSuffPipe } from 'src/app/core/pipes/thousand-suff.pipe'; 

 

@NgModule({
  declarations: [ 
    ArtistSearchComponent ,ArtistDetailsComponent,

    ThousandSuffPipe,
    //MinuteSecondsPipe,
  ],
  imports: [
    CommonModule, 
    ArtistRoutingModule,
    FormsModule, 
    FormsModule, ReactiveFormsModule , 
  ],
  providers: [
    ApiService
  ]
})
export class ArtistModule { }
