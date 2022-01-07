import React, { useEffect, useState } from "react";
import loadMBody from "./loadMBody";

function Liveclasses() {
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
               data-type="class_lists"
               data-widget-partner="object"
               data-widget-id="0d60401de06"
               data-widget-version="0"
            ></healcode-widget>
         )}
      </div>
   );
}

export default Liveclasses;
