import Header from "./pages/Header";
import Events from "./pages/Events";
import About from "./pages/About";
import Partnerships from "./pages/Partnerships";

import { Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/events" component={Events} />
        <Route path="/about" component={About} />
        <Route path="/partnerships" component={Partnerships} />
      </Router>
        <Header />
    </div>
  );
}

export default App;
