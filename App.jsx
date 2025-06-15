// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// src/App.jsx
import './index.css';
import { products } from './data/Pro';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="container">
      <h1 className="title">My Apple Product List</h1>
      <div className="product-container">
        {products.map((product, index) => (
         <ProductCard
        key={index}
        name={product.name}
        img={product.img}
        price={product.price}
        description={product.description}
        link={product.link} 
        />

        ))}
      </div>
    </div>
  );
}

export default App;