import { Product } from "./Product";

export interface IPagination<T> {
    totalPages: number;
    page: number;
    totalItems:number;
    pageSize: number;
    items: T[]
}

