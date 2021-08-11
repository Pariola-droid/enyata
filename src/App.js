import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Regnify from "./pages/home/index";
import Showcase from "./pages/showcase/index";
import About from "./pages/about/index";
import Contact from "./pages/contact/index";


function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={Regnify} />
        <Route path="/showcase" exact component={Showcase} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />

      </Switch>
    </Router>
  );
}

export default App;
