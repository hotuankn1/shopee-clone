import { Button, Col, Row, Typography } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react'
import './index.css'

export default function Introduce() {
    return (
        <Col xs={24} className="introduce">
            <Row justify={'space-between'}>
                <Col xs={12}>
                    <Row className='introduce-description' gutter={[0, 24]} >
                        <Col xs={24}>
                            <Typography.Title level={2} className="introduce-title">TRENDING PRODUCT</Typography.Title>
                        </Col>

                        <Col xs={24}>
                            <Typography.Text>We provide the best and highest-quality products on the market today</Typography.Text>
                        </Col>

                        <Col xs={24}>
                            <Typography.Title level={3}>Apple Watch Dragon</Typography.Title>
                        </Col>

                        <Col xs={24}>
                            <Button type='primary' icon={<ShoppingCartOutlined />}>Add to cart</Button>
                        </Col>
                    </Row>
                </Col>

                <Col className='introduce-image'>
                    <img src="/images/pages/home/components/introduce/introduce.svg" />
                </Col>
            </Row>
        </Col>
    )
}
