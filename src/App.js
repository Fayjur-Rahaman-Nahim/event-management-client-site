import './App.css';
import Home from './Nahim_components/Home/Home';
import Appbar from './Nahim_components/Appbar/Appbar';
import Galleries from './Nahim_components/Galleries/Galleries';
import Login from './componentsEmon/authentications/Login';
import Register from './componentsEmon/authentications/Register';
import Footer from './Nahim_components/Footer/Footer';
import Dashboard from './components_minhaz/Dashboard/Dashboard/Dashboard';
import AddPackeges from './components_minhaz/AddPackeges/AddPackeges';
import ManagePrograms from './components_minhaz/ManagePrograms/ManagePrograms';
import AllPrograms from './components_minhaz/AllPrograms/AllPrograms';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Catering from './components_minhaz/Catering/Catering';
import ConfirmOrder from './components_minhaz/ConfirmOrder/ConfirmOrder';
import ManageAllOrders from './components_minhaz/Dashboard/Dashboard/ManageAllOrders/ManageAllOrders';
import PrivateRoute from './components_minhaz/PrivateRoute/PrivateRoute';
import './App.css';
// import PhotographyPackages from './Nahim_components/PhotographyPackages/PhotographyPackages';
// import SuperSaverConfirmation from './Nahim_components/SuperSaverConfirmation/SuperSaverConfirmation';


function App() {

  return (

    <div className="App">

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/packages" element={<PhotographyPackages />} /> */}
          {/* <Route path="/superSaver/:key" element={<SuperSaverConfirmation />} /> */}
          <Route path="/gallery" element={<Galleries />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<App />} />
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
        <Footer />
      </BrowserRouter>

    </div>


  );
}
export default App;
