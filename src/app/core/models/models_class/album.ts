export class Album {
  id: number=0;
  title: string | null| undefined;
  link: string | null| undefined;
  cover: string | null| undefined;
  cover_small: string | null| undefined;
  cover_medium: string | null| undefined;
  cover_big: string | null| undefined;
  cover_xl: string | null| undefined;
  genre_id: number=0;
  fans: number=0;
  release_date: Date | undefined;
  record_type: string | null| undefined;
  tracklist: string | null| undefined;
  explicit_lyrics:boolean | undefined;
  type: string | null| undefined;
}
