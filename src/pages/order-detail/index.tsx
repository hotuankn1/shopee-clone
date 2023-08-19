import { Col, Row, Typography } from 'antd'
import React, { useContext } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { OrderContext } from '../../hooks/useOrder'
import { useParams } from 'react-router-dom';
import './index.css'

export default function OrderDetail() {
  const { id } = useParams()

  console.log(id);
  
  const { findOrder, caculateTotalAmount } = useContext(OrderContext)
  const order = findOrder(id || "")


  return (
    <Row justify="center" align={'middle'}>
      <Col xs={24}>
        <Header />
      </Col>
      {
        order &&
        <Col xs={24} className='order-detail-container' >
          <Row justify={'center'} align="middle" style={{ height: "100%" }}>
            <Row className='order-detail' style={{ height: "100%" }} gutter={[0, 16]} justify="center" align={'middle'}>
              <Col xs={24}>
                <Row gutter={[0, 8]}>
                  <Col xs={24}>
                    <Row gutter={[0, 16]}>
                      <Col xs={24}>
                        <Row justify={'center'}>
                          <img src="/images/pages/order/order.svg" style={{ width: "40px", height: "40px" }} />
                        </Row>
                      </Col>
                      <Col xs={24}>
                        <Row justify={'center'}>
                          <Typography.Title level={2} style={{ color: "#FA541C" }}>Your payment is successfully</Typography.Title>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24}>
                    <Row justify={'center'}>
                      <Typography.Text >Thank you for choosing us</Typography.Text>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col xs={24}>
                <Row className="payment-details" gutter={[0, 16]}>
                  <Col xs={24}>
                    <Typography.Title className="payment-details-title" level={4}>Payment details</Typography.Title>
                  </Col>
                  <Col xs={24}>
                    <Row>
                      <Col xs={12}>
                        <Typography.Text >Order no:</Typography.Text>
                      </Col>
                      <Col xs={12}>
                        <Typography.Text>{order.id}</Typography.Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24}>
                    <Row>
                      <Col xs={12}>
                        <Typography.Text >Order Date:</Typography.Text>
                      </Col>
                      <Col xs={12}>
                        <Typography.Text>{order.purchasedDate}</Typography.Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24}>
                    <Row>
                      <Col xs={12}>
                        <Typography.Text >Total:</Typography.Text>
                      </Col>
                      <Col xs={12}>
                        <Typography.Text>{caculateTotalAmount(order.id)}</Typography.Text>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      }

      <Col xs={24}><Footer /></Col>
    </Row>
  )
}
