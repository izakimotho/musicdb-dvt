import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/common/page-not-found/page-not-found.component';

const routes: Routes = [
   
  // tslint:disable-next-line: max-line-length
  {
    path: "", 
    loadChildren: () =>
      import("./modules/pages.module").then((m) => m.PagesModule), 
  } ,
  
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      relativeLinkResolution: "legacy",
    }), 
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
