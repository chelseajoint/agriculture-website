import React, { useState } from 'react';
import Logo from '../../assets/Logo.png'

import './Header.scss'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleAddToCart = (item) => {
    setCartItems(prevCartItems => [...prevCartItems, item]);
  }

  return (
    <header className='header'>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <div className='name'>Organick</div>
      </div>
      <nav className='nav'>
        {/* Навигационные ссылки */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li>
            <a href="#" className='pages'>Pages</a>
            <ul className='display-none'>
              <li><a href="/page1">Page 1</a></li>
              <li><a href="/page2">Page 2</a></li>
              {/* Другие ссылки страниц */}
            </ul>
          </li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/project">Project</a></li>
          <li><a href="/news">News</a></li>
        </ul>
      </nav>
      <div className="search">
        {/* Поле поиска */}
        <input type="text" value={searchQuery} onChange={handleSearchChange} />
        {/* Можно добавить кнопку для отправки запроса */}
      </div>
      <div className="cart">
        {/* Информация о корзине */}
        <span>Cart ({cartItems.length})</span>
        {/* Можно добавить иконку корзины и обработчик клика для перехода к корзине */}
      </div>
    </header>
  );
}

export default Header;
