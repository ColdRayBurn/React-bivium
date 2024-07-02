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
