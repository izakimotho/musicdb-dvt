 import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Artist } from 'src/app/core/models/models_class/artist';
import { ApiService } from 'src/app/core/services/api.services';
import { ArtistsService } from 'src/app/core/services/artists.service';


@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {

  urlCors = "https://cors-anywhere.herokuapp.com/";
  urlDeezer = this.urlCors +  "https://api.deezer.com/artist/652";


  //urlDeezer = this.urlCors +  "https://api.deezer.com/search/track/autocomplete?limit=20&q=eminem";
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



  artists: Artist[] = [];
  loading = true;
  rndNumber: any = 0;

  searching: boolean = false;
  search_results:  Observable<Artist[]>  | undefined;
  private searchTerms = new Subject<string>();
  searchText: any;

  
  search(term: string): void {
    this.searching=true;
    this.searchTerms.next(term);
  }

  constructor(public api: ApiService,public artist_Service :ArtistsService,private http : HttpClient) { 
  
  }

 





  ngOnInit(): void {
    this.rndNumber = 0;
    // this.rndNumber=this.randomInt(2000, 3000) - 20;
    this.fetch_artist();

    this.search_results = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.artist_Service.searchArtists(term))
    );
  }
  fetch_artist() {
    for (
      let artistNo = this.rndNumber;
      artistNo <= this.rndNumber + 20;
      artistNo++
    ) {
      // this.api.get('artist/' + artistNo).subscribe(result => {
      //   console.log(result.data)
      //   this.artists.push(result);
      // });

      this.artist_Service.getArtists(artistNo).subscribe(x => {
        this.artists.push(x);
        this.loading = false;
      });


    }

  }

  randomInt(min: number, max: number) {
    let isGreater = false;

    if (min > 20) {
      isGreater = true;
    } else {
      isGreater = false;
    }

    if (isGreater) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    } else {
      return null;
    }

    return null;
  }
}

