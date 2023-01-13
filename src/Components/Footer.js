import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light py-3">
            <Container>
                <Row>
                    <Col>
                        <p className="text-center">Copyright &copy; Your Company</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;