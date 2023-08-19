import { Order, OrderProduct } from "../types/Order";
import { Product } from "../types/Product";
import { ProductLine } from "../types/ProductLine";
import { productController } from "./productController";
import { productLineController } from "./productLineController";
import { v4 as uuidv4 } from 'uuid';


export class OrderController {
    list = (): Order => {
        let cartItems: Order = JSON.parse(localStorage.getItem('cartItems') as string);

        if (!cartItems) {
            localStorage.setItem('cartItems', JSON.stringify({
                id: "myCart",
                status: 'pending',
                orderProducts: []
            }));
        }
        return cartItems
    }



    add = (color: string, productline: ProductLine): Order => {

        const cartItems = this.list()

        if (productline.colors.includes(color)) {
            const cartItem: Product | undefined = productline.products.find(product => product.color === color)

            if (cartItem) {
                const existingProduct = cartItems.orderProducts.find(product => product.productId === cartItem.id)
                if (existingProduct ) {
                    if(cartItem.inventoryAmount> existingProduct.amount){
                        existingProduct.amount += 1;
                    }
                } else {
                    cartItems.orderProducts.push({
                        productId: cartItem.id,
                        amount: 1
                    });
                }

                localStorage.setItem('cartItems', JSON.stringify(cartItems))
            }
        }
        return cartItems
    }

    find = (productId: number): Product | null => {
        const products: Product[] = productController.list()
        const cartItems = this.list()
        const product: OrderProduct | undefined = cartItems.orderProducts.find(product => product.productId === productId)

        if (product) {
            const productDisplay: Product | undefined = products.find(item => item.id === product?.productId)
            if (productDisplay) {
                return productDisplay
            }
        }
        return null
    }

    delete = (productId: number): Order => {
        const cartItems = this.list()
        const updatedOrderProducts = cartItems.orderProducts.filter(product => product.productId !== productId);
        const updatedCartItems: Order = {
            ...cartItems,
            orderProducts: updatedOrderProducts
        };

        console.log(updatedCartItems);


        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))

        return updatedCartItems
    }

    update = (change: "increase" | "decrease", productId: number): Order => {
        const cartItems: Order = this.list()
        const existingProduct = cartItems.orderProducts.find(product => product.productId === productId)
        const inventoryProduct = this.find(productId)


        if (change == "increase" && existingProduct) {
            if (inventoryProduct && existingProduct.amount < inventoryProduct.inventoryAmount) {
                existingProduct.amount += 1
            }
        }
        if (change == "decrease" && existingProduct) {
            existingProduct.amount -= 1
        }

        if (existingProduct && existingProduct.amount > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
        }
        else {
            console.log('delete');

            this.delete(productId)
        }


        return cartItems
    }

    listPendingOrder = (): Order => {
        let pendingOrder: Order = JSON.parse(localStorage.getItem('pendingOrder') as string);

        if (!pendingOrder) {
            localStorage.setItem('pendingOrder', JSON.stringify({
                id: uuidv4(),
                status: 'pending',
                orderProducts: []
            }));
        }
        return pendingOrder
    }

    addPendingOrder = (product: OrderProduct): Order => {
        const pendingOrder = this.listPendingOrder()
        pendingOrder.orderProducts.push(product)
        localStorage.setItem('pendingOrder', JSON.stringify(pendingOrder))

        return pendingOrder
    }

    deletePendingOrder = (product: OrderProduct): Order => {
        const pendingOrder = this.listPendingOrder()

        if (this.isInPendingOrder(product.productId) == true) {
            const updatedPendingProducts = pendingOrder.orderProducts.filter(item => item.productId != product.productId)
            const updatedPendingOrder: Order = {
                ...pendingOrder,
                orderProducts: updatedPendingProducts
            }
            localStorage.setItem('pendingOrder', JSON.stringify(updatedPendingOrder))
            return updatedPendingOrder
        }


        return pendingOrder
    }

    isInPendingOrder = (productId: number) => {

        const pendingOrder = this.listPendingOrder()
        const pendingProduct = pendingOrder.orderProducts.find(product => product.productId === productId)
        if (pendingProduct) {

            return true
        }

        return false
    }

    listOrderHistory = () => {
        let orderHistory: Order[] = JSON.parse(localStorage.getItem('orderHistory') as string);

        if (!orderHistory) {
            localStorage.setItem('orderHistory', JSON.stringify([]));
        }
        return orderHistory
    }

    addOrderHistory = (): Order[] => {
        const cartItems = this.list()
        const pendingOrder = this.listPendingOrder()
        const orderHistory = this.listOrderHistory()
        let completedOrder: Order = {
            ...pendingOrder,
            status: 'completed'
        }
        orderHistory.push(completedOrder)

        localStorage.setItem('orderHistory', JSON.stringify(orderHistory))
        localStorage.setItem('pendingOrder', JSON.stringify({
            id: uuidv4(),
            status: 'pending',
            orderProducts: []
        }));

        for (var i = 0; i < cartItems.orderProducts.length; i++) {
            if (pendingOrder.orderProducts[i] && pendingOrder.orderProducts[i].productId) {
                this.delete(pendingOrder.orderProducts[i].productId);
            }
        }
        return orderHistory
    }
}

export const orderController = new OrderController()