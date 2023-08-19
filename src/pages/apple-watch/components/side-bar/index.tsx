import { Col, Input, Row, Typography } from 'antd'
import React from 'react'
import './index.css'
export default function SideBar() {
  return (
    <Row gutter={[0, 24]} className='side-bar'>
      <Col xs={24} className='side-bar-component'>
        <Row gutter={[0, 24]}>
          <Col xs={24}>
            <Typography.Title level={4}>Filter</Typography.Title>
          </Col>

          <Col xs={24}>
            <Row gutter={[0, 16]}>
              <Col xs={24}>
                <Typography.Title level={4}>Search</Typography.Title>
              </Col>
              <Col xs={24}>
                <Input size='large' placeholder='Search product' className='search-input'></Input>
              </Col>
              <Col xs={24}></Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={24} className='side-bar-component'>
        <Row gutter={[0, 24]}>
          <Col xs={24}>
            <Typography.Title level={4}>Price ($)</Typography.Title>
          </Col>

          <Col xs={24}>
            <Row gutter={16}>
              <Col xs={12}>
                <Row gutter={8}>
                  <Col>
                    <Typography.Text style={{fontWeight:"400"}}>From</Typography.Text>
                  </Col>
                  <Col>
                    <Input placeholder='$'></Input>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row gutter={8}>
                  <Col>
                    <Typography.Text style={{fontWeight:"400"}}>To</Typography.Text>
                  </Col>
                  <Col>
                    <Input placeholder='$'></Input>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={24} className='side-bar-component'></Col>
      <Col xs={24}>

      </Col>
    </Row>
  )
}
