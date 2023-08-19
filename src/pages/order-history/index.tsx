import { Col, Row } from 'antd'
import React, { useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { IPagination } from '../../types/IPagination'
import { Order } from '../../types/Order'

export default function OrderHistory() {
  const [pagination, setPagination] = useState<IPagination<Order>>()

  return (
    <Row>
      <Col xs={24}>
        <Header/>
      </Col>
      <Col xs={24}>
        
      </Col>
      <Col xs={24}>
        <Footer/>
      </Col>
    </Row>
  )
}
