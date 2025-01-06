export type ProductSchema = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}[]
export type SingleProductSchema = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

// Dammy product data
export const PRODUCT_DATA:ProductSchema = [
  {
    id: 1,
    title:"Atomic Habits",
    description:'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    price: 20,
    image: '/images/atomic_habits.jpeg'
  },
  {
    id: 1,
    title:"Atomic Habits",
    description:'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    price: 20,
    image: '/images/atomic_habits.jpeg'
  },
  {
    id: 1,
    title:"Atomic Habits",
    description:'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    price: 20,
    image: '/images/atomic_habits.jpeg'
  },
  {
    id: 1,
    title:"Atomic Habits",
    description:'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    price: 20,
    image: '/images/atomic_habits.jpeg'
  },
  {
    id: 2,
    title:"Atomic Habits",
    description:'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    price: 20,
    image: '/images/atomic_habits.jpeg'
  },
  {
    id: 3,
    title:"Atomic Habits",
    description:'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    price: 20,
    image: '/images/atomic_habits.jpeg'
  },
]