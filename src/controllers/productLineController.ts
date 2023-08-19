import { IPagination } from "../types/IPagination";
import { Product } from "../types/Product";
import { ProductLine } from "../types/ProductLine";
import { orderController } from "./orderController";
import { fakeProductItems } from "./productControllerFakeData";

export class ProductLineController {
    list = (page: number, pageSize: number, search?: string, categoryId?: string): IPagination<ProductLine> => {
        const productsInCategory: Product[] = fakeProductItems.filter(product => product.categoryId === categoryId);
        const series = Array.from(new Set(productsInCategory.map(product => product.series)))
        const productLines: ProductLine[] = series.map(series => {
            const productWithSeries = productsInCategory.filter(product => product.series === series)
            const colors = Array.from(new Set(productWithSeries.map(product => product.color)))
            return {
                colors: colors,
                products: productWithSeries
            }
        })

        const pagination: IPagination<ProductLine> = {
            page: page,
            pageSize: pageSize,
            totalItems: productLines.length,
            totalPages: Math.ceil(productLines.length / pageSize),
            items: productLines.slice((page - 1) * pageSize, page * pageSize)
        }

        return pagination
    }


    amount = (color: string, productLine: ProductLine): number => {
        if (productLine.colors.includes(color)) {
            const productWithColor: Product | undefined = productLine.products.find(product => product.color === color);
            if (productWithColor) {
                return productWithColor.inventoryAmount;
            }
        }
        return 0;
    }

    

}

export const productLineController = new ProductLineController