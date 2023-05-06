import {Routes, Route} from 'react-router-dom';
import Register from './Components/Register';
import Users from './Components/Users';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  return (
    <div>
      <Register/>
        <Routes>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
