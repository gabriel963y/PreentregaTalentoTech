import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'
import Footer from './pages/Footer.jsx';
import Header from './components/Header/Header.jsx';
import ProtectedRoute from './components/Navbar/ProtectedRoute.jsx'
import Perfil from './pages/Perfil.jsx'
import { useState } from 'react';
import Ofertas from './pages/Ofertas.jsx';
import Tienda from './pages/Tienda.jsx'
import Destacados from './pages/Destacados.jsx';

function App() {
  const [favorite, setFavorite] = useState([])
  const [shop, setShop] = useState([])


  return (
    <>
      <BrowserRouter>
        <div>
          <Header favorite={favorite} shop={shop} setShop={setShop} />
          <Routes>
            <Route
              path='/'
              element={<Home favorite={favorite} setFavorite={setFavorite} shop={shop} setShop={setShop} />}
            />
            <Route path='/login' element={<Login />} />
            <Route path='/perfil' element={<ProtectedRoute><Perfil favorite={favorite} shop={shop} /></ProtectedRoute>} />
            <Route path='/ofertas' element={<Ofertas />} />
            <Route path='/tienda' element={<Tienda />} />
            <Route path='/destacados' element={<Destacados />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
