import React, { useEffect, useState } from "react";
import loadMBody from "./loadMBody";

function Getcontact() {
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
          data-type="prospects" 
          data-widget-partner="object" 
          data-widget-id="0d39655de06" 
          data-widget-version="0"
          />
         )}
      </div>
   );
}

export default Getcontact;
