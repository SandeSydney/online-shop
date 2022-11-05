import React from 'react'
import useItemsGetter from '../../Hooks/useItemsGetter'

function WomensClothing() {
  const womensclothing = useItemsGetter("https://fakestoreapi.com/products/category/women's clothing")
  return womensclothing
}

export default WomensClothing