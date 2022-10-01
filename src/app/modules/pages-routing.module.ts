import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistSearchComponent } from './artist/artist-search/artist-search.component';

 
const routes: Routes = [
  // { path: '', redirectTo: 'dashboard' }, 
  { path: '', component: ArtistSearchComponent },
 
  { path: 'artist', loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule) },


 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
 