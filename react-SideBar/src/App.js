import './styleSheets/App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AddUser from './pages/AddUser.jsx';
import AlterUser from './pages/AlterUser';
import DeleteUSer from './pages/DeleteUSer';
import AboutUs from './pages/AboutUs';
import Logout from './pages/Logout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exac element={<Login></Login>} />
        <Route path='/success' element={<Home></Home>} />
        <Route path='/add-user' exac element={<AddUser></AddUser>} />
        <Route path='/alter-uSer' exac element={<AlterUser></AlterUser>} />
        <Route path='/delete-user' exac element={<DeleteUSer></DeleteUSer>} />
        <Route path='/about-us' exac element={<AboutUs></AboutUs>} />
        <Route path='/logout' exac element={<Logout></Logout>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;

