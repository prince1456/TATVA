import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.scss";
import Contactus from "./Pages/Contactus";
import Timetable from "./Pages/Timetable";
import Packages from "./Pages/Packages";
import TeacherTraining from "./Pages/TeacherTraining";
import Liveclasses from "./Pages/Liveclasses";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/contactus" exact component={Contactus} />
               <Route path="/timetable" exact component={Timetable} />
               <Route path="/packages" exact component={Packages} />
               <Route
                  path="/teachertraining"
                  exact
                  component={TeacherTraining}
               />
               <Route path="/liveclasses" exact component={Liveclasses} />
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
