import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile';

const Home = () => (
  <Row>
    <Col m={4} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Objetivo</h5>
        <Card>
          <div>

          </div>
        </Card>
        <h5 className="subtitle">Experiência</h5>
    </Col>
  </Row>
);

export default Home;