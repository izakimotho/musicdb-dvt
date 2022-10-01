import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";  
import { map } from "rxjs/operators"; 
import { Artist } from "../models/models_class/artist";
import { NonNullableFormBuilder } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ArtistsService {
  constructor(private http: HttpClient) {}
 urlCors = "https://cors-anywhere.herokuapp.com/";
  urlDeezer = this.urlCors +  "https://api.deezer.com/artist/20";
  getArtists(query?: number): Observable<Artist> {
     return this.http.get<Artist>(`${environment.baseURL}/artist/${query}`);

   // this.http.get<any>(this.urlDeezer,).subscribe( 
       
     // );
      //return this.http.get<Artist>(this.urlDeezer);
  }

  searchArtists(term?: string): Observable<Artist[]> {
    return this.http
      .get<any>(`${environment.baseURL}/search/artist?q=${term}`)
      .pipe(map((x) => x.data));
  }
}
 


  // constructor(private http : HttpClient){}

  // ngOnInit() {

  //   this.http.get<any>(this.urlDeezer,).subscribe( 
       
  //   );
    
  //   this.dd("ssss");
  // }

  // //name = 'Deezer';

  // dd(s: string) {
  //   console.log(s)
  // }

