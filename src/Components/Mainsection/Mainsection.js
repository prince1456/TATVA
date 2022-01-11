import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Mainsection.scss";

function Mainsection() {
   const history = useHistory();
   return (
      <div className="main_section">
         <Container>
            <div className="contentwrap">
               <div className="content_left">
                  <h1>
                     Talking Yoga Beyond The Limit Reach Your New Potential
                  </h1>
                  <p>
                     Yoga is actually an excerise of body and mind. The benefits
                     of yoga not only help the body become fresher and filter,
                     but also can control.
                  </p>
                  <div className="btn_wrapper">
                     <Button variant="primary" onClick={() => history.push("timetable")}>See More</Button>
                     <Button
                        variant="outline-light"
                        onClick={() => history.push("contactus")}
                     >
                        Contact Us
                     </Button>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Mainsection;
