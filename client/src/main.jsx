import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink, Link, useParams } from 'react-router'
import { CardPage } from './CardPage'
import { CardBrowse } from './CardBrowse'

//Skapa en sida där man kan köpa, och om jag hinner, sälja pokemon kort
//Sök online efter inspiration
//Målet är att kunna lägga produkter i en varukorg, och sedan gå till checkout på en annan sida.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/cardpage/:cardId" element={<CardPage />} />
        <Route path="/cardbrowse" element={<CardBrowse />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

function HomePage() {
  document.title = "Pokémart - Home Page"
  return <main>
    <h1>Home Page</h1>
  </main>
}