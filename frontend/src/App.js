import {Routes, Route} from 'react-router-dom';
import Register from './Components/Register';
import Users from './Components/Users';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
function App() {

  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Register/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
