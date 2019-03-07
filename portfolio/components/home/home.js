import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile';
import Experience from '../experience/experience'
import company_avatar from '../../images/company.png';
import company_avatar2 from '../../images/company2.png';

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
        <Experience 
          title="WordPress Developer"
          company="Soundcloud"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
          avatar={company_avatar}
        />
        <Experience title="React Developer"
          company="Twitter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
          avatar={company_avatar2}                    
        />
    </Col>
  </Row>
);

export default Home;