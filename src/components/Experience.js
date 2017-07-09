import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {Card, CardTitle, CardText, CardBlock,
        CardSubtitle, Col, CardFooter,Row} from 'reactstrap';
import '../styles/experience.css';

class Experience extends Component{
  render(){
    return(
      <ScrollableAnchor id={"section-experience"}>
        <div className="experience">
          <h2 className="headingE">Experience</h2>
          <Col sm="11" className="exp-cards">

            <Card>
              <CardBlock>
                <CardTitle>
                  Computer Science Society,
                  The University of Manchester
                </CardTitle>
                <CardSubtitle>Co-Chair</CardSubtitle>
                <CardText>
                  In charge of chairing society meetings and
                  organizing social and educational events with
                  the help of other members for students in the
                  Computer Science department at the University.
                </CardText>
              </CardBlock>
              <CardFooter>Since May, 2017</CardFooter>
            </Card>

            <Card>
              <CardBlock>
                <CardTitle>
                  School of Computer Science,
                  The University of Manchester
                </CardTitle>
                <CardSubtitle>
                  First Year Student Representative
                </CardSubtitle>
                <CardText>
                  Served as a liaison between the student
                  community at The University of Manchester’s
                  CS School and the staff members
                </CardText>
              </CardBlock>
              <CardFooter> October, 2016 - May, 2017 </CardFooter>
            </Card>

          </Col>
        </div>
      </ScrollableAnchor>
    )
  }
}

export default Experience;
