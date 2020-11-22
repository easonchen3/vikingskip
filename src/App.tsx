import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button/button';
import Menu from './components//Menu/menu';
import MenuItem from './components/Menu/menuItem';
import Icon from './components/Icon/icon';
library.add(fas);

function App() {
  return (
    <div className="App">
      <Icon icon="arrow-down" theme="danger"></Icon>
      <header className="App-header">
        <Menu
          defaultIndex={0}
          onSelect={(index) => {
            alert(index);
          }}
          mode="vertical"
        >
          <MenuItem index={0} disabled={true}>
            Item
          </MenuItem>
          <MenuItem index={1}>Item</MenuItem>
          <MenuItem index={2}>Item</MenuItem>
        </Menu>
        <Button
          autoFocus
          onClick={(e) => {
            e.preventDefault();
            alert(123);
          }}
        >
          Hello
        </Button>
        <Button disabled size="sm">
          Hello
        </Button>
        <Button btnType="primary">Hello</Button>
        <Button btnType="danger">Hello</Button>
        <Button btnType="link" href="http://www.baidu.com" target="_blank">
          百度
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
