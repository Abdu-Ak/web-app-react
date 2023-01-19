import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/profile';
import AdminUser from './components/Admin/AdminUser';
import AdminAdd from './components/Admin/AdminAdd';
import AdminEdit from './components/Admin/AdminEdit';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path='/'  element={ <Login/> } />
      <Route exact path='/signup'  element={ <Signup/> } />
      <Route exact path='/home'  element={ <Home/> } />
      <Route exact path='/profile'  element={ <Profile/> } />
      <Route exact path='/admin'  element={ <AdminUser/> } />
      <Route exact path='/adduser'  element={ <AdminAdd/> } />
      <Route exact path='/edituser'  element={ <AdminEdit/> } />
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
