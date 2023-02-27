import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  skills,
  projects,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h2 className="color_sec py-4">{dataabout.title}</h2>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <h5>{dataabout.aboutme}</h5>
            </div>
          </Col>
        </Row>
      
        <Row className="sec_sp">
          <Col lg="5">
            <h2 className="color_sec py-4">Skills</h2>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                       width:"500px"
                      }}
                    >
                      <div className="progress-value">{data.value}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h2 className="color_sec py-4">Projects</h2>
          </Col>
          <Col lg="7">
            {projects.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                  <p className="service_desc">{data.reactdes}</p>
                  <p className="service_desc">{data.reactdes2}</p>
                  <p className="service_desc">{data.reactdes3}</p>
                </div>
                
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
