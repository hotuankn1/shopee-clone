import { Badge, Button, Col, Input, Row, Tooltip, Typography } from 'antd'
import React, { useContext } from 'react'
import './index.css'
import { SearchOutlined, ShoppingCartOutlined, HddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../../hooks/useCart';


const menuItems = [
    {
        label: "HOME",
        value: '/home',
        className: 'home-menu-item'
    },

    {
        label: 'FASHION STYLE',
        value: '/',
        className: 'fashion-style-menu-item'
    },
    {
        label: 'APPLE WATCH',
        value: '/apple-watch',
        className: 'apple-watch-menu-item'
    },
    {
        label: 'IPHONE',
        value: '/',
        className: 'iphone-menu-item'
    },
]
export default function Header() {
    const { cartItems } = useContext(CartContext)
    return (
        <Row className='header'>
            <Col xs={24} className='header-upper'>
                <Row>
                    <Col><Typography.Text className='header-text'>Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</Typography.Text></Col>
                    <Col>

                    </Col>
                </Row>
            </Col>
            <Col xs={24} className='header-lower'>
                <Row justify={'space-between'}>
                    <Col>
                        <img src="/images/components/header/logoHeader.svg" />
                    </Col>

                    <Col>
                        <Row align={'middle'} gutter={40} className='header-menu'>
                            {
                                menuItems.map(menu => (
                                    <Link key={menu.className} to={menu.value}>
                                        <Col>
                                            <Typography.Title level={4} className={menu.className}>{menu.label}</Typography.Title>
                                        </Col>
                                    </Link>
                                ))
                            }
                        </Row>
                    </Col>

                    <Col>
                        <Row gutter={12}>
                            <Col>
                                <Input
                                    className='header-right'
                                    prefix={<SearchOutlined />}
                                    placeholder="Search anything here"
                                />
                            </Col>
                            <Col>
                                <Tooltip className='button-icon' title="cart">
                                    <Link to='/cart'>

                                        <Button size='large' className='header-right' icon={
                                            <Badge count={cartItems.orderProducts.length}>
                                                <ShoppingCartOutlined className='header-icon' />
                                            </Badge>
                                        } />
                                    </Link>
                                </Tooltip>
                            </Col>
                            <Col>
                                <Tooltip className='button-icon' title="order">
                                    <Link to='/history'>
                                        <Button size='large' className='header-right' icon={
                                            <HddOutlined className='header-icon' />
                                        } />
                                    </Link>
                                </Tooltip>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
