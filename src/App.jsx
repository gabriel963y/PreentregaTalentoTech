import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'
import Footer from './pages/Footer.jsx';
import Header from './components/Header/Header.jsx';
import ProtectedRoute from './components/Navbar/ProtectedRoute.jsx'
import Perfil from './pages/Profile.jsx'
import Ofertas from './pages/Offers.jsx';
import Tienda from './pages/Shop.jsx'
import Destacados from './pages/Highlights.jsx';
import MyProducts from './pages/MyProducts.jsx'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route path='/login' element={<Login />} />
            <Route path='/perfil' element={<ProtectedRoute><Perfil /></ProtectedRoute>} />
            <Route path='/ofertas' element={<Ofertas />} />
            <Route path='/tienda' element={<Tienda />} />
            <Route path='/destacados' element={<Destacados />} />
            <Route path='/mis-productos' element={<ProtectedRoute><MyProducts /></ProtectedRoute>} />
          </Routes>
          <Footer />
          <ToastContainer position='bottom-left' autoClose={3000} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
