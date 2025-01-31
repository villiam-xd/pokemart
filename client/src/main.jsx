import { StrictMode, useState, createContext, use, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink, Link, useParams } from 'react-router'
import { CardPage } from './CardPage'
import { CardBrowse } from './CardBrowse'
import { Cart } from './Cart'

export const CartContext = createContext({})

//Skapa en sida där man kan köpa, och om jag hinner, sälja pokemon kort
//Sök online efter inspiration
//Målet är att kunna lägga produkter i en varukorg, och sedan gå till checkout på en annan sida.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

function App(){
  const [cart, setCart] = useState([]);

  return <CartContext.Provider value={{ cart, setCart }}>
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/cardpage/:cardId" element={<CardPage />} />
      <Route path="/cardbrowse" element={<CardBrowse />} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
</CartContext.Provider>;
}

function HomePage() {
  document.title = "Pokémart - Home Page"
  return <main>
    <h1>Home Page</h1>
  </main>
}

