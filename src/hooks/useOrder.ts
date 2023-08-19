import React from "react";
import { useState } from "react";
import { orderController } from "../controllers/orderController";
import { Order } from "../types/Order";

export default function UseOrder() {
    const [orders, setOrders] = useState<Order[]>(orderController.listOrderHistory())

    function addOrderHistory() {
        const updatedOrderHistory = orderController.addOrderHistory()
        setOrders(updatedOrderHistory)
        return updatedOrderHistory
    }

    function listPendingOrder() {
        const pendingOrder = orderController.listPendingOrder()
        return pendingOrder
    }

    function findOrder(id: string) {
        const order = orders.find(item => item.id === id)
        return order
    }

    function caculateTotalAmount(id: string) {
        const order = orders.find(item => item.id === id)
        var totalAmount = 0
        if (order) {
            for (var i = 0; i < order?.orderProducts.length; i++) {
                const product = orderController.find(order.orderProducts[i].productId)
                if(product) {
                    const price = product.price * order.orderProducts[i].amount
                    totalAmount = totalAmount+price
                }
            }
        }
        return totalAmount
    }
    return {
        addOrderHistory,
        listPendingOrder,
        findOrder,
        caculateTotalAmount,
        orders, 
    }

}

export const OrderContext = React.createContext<
    ReturnType<typeof UseOrder>
>({} as any);
