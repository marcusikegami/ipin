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
        <Header />
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/partnerships" element={<Partnerships />} />
      </Routes>
        {/* <Construction /> */}
    </BrowserRouter>
  );
}

export default App;
