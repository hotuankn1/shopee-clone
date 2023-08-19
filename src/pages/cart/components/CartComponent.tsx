import { Button, Checkbox, Col, Row, Typography } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { orderController } from '../../../controllers/orderController'
import { OrderProduct } from '../../../types/Order'
import { DeleteOutlined } from '@ant-design/icons';
import { Product } from '../../../types/Product'
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CartContext } from '../../../hooks/useCart';

export default function CartComponent(props: Props) {
    const {updateCartItems, deleteCartItems} = useContext(CartContext)

    const [state, setState] = useState<State>({
        isDeleted: false,
        amount: props.item.amount,
        checked: orderController.isInPendingOrder(props.item.productId),
        product : orderController.find(props.item.productId)
    })


    const handleDelete = () => {
        deleteCartItems(props.item.productId)
        setState((prev) => ({ ...prev, isDeleted: true }))
    }

    const handleChangeAmount = (change: "decrease" | "increase", productId:number) => {
        const updatedCartItems = updateCartItems(change, productId)
        const existingProduct = updatedCartItems.orderProducts.find(product => product.productId === productId)

        if(existingProduct){
            setState((prev) => ({ ...prev, amount:  existingProduct.amount}))
        }

    }

    const handleCheckBox = (e: CheckboxChangeEvent) => {
        console.log('checked = ', e.target.checked);
        if (e.target.checked == true) {
            orderController.addPendingOrder(props.item)
            setState((prev) => ({...prev, checked: true}))
        }
        if (e.target.checked == false) {
            orderController.deletePendingOrder(props.item)
            setState((prev) => ({...prev, checked: false}))

        }
    };


    if (state.isDeleted) {
        return null
    }

    return (
        <Col xs={24} className="cart-component">
            {
                state.product &&
                <Row gutter={16} align="middle">

                    <Col>
                        <Checkbox checked={state.checked} onChange={handleCheckBox}></Checkbox>
                    </Col>
                    <Col>
                        <img src={state.product.image} style={{ width: '75px', height: "75px" }} />
                    </Col>

                    <Col>
                        <Row gutter={79}>
                            <Col>
                                <Row gutter={[0, 4]}>
                                    <Col xs={24}>
                                        <Typography.Title level={4}>{state.product.name}</Typography.Title>
                                    </Col>
                                    <Col xs={24}>
                                        <Typography.Text style={{ fontSize: '14px', color: '#85858A' }}>Color: {state.product.color}</Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Typography.Title level={4}>${state.product.price}</Typography.Title>
                            </Col>
                            <Col>
                                <Row gutter={16}>
                                    <Col>
                                        <Button onClick={() => handleChangeAmount("decrease", props.item.productId)}>-</Button>
                                    </Col>
                                    <Col>
                                        <Typography.Text>{state.amount}</Typography.Text>
                                    </Col>
                                    <Col>
                                        <Button onClick={() => handleChangeAmount("increase", props.item.productId)}>+</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Typography.Title level={4}>${state.product.price * state.amount}</Typography.Title>
                            </Col>
                            <Col>
                                <Button type='text' icon={<DeleteOutlined style={{ color: '#F5222D' }} />} onClick={handleDelete}></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }

        </Col>
    )
}

interface Props {
    item: OrderProduct
}

interface State {
    isDeleted: boolean;
    amount: number;
    checked: boolean;
    product: Product | null
}