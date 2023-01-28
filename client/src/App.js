import Construction from "./pages/Construction";
import Header from "./components/Header";
import Events from "./pages/Events";
import About from "./pages/About";
import Partnerships from "./pages/Partnerships";

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/events" component={Events} />
        <Route path="/about" component={About} />
        <Route path="/partnerships" component={Partnerships} />
      </Routes>
        {/* <Header /> */}
        <Construction />
    </BrowserRouter>
  );
}

export default App;
