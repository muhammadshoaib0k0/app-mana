import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Game from './Square.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MyButton/>
      <AboutPage/>
      <Profile/>
      <ShoppingList/>
      <MyButton1/>
      <MyButton2 count={count} onClick={handleClick}/>
      <Game />
    </>
  )
}

function MyButton() {
  function handleHover() {
    console.log("hover");
  }
  function handleClick() {
    console.log("click")
  }  
  return (
    <button onClick={handleClick} onMouseOver={handleHover}>I'm a button click me</button>
  );
}



function MyButton1() {
  const [count, setCount] = useState(0)

  function handleClick() {
    console.log("click")
    setCount(count + 1);
    console.log("after click")
  }

  return (
    <>
      <button onClick={handleClick}>I'm a button 1 click me and your clicked {count} time </button>
    </>
  );
}

function MyButton2({count, onClick}) {
  return (
    <>
      <button onClick={onClick}>clicked {count} time </button>
    </>
  );
}


function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
      {product.id}
    </li>
  );
  return (
    
    <ul>{listItems}</ul>
  );
}

export default App
