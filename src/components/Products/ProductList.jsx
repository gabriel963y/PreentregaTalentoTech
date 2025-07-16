import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const ProductList = ({ products, onEdit, onDelete }) => {

  if (products.length === 0) return <p>No hay productos cargados.</p>;

  return (
    <Table striped bordered hover responsive>
      <thead className='table-dark'>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th className='text-center'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ id, name, price }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>${price.toFixed(2)}</td>
            <td className='text-center'>
              <div className='d-flex justify-content-center gap-2'>
                <Button
                  variant='outline-warning'
                  size='sm'
                  className='me-2 d-flex align-items-center justify-content-center gap-1 fw-bold'
                  onClick={() => onEdit({ id, name, price })}
                >
                  <FaEdit /> Editar
                </Button>
                <Button
                  variant='outline-danger'
                  size='sm'
                  onClick={() => onDelete(id)}
                  className='d-flex align-items-center justify-content-center gap-1 fw-bold'
                >
                  <FaRegTrashAlt /> Borrar
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ProductList