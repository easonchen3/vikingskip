import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disable size={ButtonSize.Small}>
          Hello
        </Button>
        <Button btnType={ButtonType.Primary}>Hello</Button>
        <Button btnType={ButtonType.Danger}>Hello</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">
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
