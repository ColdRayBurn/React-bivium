export interface IOrder {
  [x: string]: {
    items: {
      name: string;
      quantity: number;
      price: string;
    }[];
    totalPrice: string;
  };
}
