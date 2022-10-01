import { IArtist } from "./artist";

 
export interface IAlbum { 
    id:number;
    title:string;
    upc:string;
    link:string;
    share:string;
    cover:string;
    cover_small:string;
    cover_medium:string;
    cover_big:string;
    cover_xl:string;
    md5_image:string;
    genre_id:number;
    genres:[]
    label:string;
    nb_tracks:number;
    duration:number;
    fans:number;
    release_date:Date;
    record_type	:string;
    available:boolean;
    alternative:string;
    tracklist:string;
    explicit_lyrics:boolean;
   // explicit_content_lyrics	The explicit content lyrics values (0:Not Explicit; 1:Explicit; 2:Unknown; 3:Edited; 4:Partially Explicit (Album "lyrics" only); 5:Partially Unknown (Album "lyrics" only); 6:No Advice Available; 7:Partially No Advice Available (Album "lyrics" only))	int
   // explicit_content_cover	The explicit cover values (0:Not Explicit; 1:Explicit; 2:Unknown; 3:Edited; 4:Partially Explicit (Album "lyrics" only); 5:Partially Unknown (Album "lyrics" only); 6:No Advice Available; 7:Partially No Advice Available (Album "lyrics" only))	int
    contributors:[];
    //artist	artist object containing : id, name, picture, picture_small, picture_medium, picture_big, picture_xl	object
    tracks:[];
    readable:boolean;
    title_short	:string;
    title_version:string;
    rank:number;
    preview:string;
    artist:IArtist;
    album:{
        id:number;
        title:string;
        cover:string; cover_small:string; cover_medium:string; cover_big:string; cover_xl:any;
    }	 

 

}
