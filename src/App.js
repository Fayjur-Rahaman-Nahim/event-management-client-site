import { useEffect } from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Login from './componentsEmon/authentications/Login';
import Register from './componentsEmon/authentications/Register';
import AddPackeges from './components_minhaz/AddPackeges/AddPackeges';
import AllPrograms from './components_minhaz/AllPrograms/AllPrograms';
import Catering from './components_minhaz/Catering/Catering';
import ConfirmOrder from './components_minhaz/ConfirmOrder/ConfirmOrder';
import Dashboard from './components_minhaz/Dashboard/Dashboard/Dashboard';
import ManageAllOrders from './components_minhaz/Dashboard/Dashboard/ManageAllOrders/ManageAllOrders';
import ManagePrograms from './components_minhaz/ManagePrograms/ManagePrograms';
import PrivateRoute from './components_minhaz/PrivateRoute/PrivateRoute';
import Appbar from './Nahim_components/Appbar/Appbar';
import Galleries from './Nahim_components/Galleries/Galleries';
import Home from './Nahim_components/Home/Home';
import PhotographyPackages from './Nahim_components/PhotographyPackages/PhotographyPackages';
import SuperSaverConfirmation from './Nahim_components/SuperSaverConfirmation/SuperSaverConfirmation';

function App() {
  const token = window?.localStorage?.getItem('userInfo') && JSON.parse(window.localStorage.getItem('userInfo'))?.token;
  useEffect(() => {
    fetch('http://localhost:5000/api/package/packages', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}, [token])
  return (

    <div className="App">

      <BrowserRouter>
        <Appbar />
        <Catering/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<PhotographyPackages />} />
          <Route path="/superSaver/:key" element={<SuperSaverConfirmation />} />
          <Route path="/gallery" element={<Galleries />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/programs" element={<AllPrograms />} />
          <Route path="/confirmOrder/:id" element={<PrivateRoute><ConfirmOrder /></PrivateRoute>} />
          <Route path="/programs/:name" element={<Catering />} />
          <Route path="/packages/catering" element={<Catering />} />
          <Route path="dashboard" element={<Dashboard />} >
            <Route path="addPrograms" element={<AddPackeges></AddPackeges>}></Route>
            <Route path="manageAllOrders" element={<ManageAllOrders></ManageAllOrders>}></Route>
            <Route path="managePrograms" element={<ManagePrograms></ManagePrograms>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>


  );
}
export default App;
