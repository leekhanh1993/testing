import React, { Component } from 'react';
import { Col, Container, Row, Footer, Fa } from "mdbreact";
import "./FooterPage.css";
import logo from "../../images/logo-white.png"

class FooterPage extends Component {
    render() {
        return (
            <Footer color="black" className="footerpage font-small mt-4">
                <Container className="text-center text-md-left">
                    <Row>
                        <Col md="3">
                            <img src={logo} height="50" />
                        </Col>
                        <Col md="2">
                            <h5 className="title">Learn More</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Promo codes</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">License information</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Legal / Privacy</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md="2">
                            <h5 className="title">Company</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">About us</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Press</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Careers</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!"></a>
                                </li>
                            </ul>
                        </Col>
                        <Col md="2">
                            <h5 className="title">Support</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">0123456789</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Contact us</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">FAQ</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Site map</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md="3">
                            <Row>
                                <Col>
                                    <div className="iconsocial">
                                    <a href="#" ><span className="fa fa-facebook"/></a>
                                    <a href="#" className="fa fa-twitter"/>
                                    <a href="#" className="fa fa-instagram"/>
                                    <a href="#" className="fa fa-google-plus"/>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-4">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="https://www.pickframe.com"> PickFrame.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;