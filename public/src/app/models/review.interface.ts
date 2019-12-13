export interface Review {
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  restID?: string;
  rating: number;
  review: string;
  name: string;
}
