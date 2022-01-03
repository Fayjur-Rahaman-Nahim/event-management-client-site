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
import SuperSaverConfirmation from './Nahim_components/SuperSaverConfirmation/SuperSaverConfirmation';
import Galleries from './Nahim_components/Galleries/Galleries';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Photography_packages />} />
          <Route path="/superSaver/:key" element={<SuperSaverConfirmation />} />
          <Route path="/gallery" element={<Galleries />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
