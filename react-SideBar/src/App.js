import './App.css';
import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { AuthenticationProvider } from './components/authentication/AuthenticationProvider';
import Login from './pages/Login';
import Home from './pages/Home';
import AddUser from './pages/AddUser.jsx';
import AlterUser from './pages/AlterUser';
import DeleteUSer from './pages/DeleteUSer';
import AboutUs from './pages/AboutUs';
import Logout from './pages/Logout';
import PrivateRoute from './components/authentication/PrivateRoute';
import { AddUserSucess } from './pages/AddUserSucess';
function App() {



  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' exac element={ <Login /> } />
          <Route element={<PrivateRoute />}>
            <Route path='/success' element={ <Home /> } />
            <Route path='/add-user' exac element={ <AddUser /> } />
            <Route path='/alter-uSer' exac element={ <AlterUser /> } />
            <Route path='/delete-user' exac element={ <DeleteUSer /> } />
            <Route path='/about-us' exac element={ <AboutUs /> } />
            <Route path='/logout' exac element= { <Logout /> } />
            <Route path='/add-user-success' exac element={ <AddUserSucess /> } />
          </Route>
        </Routes>
    </BrowserRouter>
  </AuthenticationProvider>
  );
}

export default App;

