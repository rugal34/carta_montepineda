import React from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartModalProps = {
  open: boolean;
  items: CartItem[];
  total: number;
  onClose: () => void;
  onConfirm: () => void;
};

export default function CartModal({ open, items, total, onClose, onConfirm }: CartModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-end md:items-center justify-center">
      <div className="bg-white w-full md:w-96 rounded-t-2xl md:rounded-2xl p-6 max-h-[80vh] overflow-y-auto relative">
        <button className="absolute top-4 right-6 text-2xl" onClick={onClose}>×</button>
        <h2 className="text-2xl font-bold mb-4 text-brown-700">Tu Selección</h2>
        <ul className="mb-4">
          {items.map(item => (
            <li key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name} <span className="text-xs text-gray-500">× {item.quantity}</span></span>
              <span className="font-bold text-green-700">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center bg-yellow-100 p-3 rounded mb-4">
          <span className="font-bold text-lg">Total:</span>
          <span className="text-green-700 font-bold text-xl">${total.toFixed(2)}</span>
        </div>
        <button
          className="w-full bg-brown-500 text-yellow-100 py-3 rounded font-bold text-lg"
          onClick={onConfirm}
        >
          Confirmar Selección
        </button>
      </div>
    </div>
  );
} 