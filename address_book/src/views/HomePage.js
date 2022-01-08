import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ReactSearchbar from "../components/SearchComponent/ReactSearchbar";
import Link from "../routing/Link";

const HomePage = ({ onNameSubmit }) => {
  return (
    <div>
      <Container>
        <Row className="my-5">
          <Col className="my-5 d-flex align-items-center justify-content-center">
            <h1 className="text-align-center">पता पुस्तिका वेबसाइट</h1>
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="w-100 d-flex align-items-center justify-content-center mx-lg-5 px-lg-5">
            <ReactSearchbar />
          </Col>
        </Row>
        <Row>
          <Col className="w-100 text-primary  d-flex align-items-center justify-content-center">
            <Link href="/" className="text-decoration-none">
              इसके बजाय मोबाइल नंबर का प्रयोग करें
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
