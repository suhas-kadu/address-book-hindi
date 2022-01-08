import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const InsertedRecord = () => {
  return (
    <>
      <Container>
        <Row className="my-5 ">
          <Col></Col>
          <Col lg={4} md={12} sm={1}>
            <Card className="shadow p-3 mb-5 bg-body rounded">
              <Card.Body>
                <Card.Title className="fs-1 lh-base">
                  आपकी जानकारी हमारे डेटाबेस में दर्ज की गई है
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default InsertedRecord;
