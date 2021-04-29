import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <div className="hide">{document.title = "Google Books Search"}</div>
      <Router>
        <Navbar />
        <Header />
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
