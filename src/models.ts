export type Gender = 'male' | 'female';

export interface IUser {
  name: string | null;
  surname: string | null;
  patronymic: string | null;
  gender: Gender | null;
  phonenumber: string | null;
  email: string;
  birthday: string;
  cartAmount: number;
  favoritesAmount: number;
}

export interface IProduct {
  id: number;
  name: string;
  gender: string;
  season: string;
  sportType: string;
  color: string;
  inStock: boolean;
  sizes: {
    id: number;
    price: number;
    inStock: boolean;
    size: string;
  }[];
  images: string[];
  description: string;
  views: number;
  categoryId: number;
}

export interface ICatalogProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  inStock: boolean;
  views: number;
  uploadedAt: 1720006392;
}

export interface IProductCard {
  id: number;
  image: string;
  name: string;
  price: number;
  inStock: boolean;
}
