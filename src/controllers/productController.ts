import { Product } from "../types/Product";
import { fakeProductItems } from "./productControllerFakeData";

export class ProductController {
    list = () : Product[] => {
        // search pagination
        return fakeProductItems
    }
}

export const productController = new ProductController