import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import SignInPage from "./pages/signinpage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
