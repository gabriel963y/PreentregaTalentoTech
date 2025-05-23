import React from 'react'
import { FaTruck, FaTools, FaStore, FaPhoneAlt, FaCommentDots } from 'react-icons/fa';
import { Container } from 'react-bootstrap'

const Topbar = () => {
  return (
    <div className='bg-light border-bottom py-2 small'>
      <Container className='d-flex justify-content-center flex-wrap gap-4 text-muted'>
        <div className='d-flex align-items-center gap-1'>
          <FaTruck /> <span>Seguí tu pedido</span>
        </div>
        <div className='d-flex align-items-center gap-1'>
          <FaTools /> <span>Servicio técnico</span>
        </div >
        <div className='d-flex align-items-center gap-1'>
          <FaStore /> <span>Sucursales</span>
        </div>
        <div className='d-flex align-items-center gap-1'>
          <FaPhoneAlt /> <span>Venta telefónica</span>
        </div>
        <div className='d-flex align-items-center gap-1'>
          <FaCommentDots /> <span>Centro de ayuda</span>
        </div>
      </Container>
    </div>
  )
}

export default Topbar