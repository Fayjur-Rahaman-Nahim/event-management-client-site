import './App.css';
import Login from './componentsEmon/authentications/Login';
import Register from './componentsEmon/authentications/Register';
import Dashboard from './components_minhaz/Dashboard/Dashboard/Dashboard';
import AddPackeges from './components_minhaz/AddPackeges/AddPackeges';
import ManagePrograms from './components_minhaz/ManagePrograms/ManagePrograms';
import AllPrograms from './components_minhaz/AllPrograms/AllPrograms';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Catering from './components_minhaz/Catering/Catering';
import ConfirmOrder from './components_minhaz/ConfirmOrder/ConfirmOrder';
import ManageAllOrders from './components_minhaz/Dashboard/Dashboard/ManageAllOrders/ManageAllOrders';
import PrivateRoute from './components_minhaz/PrivateRoute/PrivateRoute';


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <ul className="d-flex justify-content-center pt-3">
          <li className="px-2"><Link to="/login"> Login</Link></li>
          <li className="px-2"><Link to="/register"> Register</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/programs" element={<AllPrograms />} />
          <Route path="/confirmOrder/:id" element={<ConfirmOrder />} />
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
