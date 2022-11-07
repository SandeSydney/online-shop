import React from 'react'
import useItemsGetter from '../../Hooks/useItemsGetter'

function MensClothing() {
  const mensclothing = useItemsGetter("https://fakestoreapi.com/products/category/men's clothing")
  return mensclothing
}

export default MensClothing