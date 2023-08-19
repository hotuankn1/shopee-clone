import { Category } from "../types/Category";
import { fakeCategories } from "./categoryControllerFakeData";

export class CategoryController {
    list = () : Category[]=> {
        return fakeCategories
    }
}

export const categoryController = new CategoryController();
