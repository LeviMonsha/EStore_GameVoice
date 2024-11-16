import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ChatWidget from "./Chatbot";

const categories = [
  { id: 1, name: 'Arcade' },
  { id: 2, name: 'Platformer' },
  { id: 3, name: 'Puzzle' },
  { id: 4, name: 'Action-Adventure' },
  { id: 5, name: 'Metroidvania' },
  { id: 6, name: 'Run-and-Gun Shooter' },
  { id: 7, name: 'Adventure' },
  { id: 8, name: 'Real-Time Strategy' },
  { id: 9, name: 'Fighting' },
  { id: 10, name: 'RPG' },
];

const CategoryDropdown = ({ selectedCategory, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button 
        onClick={() => setIsOpen(prev => !prev)} 
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 
        bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Выберите категорию
      </button>

      {isOpen && (
        <div className="absolute right-0 z-20 mt-2 w-full max-w-xs rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {categories.map(category => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`} 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setSelectedCategory(category.id); 
                  setIsOpen(false);
                }}>
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = ({ selectedCategory, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className='bg-gray-800 p-5 shadow md:flex md:items-center md:justify-between relative'>
      <div className='flex justify-between items-center md:justify-start'>
        <span className='text-2xl cursor-pointer mx-3'>
          <img className='h-10 inline' src='/img/thumb-fotor.png' alt='logo' />
          <Link className="text-white text-lg font-bold" to="/">GameVoice</Link>
        </span>
        <span className='text-3xl cursor-pointer md:hidden block' onClick={toggleMenu}>
          <img className='h-10 inline' src='/img/sort.png' alt='menu' />
        </span>
      </div>

      <ul className={`md:flex md:items-center md:justify-end z-[10] md:z-auto md:static absolute 
        bg-gray-800 w-full right-0 transition-all duration-500 ${isOpen ? 'top-[60px] opacity-100' : 'top-[-400px] opacity-0'}`}>
        <li className='mx-4 my-6 md:my-0'>
          <CategoryDropdown selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link className="text-xl text-white hover:text-gray-300" to="/">Главная</Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link className="text-xl text-white hover:text-gray-300" to="/social-media">Контакты</Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link className="text-xl text-white hover:text-gray-300" to="/about">О нас</Link>
        </li>
      </ul>

      <div className='flex inline items-center relative'>
        <Link className="text-xl text-white hover:text-gray-300 px-4 flex items-center" to="/cart">
          Корзина
          <div className="relative flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="text-white text-lg ml-2" />
            {totalItems > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold rounded-full w-4 h-3 
              flex items-center justify-center absolute -top-1 -right-1">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
      </div>
      
    </nav>
  );
};

export default function Header({ selectedCategory, setSelectedCategory }) {
  return (
    <header>
      <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className='presentation h-64 bg-cover bg-center' style={{ backgroundImage: "url('/img/header.jpg')" }}>
        <ChatWidget />
      </div>
    </header>
  );
}