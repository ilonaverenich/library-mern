import  {FC} from 'react'

const Header:FC = () => {
  return (
    <div className='header'>
      <div className='header-content'>
      <div className='header-logo-box'>
        <div className='logo'>
            <img src='/image/logo/logo-book.png' width='42px' height='42px' alt="logo" /> 
        </div>
        <div className='name-logo-box'>
            <div className='name-logo-one'>библиотечная</div>
            <div  className='name-logo-two'>книжный магазин</div>
        </div>
      </div>
      <div className='header-list-menu'>
        <div className='menu-item'>Акции</div>
        <div className='menu-item'>Каталог</div>
        <div className='menu-item'>Доставка</div>
        <div className='menu-item'>О магазине</div>
        <div className='menu-item'>Блог</div>
      </div>
      <div className='header-search'>
        <div className='search-logo'>1</div>
        <div className='search'>Поиск</div>
      </div>
      <div className='header-basket'>
        <div className='header-basket-logo-like'>1</div>
        <div className='header-basket-logo-basket'>   2   </div>
        <div className='header-basket-price'>     4</div>
      </div>
  
      </div>
      </div>
  
  )
}

export default Header