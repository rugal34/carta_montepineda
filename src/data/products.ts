
import type { Product } from '../types'

const products: Product[] = [
  // --- CALIENTES (página 1) ---
  {
    id: 'hot1',
    name: 'Capuccino',
    description: 'Café con leche, balance entre la intensidad del espresso y la suavidad de la leche.',
    price: 6000,
    imageUrl: '/images/cappuccino.jpg',
    category: 'Calientes',
  },
  {
    id: 'hot2',
    name: 'Mocaccino',
    description: 'Fusión de café, leche y chocolate. Una bebida cremosa y reconfortante.',
    price: 8000,
    imageUrl: '/images/mocaccino.jpg',
    category: 'Calientes',
  },
  {
    id: 'hot3',
    name: 'Espresso',
    description: 'Extracción intensa y concentrada que revela el carácter puro del café Montepineda.',
    price: 3000,
    imageUrl: '/images/espresso.jpg',
    category: 'Calientes',
  },

  // --- CALIENTES (página 2) ---
  {
    id: 'hot4',
    name: 'Capuccino con Amaretto',
    description: 'Café con leche y licor Amaretto: suavidad y toque almendrado.',
    price: 8000,
    imageUrl: '/images/cap-amaretto.jpg',
    category: 'Calientes',
  },
  {
    id: 'hot5',
    name: 'Capuccino con Licor de Café',
    description: 'Capuccino clásico elevado con licor de café aromático.',
    price: 8000,
    imageUrl: '/images/cap-licorcafe.jpg',
    category: 'Calientes',
  },
  {
    id: 'hot6',
    name: 'Capuccino con Whisky',
    description: 'Capuccino con un sutil shot de whisky Grants.',
    price: 8000,
    imageUrl: '/images/cap-whisky.jpg',
    category: 'Calientes',
  },

  // --- CALIENTES (página 3) ---
  {
    id: 'hot7',
    name: 'Americano',
    description: 'Espresso con agua caliente, cuerpo ligero y sabor suave.',
    price: 4500,
    imageUrl: '/images/americano.jpg',
    category: 'Calientes',
  },
  {
    id: 'hot8',
    name: 'Tinto',
    description: 'Café negro suave y tradicional, autenticidad en una taza.',
    price: 2000,
    imageUrl: '/images/tinto.jpg',
    category: 'Calientes',
  },
  {
    id: 'hot9',
    name: 'Tinto Grande',
    description: 'Porción generosa del clásico tinto, ideal para largas conversaciones.',
    price: 3000,
    imageUrl: '/images/tinto-grande.jpg',
    category: 'Calientes',
  },

  // --- FRÍO ---
  {
    id: 'cold1',
    name: 'Affogato',
    description: 'Bola de helado bañada en espresso caliente. Dulce y amargo, frío y calor.',
    price: 9000,
    imageUrl: '/images/affogato.jpg',
    category: 'Frio',
  },
  {
    id: 'cold2',
    name: 'Ice Latte',
    description: 'Espresso servido con leche fría y hielo. Refrescante y cremoso.',
    price: 8000,
    imageUrl: '/images/ice-latte.jpg',
    category: 'Frio',
  },

  // --- ADICIONES ---
  {
    id: 'add1',
    name: 'Whisky Grants',
    description: 'Whisky madurado en barriles de cerveza; sabor afrutado y amielado.',
    price: 2000,
    imageUrl: '/images/whisky-grants.png',
    category: 'Adiciones',
  },
  {
    id: 'add2',
    name: 'Amaretto',
    description: 'Licor Amaretto, notas de almendra que realzan tu bebida.',
    price: 2000,
    imageUrl: '/images/amaretto.png',
    category: 'Adiciones',
  },
  {
    id: 'add3',
    name: 'Licor de Café',
    description: 'Licor oscuro y aromático que intensifica el sabor a café.',
    price: 2000,
    imageUrl: '/images/licor-cafe.png',
    category: 'Adiciones',
  },
]

export default products
