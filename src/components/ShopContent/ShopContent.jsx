import { Container, Pagination, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import useProducts from '../../hooks/useProducts'
import { useEffect, useState } from 'react'


const ShopContent = () => {
  const { products } = useProducts()
  const [currentPage, setCurrenPage] = useState(1)
  const itemsPerPage = 8

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = products.slice(startIndex, endIndex)
  const totalPages = Math.ceil(products.length / itemsPerPage)

  useEffect(() => {
    setCurrenPage(1)
  }, [products])


  return (
    <Container className='py-3'>
      <h2 className='m-3 text-center'>Todos los productos</h2>
      <Row className='g-4'>
        {currentProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Row>
      <Pagination className='justify-content-center mt-4'>
        <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrenPage(prev => Math.max(prev - 1, 1))} />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => setCurrenPage(index + 1)}>{index + 1}</Pagination.Item>
        ))}
        <Pagination.Next disabled={currentPage === totalPages} onClick={() => setCurrenPage(prev => Math.min(prev + 1, totalPages))} />
      </Pagination>
    </Container>
  )
}

export default ShopContent
