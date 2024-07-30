export interface IOrder {
  [x: string]: {
    items: {
      image: string;
      color: string;
      size: string;
      name: string;
      quantity: number;
      price: string;
    }[];
    totalPrice: string;
  };
}
