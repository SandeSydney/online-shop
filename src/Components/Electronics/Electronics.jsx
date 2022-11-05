import React, { useEffect, useState } from 'react'
import useItemsGetter from '../../Hooks/useItemsGetter'
import Item from '../SingleItem/Item'

function Electronics() {
  const electronics = useItemsGetter('https://fakestoreapi.com/products/category/electronics')
  return electronics
}

export default Electronics