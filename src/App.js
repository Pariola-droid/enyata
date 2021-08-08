import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Regnify from "./pages/home/index";
import Showcase from "./pages/showcase/index";


function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={Regnify} />
        <Route path="/showcase" exact component={Showcase} />

      </Switch>
    </Router>
  );
}

export default App;
