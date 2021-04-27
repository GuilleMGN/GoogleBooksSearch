import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact path={["/", "/search"]}>
            <SearchBooks />
          </Route>
          <Route exact path="/saved">
            <SavedBooks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
