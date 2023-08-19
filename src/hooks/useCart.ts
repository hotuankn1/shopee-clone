import { stringify } from "querystring";
import React, { createContext, useContext, useEffect, useState } from "react";
import { orderController } from "../controllers/orderController";
import { Order } from "../types/Order";
import { ProductLine } from "../types/ProductLine";


export default function UseCart() {
    const [cartItems, setCartItems] = useState<Order>(orderController.list())

   
    function updateCartItems(change: "increase" | "decrease", productId: number) {
        const updatedCartItems = orderController.update(change, productId)
        setCartItems(updatedCartItems)
        return updatedCartItems
    }

    function addCartItems (color: string, productLine: ProductLine) {
        const updatedCartItems= orderController.add(color, productLine)
        setCartItems(updatedCartItems)
        return updatedCartItems
    }

    function deleteCartItems (productId:number) {
        const updatedCartItems = orderController.delete(productId)
        setCartItems(updatedCartItems)
        return updatedCartItems
    }


    return {
        cartItems,
        updateCartItems,
        addCartItems,
        deleteCartItems
    }
}


export const CartContext = React.createContext<
  ReturnType<typeof UseCart>
>({} as any);


