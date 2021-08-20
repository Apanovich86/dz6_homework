import Users from "./components/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Posts from "./components/Posts";

function App() {
  return (
      <Router>
          <div>
              <Link to={'/users'}>users page</Link>
              <br/>
              <Link to={'/posts'}>posts page</Link>
              <div>
                  <Route path={'/users'} component={Users}/>
                  <Route path={'/posts'} component={Posts}/>
              </div>
          </div>
      </Router>
  );
}

export default App;
