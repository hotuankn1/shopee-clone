import { Col, Row, Typography } from 'antd'
import React from 'react'
import './index.css'


const footerItems = [
  {
    name: "MORE INFO",
    items: [
      "Shipping & Delivery",
      "Refund Policy",
      "Partner Program",
      "You Buy, We Donate",
      "Privacy Policy",
      "Terms & Conditions"
    ]
  },
  {
    name: "CONTACT US",
    items: [
      "Phone: +44123456789",
      "Address: 3517 W. Gray St. Utica, Pennsylvania 57867",
      "Email: good4me@gmail.com"
    ]
  },
  {
    name: "NAVIGATION",
    items: [
      "Home",
      "Iphone",
      "Apple watch",
      "Fashion style"
    ]
  },
]
export default function Footer() {
  return (
    <Row className="footer" >
      <Col xs={24}>
        <Row className='footer-upper' gutter={40}>
          <Col>
            <Row gutter={[0, 16]} align='top'>
              <Col xs={24}>
                <img src="/images/components/footer/logoFooter.svg" />
              </Col>
              <Col xs={24} className= "footer-text-container">
                <Typography.Text className="footer-text">Good health is important, so all of our products have been carefully designed to bring out the best in you.</Typography.Text>
              </Col>
            </Row>
          </Col>

          {
            footerItems.map(footerItem => (
              <Col key={footerItem.name}>
                <Row gutter={[0, 16]}>
                  <Col xs={24}>
                    <Typography.Title level={3} className="footer-title">{footerItem.name}</Typography.Title>
                  </Col>
                  <Col xs={24}>
                    <Row gutter={[0, 8]}>
                      {footerItem.items.map(item => (
                        <Col xs={24} key={item}>
                          <Typography.Text className="footer-text">{item}</Typography.Text>
                        </Col>
                      ))}
                    </Row>

                  </Col>
                </Row>
              </Col>
            ))
          }
        </Row>
      </Col>

      <Col xs={24}>
        <Row className='footer-lower' justify={'space-between'}>
          <Col> 
            <img src="/images/components/footer/social.svg"/>
          </Col>
          <Col>
            <img src="/images/components/footer/info.svg"/>
          </Col>
          <Col>
          <img src="/images/components/footer/payment.svg"/>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
