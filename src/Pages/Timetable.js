import React, { useEffect, useState } from "react";
import loadMBody from "./loadMBody";

function Timetable(props) {
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
            data-type="schedules" 
            data-widget-partner="object" 
            data-widget-id="0d137512de06" 
            data-widget-version="1" 
            />
         )}
      </div>
   );
}

export default Timetable;
