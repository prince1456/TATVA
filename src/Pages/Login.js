import React, { useEffect, useState } from "react";
import loadMBody from "./loadMBody";

function Login(props) {
   const [mindBody, setMindBody] = useState(false);

   useEffect(() => {
      loadMBody(() => {
         setMindBody(true);
      });
   }, []);

   return (
      <div>
         {mindBody && (
            <healcode-widget
               data-version="0.2"
               data-link-class="loginRegister"
               data-site-id="60038"
               data-mb-site-id="15934"
               data-bw-identity-site="false"
               data-type="account-link"
               data-inner-html="Login"
            />
         )}
      </div>
   );
}

export default Login;
