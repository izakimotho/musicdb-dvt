export class Track {
  id: number=0;
  readable: boolean | undefined;
  title:  string | null| undefined;
  title_short:  string | null| undefined;
  title_version:  string | null| undefined;
  unseen: boolean | undefined;
  duration: number=0;
  rank: number=0;
  explicit_lyrics: boolean | undefined;
  explicit_content_lyrics: number=0;
  explicit_content_cover: number=0;
  preview:  string | null| undefined;
}
