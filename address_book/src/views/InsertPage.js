import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Toast } from "react-bootstrap";
import Link from "../routing/Link";
import ReactFormGroup from "../components/FormGroup/ReactFormGroup";

const InsertPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [residentialPincode, setResidentialPincode] = useState("");
  const [residentialCity, setResidentialCity] = useState("");
  const [residentialState, setResidentialState] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [permanentPincode, setPermanentPincode] = useState("");
  const [permanentCity, setPermanentCity] = useState("");
  const [permanentState, setPermanentState] = useState("");

  const [next, setNext] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setFirstName(event.target[0].value);
    setLastName(event.target[1].value);
    console.log(firstName, lastName, emailId);
    console.log(
      residentialAddress,
      residentialPincode,
      residentialCity,
      residentialState
    );
    console.log(
      permanentAddress,
      permanentPincode,
      permanentCity,
      permanentState
    );
    setNext(true);
  };

  return (
    <>
      <Container fluid="lg" className=" p-lg-5 p-md-5 py-5 ">
        <h2 className="text-center mb-5">कृपया नीचे दी गई जानकारी भरें</h2>

        <Form className=" mx-lg-5 px-xs-1" onSubmit={onFormSubmit}>
          <Row>
            <Col sm={12} lg={4} md={4}>
              {" "}
              <ReactFormGroup
                formLabel="पहला नाम"
                type="text"
                inputPlaceHolder="अपना पहला नाम दर्ज करें"
                onSubmit={setFirstName}
              />
            </Col>
            <Col sm={12} lg={4} md={4}>
              <ReactFormGroup
                formLabel="अंतिम नाम"
                type="text"
                inputPlaceHolder="अपना अंतिम नाम दर्ज करें"
                onSubmit={setLastName}
              />
            </Col>
            <Col sm={12} lg={4} md={4}>
              <ReactFormGroup
                formLabel="ईमेल आईडी"
                type="email"
                inputPlaceHolder="ईमेल दर्ज करें"
                onSubmit={setEmailId}
              />
            </Col>
          </Row>
          <ReactFormGroup
            formLabel="घर का पता"
            type="text"
            inputPlaceHolder="अपना अंतिम नाम दर्ज करें"
            onSubmit={setResidentialAddress}
          />
          <Row className="mb-3">
            <Col sm={12} lg={4} md={4}>
              <ReactFormGroup
                formLabel="पिन कोड"
                type="number"
                inputPlaceHolder="अपना पिनकोड/ज़िपकोड दर्ज करें"
                onSubmit={setResidentialPincode}
              />
            </Col>
            <Col sm={12} lg={4} md={4}>
              <ReactFormGroup
                formLabel="शहर"
                type="text"
                inputPlaceHolder="शहर"
                onSubmit={setResidentialCity}
              />
            </Col>
            <Col sm={12} lg={4} md={4}>
              <ReactFormGroup
                formLabel="राज्य"
                type="text"
                inputPlaceHolder="राज्य"
                onSubmit={setResidentialState}
              />
            </Col>
          </Row>
          <ReactFormGroup
            formLabel="स्थायी पता"
            type="text"
            inputPlaceHolder="अपना स्थायी पता दर्ज करें"
            onSubmit={setPermanentAddress}
          />
          <Row className="mb-3">
            <Col sm={12} lg={4} md={4}>
              <ReactFormGroup
                formLabel="पिन कोड"
                type="number"
                inputPlaceHolder="अपना पिनकोड/ज़िपकोड दर्ज करें"
                onSubmit={setPermanentPincode}
              />
            </Col>
            <Col sm={12} lg={4} md={4}>
              <ReactFormGroup
                formLabel="शहर"
                type="text"
                inputPlaceHolder="शहर"
                onSubmit={setPermanentCity}
              />
            </Col>
            <Col sm={12} lg={4} md={4}>
              <ReactFormGroup
                formLabel="राज्य"
                type="text"
                inputPlaceHolder="राज्य"
                onSubmit={setPermanentState}
              />
            </Col>
          </Row>
          <Button variant="primary" type="submit" onClick={() => setNext(true)}>
            <Link
              className="text-white text-decoration-none"
              href={next ? `/insertedrecord` : ``}
            >
              सबमिट करें
            </Link>
          </Button>
          <Toast className="my-3" show={next}>
            <Toast.Body>कृपया नीचे सभी फ़ील्ड भरें</Toast.Body>
          </Toast>
        </Form>
      </Container>
    </>
  );
};

export default InsertPage;
