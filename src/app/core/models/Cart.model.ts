import { CartProduct } from './CartProduct.model';

export interface Cart {
    id: number;
    userId: number;
    date: string;
    products: CartProduct[];
  }  