export interface Product {
    id: number;
    categoryId: string;
    name: string;
    series: string;
    color: "white" | "green" | "black" | "red"; 
    inventoryAmount: number;
    price: number;
    image: string;
}