import { Button, Col, Pagination, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { productLineController } from '../../../../controllers/productLineController'
import { IPagination } from '../../../../types/IPagination'
import { ProductLine } from '../../../../types/ProductLine'
import './index.css'
import { Product } from '../../../../types/Product'
import ProductComponent from './ProductComponent'

export default function ProductListing() {
  const [pagination, setPagination] = useState<IPagination<ProductLine>>(productLineController.list(1, 12 , "" , "appleWatch"))

  const handlePagination = async (page:number) => {
    const newPagination = await productLineController.list (page , 12 , "" , "appleWatch")
    setPagination(newPagination);
  }
  return (
    <Row gutter={[0, 16]} className='product-listing'>
      <Col xs={24}>
        <Typography.Title level={3} className='apple-watch-title'>Apple Watch</Typography.Title>
      </Col>
      <Col xs={24}>
        <Row gutter={[16, 16]}>
          {
            pagination.items.map(item => (
             <ProductComponent 
             key={item.products[0].id}
             item={item}
             />
            ))
          }
        </Row>
      </Col>
      <Col xs={24} className='pagination-container'>
        <Row justify={'center'}>
          <Pagination defaultCurrent={1} total={pagination.totalPages * 10} onChange={handlePagination}/>
        </Row>
      </Col>
    </Row>
  )
}

