import { ICatalogProduct, IUser, INewsItemList } from '@/models';

export interface IErrorResponse {
  errorMessage: string;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}

export interface IMetaHomepageResponse {
  hero: {
    button: {
      text: string;
      url: string;
    };
    picture: string;
    text: string;
  };
  catalog: {
    title: string;
    badge: string;
    pictureUrl: string;
    url: string;
  }[];
  banner: {
    title: string;
    button: {
      text: string;
      url: string;
    };
    description: string;
    pictureUrl: string;
    mobilePictureUrl: string;
  };
  ambassadorsProducts: {
    ambassador: {
      name: string;
      comment: string;
      picture: string;
    };
    product: {
      id: number;
      name: string;
      price: number;
      imagePreview: string;
      images: string[];
    };
  }[];
  news: {
    id: number;
    name: string;
    date: number;
    description: string;
    image: string;
    city: string | null;
  }[];
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
  filters: {
    colors: {
      id: number;
      name: string;
    }[];
    sections: {
      childitems: {
        id: number;
        name: string;
      }[];
    }[];
    sizes: {
      id: number;
      name: string;
    }[];
  };
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

export interface ICartResponse {
  items?: {
    id: number;
    name: string;
    price: number;
    image: string;
    amount: number;
    color: string;
    size: string;
    productId: number;
  }[];
  totalPrice: number;
}

export interface IOrderResponse {
  dateInsert: number;
  receiptUrl: string;
  trackUrl: string;
  id: number;
  totalPrice: number;
  discountPercent: number;
  delivery: {
    type: 'courier' | 'postomat';
    price: number;
    address: string;
  } | null;
  items: {
    productId: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
    color: string;
    size: string;
    inStock: boolean;
  }[];
}

export interface IVacancy {
  id: number;
  name: string;
  image: string;
  division: string;
  city: string;
  salary: string;
  workType: string;
  experience: string;
  description: string;
}

export type IVacanciesResponse = Omit<IVacancy, 'image'>[];
