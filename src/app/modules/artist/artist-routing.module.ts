import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
 //Components
import { ArtistSearchComponent } from './artist-search/artist-search.component';  

import { ArtistDetailsComponent } from './artist-details/artist-details.component';  
import { PageNotFoundComponent } from '../common/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', 
    component: ArtistSearchComponent
  }, 
  
    
    { 
        path: 'dashboard',
        component: ArtistSearchComponent
    },     
    // {
    //     path: 'artist/:searchTerm',
    //     component: ArtistSearchComponent
    //   },
      
      {
        path: 'artist/:artists_id',
        component: ArtistDetailsComponent
      },  
       
      
      {
        path: '**',
        component: PageNotFoundComponent
      },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArtistRoutingModule { }
