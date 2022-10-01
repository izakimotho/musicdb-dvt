import { TestBed, async, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "src/environments/environment";

import { AlbumService } from "./album.service";

describe("AlbumService", () => {
  let albumServices: AlbumService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService],
    });

    albumServices = TestBed.inject(AlbumService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("should fetch albums as an observable", async(
    inject(
      [HttpTestingController, AlbumService],
      (httpClient: HttpTestingController, albumServices: AlbumService) => {
        const albumItem = [
          {
            id: "652",
            title: "Random Access Memories",
            link: "https://www.deezer.com/album/652",
            cover: "https://api.deezer.com/album/652/image",
            cover_small:
              "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/56x56-000000-80-0-0.jpg",
            cover_medium:
              "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/250x250-000000-80-0-0.jpg",
            cover_big:
              "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/500x500-000000-80-0-0.jpg",
            cover_xl:
              "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/1000x1000-000000-80-0-0.jpg",
            genre_id: 132,
            fans: 747052,
            release_date: "2013-05-17",
            record_type: "album",
            tracklist: "https://api.deezer.com/album/652/tracks",
            explicit_lyrics: false,
            type: "album",
          },
        ];

        albumServices.getAlbumlist(27).subscribe((albums: any) => {
          expect(albums.length).toBe(1);
        });

        const req = httpMock.expectOne(
          `${environment.baseURL}/artist/27/albums`
        );
        expect(req.request.method).toBe("GET");

        req.flush(albumItem);
        httpMock.verify();
      }
    )
  ));
});
