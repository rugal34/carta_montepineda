// src/App.tsx
import { useCart } from './hooks/useCart'
import products from './data/products'
import { ProductCard } from './components/ProductCard'
import Footer from './components/Footer'
import CartBar from './components/CartBar'
import CartModal from './components/CartModal'
import { useState } from 'react'

export default function App() {
  const { items, add, remove, total } = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  // Adaptar los items para CartModal
  const cartItems = items.map(item => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
  }))

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <header className="text-center py-6 bg-white shadow">
        <img
          src="/assets/montepineda-logo.JPG"
          alt="MontePineda Café Logo"
          className="mx-auto w-20 mb-4"
        />
        <h1 className="text-2xl font-bold text-brown-700">MontePineda Café</h1>
        <p className="text-brown-500">Fresco como la montaña, café origen pradera</p>
      </header>

      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(prod => {
          const item = items.find(i => i.id === prod.id)
          return (
            <ProductCard
              key={prod.id}
              product={prod}
              quantity={item?.quantity ?? 0}
              onAdd={() => add(prod)}
              onRemove={() => remove(prod)}
            />
          )
        })}
      </main>

      {/* Barra inferior del carrito */}
      {items.length > 0 && (
        <CartBar
          total={total}
          count={items.reduce((acc, item) => acc + item.quantity, 0)}
          onClick={() => setCartOpen(true)}
        />
      )}
      {/* Modal del carrito */}
      <CartModal
        open={cartOpen}
        items={cartItems}
        total={total}
        onClose={() => setCartOpen(false)}
        onConfirm={() => setCartOpen(false)}
      />
      <Footer />
    </div>
  )
}

