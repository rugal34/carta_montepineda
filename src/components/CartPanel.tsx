// src/components/CartPanel.tsx
import type { CartItem } from '../hooks/useCart'

interface Props {
  items: CartItem[]
  total: number
}

export function CartPanel({ items, total }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-green-50 border-t border-green-200
                    p-4 max-h-1/2 overflow-auto">
      <h2 className="font-semibold text-xl text-green-800 mb-2">
        Tu Selección ({items.length} productos)
      </h2>
      <ul className="space-y-2">
        {items.map(i => (
          <li key={i.id} className="flex justify-between">
            <span>{i.name} × {i.quantity}</span>
            <span className="font-bold text-green-700">
              ${(i.price * i.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-semibold">Total:</span>
        <span className="font-bold text-green-700">${total.toFixed(2)}</span>
      </div>
    </div>
  )
}
