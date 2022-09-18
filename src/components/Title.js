import React from 'react';
import { Col, Row } from 'reactstrap';

export default function Title({text}) {
 return (
   <>
     <Row>
          <Col className="text-center mt-4">
            <h1>{text}</h1>
          </Col>
    </Row>
   </>
 );
}