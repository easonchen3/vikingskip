import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          autoFocus
          onClick={(e) => {
            e.preventDefault();
            alert(123);
          }}
        >
          Hello
        </Button>
        <Button disable size={ButtonSize.Small}>
          Hello
        </Button>
        <Button btnType={ButtonType.Primary}>Hello</Button>
        <Button btnType={ButtonType.Danger}>Hello</Button>
        <Button
          btnType={ButtonType.Link}
          href="http://www.baidu.com"
          target="_blank"
        >
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
