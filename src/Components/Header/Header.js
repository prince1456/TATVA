import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Mainlogo from "../../Assets/Images/mainlogo.png";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import "./Header.scss";

function Header() {
   const history = useHistory();
   return (
      <div className="header_wrap">
         <div className="top_header">
            <Container>
               <ul className="contact_list">
                  <li>
                     <a href="mailto:hello@tatvayoga.sg">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>hello@tatvayoga.sg</span>
                     </a>
                  </li>
                  <li>
                     <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>
                           247A / 247B Victoria Street, Bugis Village, Singapore
                           188033
                        </span>
                     </p>
                  </li>
                  <li>
                     <a href="tel:+1-555-555-1212">
                        <FontAwesomeIcon
                           className="rotate_icon"
                           icon={faPhone}
                        />
                        <span>(65) 6221 9663</span>
                     </a>
                  </li>
               </ul>
            </Container>
         </div>
         <div className="main_header">
            <Navbar bg="light" expand="lg">
               <Container>
                  <Navbar.Brand onClick={() => history.push("/")}>
                     <img src={Mainlogo} alt="mainlogo" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav>
                        <Nav.Link href="#timetable">Timetable</Nav.Link>
                        <Nav.Link href="#packages">Packages</Nav.Link>
                        <Nav.Link href="#teachertraining">
                           Teacher Training
                        </Nav.Link>
                        <Nav.Link href="/liveclasses" className="live_classes">
                           <span></span>Live Classes
                        </Nav.Link>
                        <Nav.Link className="btn btn-primary">
                           <Login />
                        </Nav.Link>
                        <Nav.Link className="btn btn-primary">
                           <Register />
                        </Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
      </div>
   );
}

export default Header;
