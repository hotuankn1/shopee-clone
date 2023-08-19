import { Button, Col, Row, Typography } from 'antd'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { orderController } from '../../controllers/orderController'
import { CartContext } from '../../hooks/useCart'
import { OrderContext } from '../../hooks/useOrder'
import CartComponent from './components/CartComponent'
import './index.css'
export default function Cart() {
    const { addOrderHistory, listPendingOrder} = useContext(OrderContext)
    const {cartItems} = useContext(CartContext)

    const pendingOrder = listPendingOrder()
    const caculatorTotalAmount = () => {
        const pendingProducts = pendingOrder.orderProducts
        let totalAmount = 0
        for (var i = 0; i < pendingProducts.length; i++) {
            let product = orderController.find(pendingProducts[i].productId)
            if (product) {
                const totalProductPrice = product.price * pendingProducts[i].amount
                totalAmount += totalProductPrice
            }
        }
        return totalAmount
    }

    const handlePay = () => {
        addOrderHistory()
    }
    return (
        <Row>
            <Col xs={24}>
                <Header />
            </Col>
            <Col xs={24} className="cart-container">
                <Row gutter={[0, 32]}>
                    <Col xs={24} className="cart-header">
                        <Row justify={'space-between'}>
                            <Col>
                                <Typography.Title level={3}>My Cart</Typography.Title>
                            </Col>
                            <Col>
                                <Typography.Text style={{ color: '#FA541C' }}>08 Product</Typography.Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24}>
                        <Row gutter={32} justify="space-between" style={{ flexWrap: 'nowrap' }}>
                            <Col xs={16}>
                                <Row gutter={[0, 16]}>
                                    {
                                        cartItems.orderProducts && cartItems.orderProducts.map(item => (
                                            <CartComponent
                                                key={item.productId}
                                                item={item}
                                            />
                                        ))
                                    }
                                </Row>
                            </Col>
                            <Col xs={8} className='order-information'>
                                <Row gutter={[0, 16]}>
                                    <Col xs={24}>
                                        <Row gutter={[0, 16]}>
                                            <Col xs={24}>
                                                <Typography.Title level={3} className='order-title'>Order Information</Typography.Title>
                                            </Col>
                                            <Col xs={24}>
                                                <Row >
                                                    <Col xs={24}>
                                                        <Row justify={'space-between'}>
                                                            <Col >
                                                                <Typography.Text>Total Amount:</Typography.Text>
                                                            </Col>
                                                            <Col >
                                                                <Typography.Text>{caculatorTotalAmount()}</Typography.Text>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={24}>
                                                        <Row justify={'space-between'}>
                                                            <Col >
                                                                <Typography.Text>Discount:</Typography.Text>
                                                            </Col>
                                                            <Col >
                                                                <Typography.Text>0</Typography.Text>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={24}>
                                                        <Row justify={'space-between'}>
                                                            <Col >
                                                                <Typography.Text>Total:</Typography.Text>
                                                            </Col>
                                                            <Col >
                                                                <Typography.Text>{caculatorTotalAmount()}</Typography.Text>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={24}>

                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={24}>
                                        <Row style={{ width: '100%' }}>
                                            {
                                                pendingOrder.orderProducts.length &&
                                                <Link to={`/order/${pendingOrder.id}`}>
                                                    <Button style={{ width: '100%' }} type='primary' size='large' onClick={handlePay}>Paynow</Button>
                                                </Link>
                                            }

                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xs={24}>
                <Footer />
            </Col>
        </Row>
    )
}
