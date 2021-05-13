import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import {App} from '../containers';

  export const RouterModule = () => {
      return (
          <Router>
              <Switch>
                <Route path="/" component={App} />
              </Switch>
          </Router>
      )
  }