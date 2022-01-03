import logo from './logo.svg';
import './App.css';
import Home from './Nahim_components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Photography_packages from './Nahim_components/Photography_packages/Photography_packages';
import Appbar from './Nahim_components/Appbar/Appbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Photography_packages />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
