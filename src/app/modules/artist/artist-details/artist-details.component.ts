import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Album } from 'src/app/core/models/models_class/album';
import { Albums } from 'src/app/core/models/models_class/albums';
import { Artist } from 'src/app/core/models/models_class/artist';
import { Track } from 'src/app/core/models/models_class/track';
import { AlbumService } from 'src/app/core/services/album.service';
import { ArtistsService } from 'src/app/core/services/artists.service';
import { TracklistService } from 'src/app/core/services/tracklist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
})
export class ArtistDetailsComponent implements OnInit {
  artists_id: number | undefined;
  artist: Artist = {} as Artist;
  tracks: Track[] = {} as Track[];
  albums: Albums = {} as Albums;
  albumlist: Album[] = new Array();
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private artist_Service: ArtistsService, private track_list_service: TracklistService, private album_service: AlbumService,
    
  ) {
    // assign passes artist ID
    
    this.artists_id = this.actRoute.snapshot.params['artists_id'];
  }

  ngOnInit(): void {
  // Load artist details
    this.artist_Service.getArtists(this.artists_id).subscribe((results) => {
      this.artist = results;
    });
  // Load artist music track list
    this.track_list_service.getTrackList(this.artists_id).subscribe((results) => {
      this.tracks = results;
    });
  // Load artist album list
    this.album_service.getAlbumlist(this.artists_id).subscribe((results) => {
      this.albums = results;
      this.albumlist = this.albums.data;
    });
  }

  goBack(): void {
   // However to keep the example simple, we will always redirect to `/artist list`.            
   var redirectUrl = '/list';
   // Set our navigation extras object
   // that passes on our global query params and fragment
   const navigationExtras: NavigationExtras = {
     queryParamsHandling: 'preserve',
     preserveFragment: true
   };
   // Redirect the user
   this.router.navigate([redirectUrl], navigationExtras);
  }
}
