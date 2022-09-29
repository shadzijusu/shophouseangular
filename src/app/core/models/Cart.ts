import { Product } from './Product';

export interface Cart {
    id: number,
    userId: number,
    date: string,
    products: Product[]
}