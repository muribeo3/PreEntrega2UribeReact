
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
//import React, { useEffect } from 'react';
import Checkout from './components/Checkout/Checkout'

// import { addDoc, collection } from "firebase/firestore";
// import { db } from './services/firebase'
// import { products } from './asyncMock'


function App() {
  // useEffect(() => {
  //   const colectionProductos = collection(db, "productos")
  //   products.map((item) => addDoc(colectionProductos, item))
  // }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>

          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos nuestro productos'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'producto por categoría'} />} />
            <Route path='item/:itemId' element={<ItemDetailContainer />} />
            <Route path='cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </div >
  );
}

export default App;
