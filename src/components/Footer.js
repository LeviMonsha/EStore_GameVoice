import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-24 text-center">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold mb-2">Интернет-магазин Ретро Игр</h2>
        <p className="text-sm mb-4">Ваше место для ностальгии и развлечений!</p>
        <p className="text-xs">&copy; 2024 Интернет-магазин. Все права защищены.</p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-white">VK</a>
        <a href="#" className="text-gray-400 hover:text-white">Telegram</a>
        <a href="#" className="text-gray-400 hover:text-white">Steam</a>
      </div>
    </footer>
  );
}
