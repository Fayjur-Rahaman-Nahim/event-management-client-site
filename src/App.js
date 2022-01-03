
import logo from './logo.svg';
import './App.css';
import Home from './Nahim_components/Home/Home';
import Appbar from './Nahim_components/Appbar/Appbar';
import SuperSaverConfirmation from './Nahim_components/SuperSaverConfirmation/SuperSaverConfirmation';
import Galleries from './Nahim_components/Galleries/Galleries';


import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './componentsEmon/authentications/Login';
import Register from './componentsEmon/authentications/Register';
import PhotographyPackages from './Nahim_components/PhotographyPackages/PhotographyPackages';
import Footer from './Nahim_components/Footer/Footer';


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
        <Footer />
      </BrowserRouter>
    </div>

  );
}
export default App;
