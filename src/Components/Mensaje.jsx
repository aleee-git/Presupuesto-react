import React from 'react';

export default function Mensaje({children}) {
  return (
    <div className='alerta'>
      {children}
    </div>
  );
}
