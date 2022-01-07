import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Contactusmainsec.scss";

function Contactusmainsec() {
   const history = useHistory();
   return (
      <div className="contactusmainsec_wrap">
         <Container>
            <div className="contactus_path">
               <p>
                  <a onClick={() => history.push("/")}>Home</a> //{" "}
                  <a onClick={() => history.push("/contactus")}>Contact Us</a>
               </p>
            </div>
         </Container>
      </div>
   );
}

export default Contactusmainsec;
