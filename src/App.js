import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// global styles
import './assets/styles/normalize.css'
import './assets/styles/flex-box.css'
import './assets/styles/global.css'
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* header */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        {/* footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
