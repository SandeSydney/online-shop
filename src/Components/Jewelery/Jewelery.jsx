import React from 'react'
import useItemsGetter from '../../Hooks/useItemsGetter'

function Jewelery() {
  const jewelery = useItemsGetter('https://fakestoreapi.com/products/category/jewelery')
  return jewelery
}

export default Jewelery