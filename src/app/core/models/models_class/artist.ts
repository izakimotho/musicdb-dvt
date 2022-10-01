export class Artist {
  id: number=0;
  name: string | null| undefined;
  link: string | null| undefined;
  share: string | null| undefined;
  picture: string | null| undefined;
  picture_small: string | null| undefined;
  picture_medium: string | null| undefined;
  picture_big: string | null| undefined;
  picture_xl: string | null| undefined;
  nb_album: number=0;
  nb_fan: number=0;
  radio: boolean | undefined;
  tracklist: string | null| undefined;
  constructor() {
  }
}
