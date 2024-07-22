import { ICatalogProduct, IUser, INewsItemList } from '@/models';

export interface IErrorResponse {
  errorMessage: string;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}

export interface IMetaHomepageResponse {
  heroCarousel: {
    slide: string;
    slidesMobile: string | null;
  }[];
  banner: {
    name: string;
    picture: string;
    pictureMobile: string;
  };
  blockUnderBanner: {
    name: string;
    picture: string;
    pictureMobile: string;
    topText: string;
    bottomText: string;
  }[];
  description: {
    name: string;
    text: string;
    title: string;
  };
}

export interface IMetaContactspageResponse {
  topBlock: {
    picture: string;
    email: string;
    phone: string;
    addressCity: string;
    addressMain: string;
  };
  partners: {
    cityName: string;
    items: {
      logo: string;
      title: string;
      address: string;
      phone: string;
      email: string;
    }[];
  }[];
}

export interface IMetaFooterResponse {
  feedback: {
    buttonText: string;
    phone: string;
  };
  socialNetworks: {
    text: string;
  };
  paymentInformation: {
    text: string;
  };
}

export interface ICatalogResponse {
  total: number;
  products: ICatalogProduct[];
}

export interface INewsItemListResponse {
  total: number;
  items: INewsItemList[];
}

export interface INewsItemDetail {
  id: number;
  name: string;
  date: number;
  description: string;
  image: string;
  titleDescription: string;
}
