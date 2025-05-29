// src/components/ProductCard.tsx
import type { Product } from '../types'

interface Props {
  product: Product
  quantity: number
  onAdd: () => void
  onRemove: () => void
}

export function ProductCard({ product, quantity, onAdd, onRemove }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between
                    border-2 border-transparent hover:border-green-500 transition">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <div>
        <h3 className="font-semibold text-lg text-brown-700">{product.name}</h3>
        <p className="text-sm text-brown-500">{product.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-green-700 font-bold">${product.price.toFixed(2)}</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={onRemove}
            className="w-8 h-8 flex items-center justify-center rounded-full border text-xl"
          >
            –
          </button>
          <span className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded">
            {quantity}
          </span>
          <button
            onClick={onAdd}
            className="w-8 h-8 flex items-center justify-center rounded-full border text-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
