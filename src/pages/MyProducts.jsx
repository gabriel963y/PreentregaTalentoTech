import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import ProductForm from '../components/Products/ProductForm';
import ProductList from '../components/Products/ProductList';
import { Helmet } from 'react-helmet'
import { titles } from '../utils/consts';
import { useUserProductsStore } from '../store/useUserProductsStore'

const MyProducts = () => {
  const [editUserProduct, setEditUserProduct] = useState(null);
  const { userProducts, addProduct, updateProduct, deleteProduct } = useUserProductsStore()

  const editProduct = (product) => {
    setEditUserProduct(product);
  };

  const handleSubmit = (product) => {
    if (editUserProduct) {
      updateProduct(product)
      setEditUserProduct(null)
    } else {
      addProduct(product)
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
            productToBeEdit={editUserProduct}
            onCancel={() => setEditUserProduct(null)}
          />
        </Card>
        <Card className='shadow mt-4 p-3'>
          <ProductList
            products={userProducts}
            onEdit={editProduct}
            onDelete={deleteProduct}
          />
        </Card>
      </Container>
    </>
  );
};

export default MyProducts;
