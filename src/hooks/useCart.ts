// src/hooks/useCart.ts
import { useState } from 'react'
import type { Product } from '../types'

export interface CartItem extends Product {
  quantity: number
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])

  function add(product: Product) {
    setItems(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) {
        return prev.map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function remove(product: Product) {
    setItems(prev =>
      prev
        .map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0)
    )
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return { items, add, remove, total }
}
