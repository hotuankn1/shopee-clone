import { Col, Row, Typography, Button } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { ProductLine } from '../../../../types/ProductLine'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Product } from '../../../../types/Product';
import { orderController } from '../../../../controllers/orderController';
import { productLineController } from '../../../../controllers/productLineController';
import { CartContext } from '../../../../hooks/useCart';


export default function ProductComponent(props: Props) {
    const {addCartItems} = useContext(CartContext)
    const [colorSelected, setColorSelected] = useState<string>("white")
    const [colorAmount, setColorAmount] = useState<number>(productLineController.amount("white", props.item));

    const addToCart = () => {
        addCartItems(colorSelected, props.item)
    };

    const colorSelect = (color: string) => {
        setColorSelected(color);
        console.log(color);
        updateColorAmounts(color)
    };

    const updateColorAmounts = (color: string) => {
        const amount = productLineController.amount(color, props.item);
        setColorAmount(amount);
    };

    return (
        <Col xs={12} className='product' >
            <Row gutter={10} style={{ flexWrap: 'nowrap' }}>
                <Col>
                    <img src={props.item.products[0].image} />
                </Col>
                <Col >
                    <Row align="stretch" justify={'space-between'}>
                        <Col xs={24}>
                            <Typography.Title level={4}>{props.item.products[0].name}</Typography.Title>
                        </Col>
                        <Col xs={24}>
                            <Row gutter={17}>
                                <Col><Typography.Text>Colors:</Typography.Text></Col>
                                <Col>
                                    <Row className="color-options">
                                        <Col className= {`color ${colorSelected === 'white' ? 'selected' : ''}`} id='white' onClick={() => colorSelect('white')}></Col>
                                        <Col className={`color ${colorSelected === 'green' ? 'selected' : ''}`} id='green' onClick={() => colorSelect('green')}></Col>
                                        <Col className={`color ${colorSelected === 'black' ? 'selected' : ''}`} id='black' onClick={() => colorSelect('black')}></Col>
                                        <Col className={`color ${colorSelected === 'red' ? 'selected' : ''}`} id='red' onClick={() => colorSelect('red')}></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row>
                                <Col><Typography.Text>Status:</Typography.Text></Col>
                                <Col><Typography.Text>{colorAmount}</Typography.Text></Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row justify={'space-between'}>
                                <Col><Typography.Title level={4}></Typography.Title>{props.item.products[0].price}$</Col>
                                <Col>
                                    <Button type='primary' icon={<ShoppingCartOutlined />} onClick={addToCart}></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

interface Props {
    item: ProductLine,
}

