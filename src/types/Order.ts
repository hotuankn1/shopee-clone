import { Product } from "./Product";

export interface OrderProduct {
    productId: number;
    amount: number
}


export interface Order {
    id: string;
    purchasedDate?: string;
    status: 'pending' | "completed";
    orderProducts: OrderProduct[]
}