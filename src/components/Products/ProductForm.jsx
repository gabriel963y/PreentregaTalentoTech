import { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

const ProductForm = ({ onSubmit, productToBeEdit, onCancel }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (productToBeEdit) {
            setProductName(productToBeEdit.name ?? '');
            setProductPrice(productToBeEdit.price?.toString() ?? '');
            setErrors([]);
        } else {
            setProductName('');
            setProductPrice('');
            setErrors([]);
        }
    }, [productToBeEdit]);

    const validatePoduct = () => {

        if (!productName.trim()) return setErrors(['El nombre no puede estar vacío.']);

        if (productPrice === '' || isNaN(productPrice) || Number(productPrice) <= 0) return setErrors(['El precio debe ser un número mayor a 0.']), false;

        setErrors([])
        return true
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePoduct()) return;

        const product = {
            name: productName.trim(),
            price: Number(productPrice),
        };

        if (productToBeEdit) product.id = productToBeEdit.id;

        onSubmit(product);

        if (!productToBeEdit) {
            setProductName('');
            setProductPrice('');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {errors.length > 0 && (
                <Alert variant='danger'>
                    <ul className='mb-0'>
                        {errors.map((err, idx) => (
                            <li key={idx}>{err}</li>
                        ))}
                    </ul>
                </Alert>
            )}

            <Row className='align-items-end'>
                <Col md={5}>
                    <Form.Group controlId='nombre'>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Nombre del producto'
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </Form.Group>
                </Col>

                <Col md={3}>
                    <Form.Group controlId='precio'>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Precio'
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            min='0'
                            step='0.01'
                        />
                    </Form.Group>
                </Col>

                <Col md={4}>
                    <Button variant='primary' type='submit' className='me-2 w-100'>
                        {productToBeEdit ? 'Actualizar' : 'Agregar'}
                    </Button>
                    {productToBeEdit && (
                        <Button variant='secondary' onClick={onCancel} className='mt-2 w-100'>
                            Cancelar
                        </Button>
                    )}
                </Col>
            </Row>
        </Form>
    )
}

export default ProductForm