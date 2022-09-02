import React, { useState } from "react";

export default function Item({item, carrito}) {

  const [stock, setStock] = useState(item.stock);

  function actualizarStock(){
    if (stock>0) {
      setStock(stock-1);
      carrito();
    }
  }

    return (
      <div className='producto'>
        <h3>{item.producto.nombre}</h3>
        <p>{item.producto.descripcion}</p>
        <h5>En stock: {stock===0 ? <span>agotado</span> : stock}</h5>
        {stock>0 ? <button onClick={actualizarStock}>COMPRAR</button> : <button disabled>Sin stock</button>}
      </div>
    )
  }