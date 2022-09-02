import React from 'react'
import Items from './data.json'
import Item from './Item'

export default function Listado({carrito}) {

  const listadoItems = Items.map((item, index) => {
    return(
      <Item key={index} item={item} carrito={carrito}/>
    )
  })

  return (
    <div className='container'>
      {listadoItems}
    </div>
  )
}