import { FaShoppingCart } from "react-icons/fa";

type CartBarProps = {
  total: number;
  count: number;
  onClick: () => void;
};

export default function CartBar({ total, count, onClick }: CartBarProps) {
  return (
    <button
      className="fixed bottom-0 left-0 w-full bg-brown-500 text-yellow-100 flex items-center justify-between px-4 py-3 z-50 shadow-lg"
      onClick={onClick}
      style={{ minHeight: 56 }}
    >
      <div className="flex items-center gap-2">
        <FaShoppingCart className="text-2xl" />
        <span className="font-medium">{count} producto{count !== 1 ? "s" : ""}</span>
      </div>
      <span className="text-lg font-bold">${total.toFixed(2)}</span>
    </button>
  );
} 