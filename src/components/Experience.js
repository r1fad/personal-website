import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/experience.css';

class Experience extends Component{
  render(){
    return(
      <ScrollableAnchor id={"section-experience"}>
        <div className="experience">

          <Row>
            <Col>
              <h2 className="headingE">Experience</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="exp-details">
                <div className="exp">
                  <h3>Computer Science Society(CSSoc)</h3>
                  <h4>President</h4>
                  <h6>May 2017 - PRESENT</h6>
                  <p>
                    In charge of chairing society meetings and
                    organizing social and educational events with
                    the help of other members for students in the
                    Computer Science department at the University
                    of Manchester.
                  </p>
                </div>

                <div className="exp">
                  <h3>School of Computer Science,
                  The University of Manchester</h3>
                <h5>Peer Assisted Study Sessions (PASS) Leader</h5>
                  <h6>September 2017 - PRESENT</h6>
                  <p>
                    Menotring a group of 14 First Year CS students.
                  </p>
                </div>

                <div className="exp">
                  <h3>School of Computer Science,
                  The University of Manchester</h3>
                  <h5>First Year Student Representative</h5>
                  <h6>October 2016 - May 2017</h6>
                  <p>
                    Served as a liaison between the student
                    community at The University of Manchester’s
                    CS School and the staff members.
                  </p>
                </div>
              </div>
            </Col>
          </Row>



        </div>
      </ScrollableAnchor>
    )
  }
}

export default Experience;
