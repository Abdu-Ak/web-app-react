import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path='/'  element={ <Login/> } />
      <Route exact path='/signup'  element={ <Signup/> } />
      <Route exact path='/home'  element={ <Home/> } />
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
