import './App.css';
import Dashboard from './components_minhaz/Dashboard/Dashboard/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Catering from './components_minhaz/Catering/Catering';
function App() {
  return (
    <div className="App">
      {/* <Dashboard></Dashboard> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="dashboard" element={<Dashboard />} >
            <Route path="catering" element={<Catering></Catering>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
