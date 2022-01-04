
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './componentsEmon/authentications/Login';
import Register from './componentsEmon/authentications/Register';
import Appbar from './Nahim_components/Appbar/Appbar';
import Galleries from './Nahim_components/Galleries/Galleries';
import Home from './Nahim_components/Home/Home';
import PhotographyPackages from './Nahim_components/Photography_packages/PhotographyPackages';
import SuperSaverConfirmation from './Nahim_components/SuperSaverConfirmation/SuperSaverConfirmation';




function App() {

  return (

    <div className="App">

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<PhotographyPackages />} />
          <Route path="/superSaver/:key" element={<SuperSaverConfirmation />} />
          <Route path="/gallery" element={<Galleries />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <ul className="d-flex justify-content-center pt-3">
          <li className="px-2"><Link to="/login"> Login</Link></li>
          <li  className="px-2"><Link to="/register"> Register</Link></li>
        </ul> */}

        </Routes>
      </BrowserRouter>
  
    </div>

  );
}
export default App;
