
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './componentsEmon/authentications/Login';
import Register from './componentsEmon/authentications/Register';

function App() {

  return (
    <>
      <BrowserRouter>
        <ul className="d-flex justify-content-center pt-3">
          <li className="px-2"><Link to="/login"> Login</Link></li>
          <li  className="px-2"><Link to="/register"> Register</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<><h1> Hello world</h1></>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
