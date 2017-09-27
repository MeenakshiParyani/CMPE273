import React from 'React';
import ReactDOM from 'react-dom';
import MenuList from './components/menu_list';
import OrderList from './components/order_list';
const API_KEY = 'AIzaSyAPoi8RJMC4X__bHDJGS92wddQKbZ-mEj8';

const App = () => {
  return (
    <div>
      <br></br><br></br><br></br>
      <div>
        <table>
        <tr>
          <th> Menu </th>
          <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
          <th> Order </th>
        </tr>
        <tr>
          <td className="outerTable">
            <MenuList />
          </td>
          <td></td>
          <td className="outerTable" padding="5%">
            <OrderList/><br></br><br></br><br></br><br></br><br></br><hr></hr>
            <Total/>
          </td>
        </tr>
        </table>

      </div>
    </div>

  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
