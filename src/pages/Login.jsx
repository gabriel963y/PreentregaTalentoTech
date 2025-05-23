import React, { useState } from 'react';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { user } from '../utils/conts';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (!email || !password) {
      setError('Por favor completá todos los campos.');
      return;
    }

    if (email === user.email && password === user.password) {
      localStorage.setItem('token', true)
      navigate('/')
    } else {
      setError('Email o contraseña incorrectos.');
    }
  };

  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>
      <Card className='p-4 shadow-lg' style={{ width: '100%', maxWidth: '500px' }}>
        <h3 className='text-center mb-3'>Iniciar Sesión</h3>

        {error && <Alert variant='danger'>{error}</Alert>}

        <Form onSubmit={handleLogin}>
          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type='email'
              placeholder='Ingresá tu email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-4' controlId='formPassword'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type='password'
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='d-flex justify-content-between align-items-center mt-3'>
              <a href='#' >Olvidaste tu contraseña?</a>
              <a href='#'>Recordarme</a>
            </div>
          </Form.Group>

          <Button variant='outline-danger' type='submit' className='w-100'>
            Iniciar sesión
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
