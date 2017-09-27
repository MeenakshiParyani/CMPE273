import React from 'React';
import ReactDOM from 'react-dom';
import MenuList from './components/menu_list';
import OrderList from './components/order_list';
const API_KEY = 'AIzaSyAPoi8RJMC4X__bHDJGS92wddQKbZ-mEj8';

const App = () => {
  return (
    <MenuList />

  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
