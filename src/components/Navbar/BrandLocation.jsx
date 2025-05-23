import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const BrandLocation = () => {
  return (
    <>
      <h2 className='fs-3 m-0' style={{ color: 'black' }}>
        Lean<span style={{ color: '#00C9D2' }}>Shop</span>
      </h2>
      <div className='d-flex align-items-center small'>
        <FaMapMarkerAlt className='me-1' />
        <span className='small'>
          Estás en <span style={{color: 'blue'}}>Capital Federal</span>
        </span>
      </div>
    </>
  );
};

export default BrandLocation;
