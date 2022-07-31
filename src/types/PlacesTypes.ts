export interface PlaceType {
  title: string;
  imageUri: string;
  address: string;
  location: { lat: number; lng: number };
  id: string;
}

export interface PlacesListType {
  places?: PlaceType[];
}
