import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 
import { PagesRoutingModule } from './pages-routing.module';

 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 


 

@NgModule({
  declarations: [   ],
  imports: [
    CommonModule,
    FormsModule, 
    PagesRoutingModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
  ],
})
export class PagesModule { }
