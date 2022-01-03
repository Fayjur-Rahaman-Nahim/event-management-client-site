import './App.css';
import Dashboard from './components_minhaz/Dashboard/Dashboard/Dashboard';
import AddPackeges from './components_minhaz/AddPackeges/AddPackeges';
import ManagePrograms from './components_minhaz/ManagePrograms/ManagePrograms';
import AllPrograms from './components_minhaz/AllPrograms/AllPrograms';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/allPrograms" element={<AllPrograms />} />
          <Route path="dashboard" element={<Dashboard />} >
            <Route path="addPrograms" element={<AddPackeges></AddPackeges>}></Route>
            <Route path="managePrograms" element={<ManagePrograms></ManagePrograms>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
