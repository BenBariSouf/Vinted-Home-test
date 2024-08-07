export interface Photo {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    ispublic?: number;
    isfriend?: number;
    isfamily?: number;
    ownername: string
}

export interface IPhoto {
    photo: Photo;
    isLiked: boolean;
    addToFavourites: (id: string) => void;
  }