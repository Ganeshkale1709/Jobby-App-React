import { Route , Routes } from "react-router-dom";

import Login from "./components/login";
import Home from "./components/home";
import Jobs from "./components/jobs";
import NotFound from "./components/notFound";





const App = () => {
 return(
  
  <>
    <Routes>
      
      <Route path="/" element = { <Home/> }> </Route>
      
      <Route path="/login" element = { <Login/> }> </Route>
      
      <Route path="/jobs" element = { <Jobs/> }> </Route>

      <Route path="/*" element = { <NotFound/> }> </Route>
      
      
    </Routes>

  </>

 )
}

export default App;
