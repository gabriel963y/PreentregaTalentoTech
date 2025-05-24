import { Container, Row } from 'react-bootstrap'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import ProductCard from './ProductCard';
import useProducts from '../../hooks/useProducts'

const ShopContent = ({ setFavorite, favorite, setShop, shop }) => {

  const { products } = useProducts()

  const toggleFavorite = (product) => {
    setFavorite(prev => {
      const exists = prev.some(fav => fav.id === product.id)
      if (exists) {
        Swal.fire({
          toast: true,
          position: 'bottom-left',
          icon: 'error',
          title: 'Producto eliminado de favoritos',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,

        })
        return prev.filter(fav => fav.id !== product.id)

      } else {
        Swal.fire({
          toast: true,
          position: 'bottom-left',
          icon: 'success',
          title: 'Producto agregado a favoritos',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        })
        return [...prev, product]
      }
    })
  }

  const addToShop = (product) => {
    setShop(prev => {
      const exists = prev.some(prod => prod.id === product.id)
      if (exists) {
        Swal.fire({
          toast: true,
          position: 'bottom-left',
          icon: 'error',
          title: 'Producto eliminado del carrito de compras',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
        return prev.filter(prod => prod.id !== product.id)
      } else {
        Swal.fire({
          toast: true,
          position: 'bottom-left',
          icon: 'success',
          title: 'Producto agregado al carrito de compras',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        })
        return [...prev, product]
      }
    })
  }

  return (
    <Container className='py-3'>
      <h2 className='m-3'>Todos los productos</h2>
      <Row className='g-4'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} favorite={favorite} toggleFavorite={toggleFavorite} addToShop={addToShop} shop={shop} />
        ))}
      </Row>
    </Container>
  )
}

export default ShopContent