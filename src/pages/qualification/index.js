import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataeducation,
  meta,
  experince
} from "../../content_option";

export const Qualification = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Qualification | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Qualification</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h2 className="color_sec py-4">{dataeducation.title}</h2>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <h5>{dataeducation.aboutme}</h5>
              <p>{dataeducation.aboutuni}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h2 className="color_sec py-4">{experince.title}</h2>
            <h6 className="color_sec py-4">{experince.company}</h6>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <h5>{experince.exp1}</h5>
              <p>{experince.expdur}</p>
              <h5>{experince.exp3}</h5>
              <p>{experince.expdur4}</p>
            </div>
          </Col>
        </Row>




      </Container>
    </HelmetProvider>
  );
};
