import { Col, Row } from 'antd'
import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import ProductListing from './components/product-listing'
import SideBar from './components/side-bar'
import './index.css'

export default function AppleWatch() {
  return (
    <Row className='apple-watch'>
      <Col xs={24}>
        <Header></Header>
      </Col>
      <Col xs={24} className='apple-watch-container'>
        <Row gutter={16}>
            <Col xs={5}>
              <SideBar/>
            </Col>
            <Col xs={19}>
              <ProductListing/>
            </Col>
        </Row>
      </Col>
      <Col xs={24}>
        <Footer></Footer>
      </Col>
    </Row>
  )
}
