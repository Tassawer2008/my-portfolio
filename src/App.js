import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './pages/Mainpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminpage from './pages/Adminpage';
import SidebarLayout from './layout/SidebarLayout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Mainpage/>}></Route>
        <Route path='/admin'  element={<SidebarLayout/>} >
          <Route path='dashboard' element={<Adminpage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
