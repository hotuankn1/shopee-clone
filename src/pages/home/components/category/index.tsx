import { Button, Col, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { categoryController } from '../../../../controllers/categoryController'
import { fakeProductItems } from '../../../../controllers/productControllerFakeData'
import { productLineController } from '../../../../controllers/productLineController'
import { Category } from '../../../../types/Category'
import { ProductLine } from '../../../../types/ProductLine'
import './index.css'


export default function CategoryComponent() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesData = categoryController.list()
            setCategories(categoriesData);
        };

        fetchCategories();
    }, []);


    return (
        <Col xs={24} className='category'>
            <Row gutter={[0, 32]}>
                {
                    categories.map((item) => (
                        <Col xs={24}>
                            <Row gutter={[0, 32]}>
                                <Col xs={24}>
                                    <Typography.Title level={2} className='category-title'>{item.name} </Typography.Title>
                                </Col>

                                <Col xs={24}>
                                    <Row gutter={32}>
                                        {
                                            productLineController.list(1,4,item.id).items.map(productLine => (
                                                <Col xs={12} className='product'>
                                                    <Row gutter={10} >
                                                        <Col xs={12}>
                                                            <img src={productLine.products[0].image} />
                                                        </Col>
                                                        <Col xs={12}>
                                                            <Row align='stretch'>
                                                                <Col xs={24}>
                                                                    <Typography.Text>{productLine.products[0].name}</Typography.Text>
                                                                </Col>
                                                                <Col xs={24}>
                                                                    <Typography.Text>Colors: </Typography.Text>
                                                                </Col>
                                                                <Col xs={24}>
                                                                    <Typography.Text>{productLine.products[0].inventoryAmount}</Typography.Text>
                                                                </Col>
                                                                <Col xs={24}>
                                                                    <Typography.Text>{productLine.products[0].price}</Typography.Text>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </Col>

                                <Col xs={24}>
                                    <Row className='category-button-container' gutter={32} justify={'space-between'}>
                                        <Col className='line-left'></Col>
                                        <Col>
                                            <Button className='category-button'>See more</Button>
                                        </Col>
                                        <Col className='line-right'></Col>
                                    </Row>
                                </Col>

                            </Row>
                        </Col>
                    ))
                }
            </Row>
        </Col>
    )

}





