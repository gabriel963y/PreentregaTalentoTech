import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import ProductForm from '../components/Products/ProductForm';
import ProductList from '../components/Products/ProductList';
import { Helmet } from 'react-helmet'
import { titles } from '../utils/consts';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/productService';
import { toast } from 'react-toastify'

const MyProducts = () => {
  const [products, setProducts] = useState([])
  const [editProduct, setEditProduct] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (err) {
        console.error('Error al cargar los productos.', err)
      }
    }
    fetchProducts()
  }, [])

  const handleSubmit = async (product) => {
    try {
      if (editProduct) {
        const updated = await updateProduct(product)
        setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)))
        setEditProduct(null)
      } else {
        const newProduct = await addProduct(product)
        setProducts((prev) => [...prev, newProduct])
        toast.success('Producto agregado correctamente.', {
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        })
      }
    } catch (err) {
      console.error('Error al guardar el producto.', err)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id)
      setProducts((prev) => prev.filter((p) => p.id !== id))
      toast.success('Producto eliminado correctamente.', {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      })
    } catch (err) {
      console.error('Error al eliminar el producto.', err)
    }
  }


  return (
    <>
      <Helmet>
        <title>{titles.myproducts}</title>
      </Helmet>
      <Container className='p-3'>
        <Card className='mb-4 p-3'>
          <h2>Gestión de productos</h2>
          <ProductForm
            onSubmit={handleSubmit}
            productToBeEdit={editProduct}
            onCancel={() => setEditProduct(null)}
          />
        </Card>
        <Card className='shadow mt-4 p-3'>
          <ProductList
            products={products}
            onEdit={setEditProduct}
            onDelete={handleDelete}
          />
        </Card>
      </Container>
    </>
  );
};

export default MyProducts;
