import React from "react";
import { Row, Col, Card } from 'react-materialize';

const Experience = (props) => (
  <Card>
      <Row>
        <Col s={2} m={2}>
          <img src={props.avatar} className="circle responsive-img" />
          { props.name }
        </Col>

        <Col s={10} s={10}>
          <p><b>{props.title} em <span className="grey darken-2 white-text">{props.company}</span></b></p>
          <p>{props.description}</p>
        </Col>
      </Row>
  </Card>
);

export default Experience;