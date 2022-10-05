import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Functional from "./pages/Functional";

// global styles
import './assets/styles/normalize.css'
import './assets/styles/flex-box.css'
import './assets/styles/global.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* header */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/functional' element={<Functional />} />
        </Routes>
        {/* footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
