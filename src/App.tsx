// src/App.tsx
import { useCart } from './hooks/useCart'
import products from './data/products'
import { ProductCard } from './components/ProductCard'
import { CartPanel } from './components/CartPanel'
import Footer from './components/Footer'

export default function App() {
  const { items, add, remove, total } = useCart()

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <header className="text-center py-6 bg-white shadow">
        <h1 className="text-2xl font-bold text-brown-700">MontePineda Café</h1>
        <p className="text-brown-500">Experiencia Artesanal desde 1985</p>
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

      {items.length > 0 && <CartPanel items={items} total={total} />}
      <Footer />
    </div>
  )
}

