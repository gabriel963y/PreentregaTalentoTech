import MiNavbar from './components/Navbar/MiNavbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'
import Footer from './pages/Footer.jsx';
import Header from './components/Header/Header.jsx';
import ProtectedRoute from './components/Navbar/ProtectedRoute.jsx'
import Perfil from './pages/Perfil.jsx'
import { useState } from 'react';

function App() {
  const [favorite, setFavorite] = useState([])
  const [shop, setShop] = useState([])


  return (
    <>
      <BrowserRouter>
        <div>
          <Header favorite={favorite} shop={shop}/>
          <Routes>
            <Route
              path='/'
              element={<Home favorite={favorite} setFavorite={setFavorite} shop={shop} setShop={setShop}/>}
            />
            <Route path='/login' element={<Login />} />
            <Route path='/perfil' element={<ProtectedRoute><Perfil /></ProtectedRoute>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
