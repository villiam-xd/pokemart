import {useState, useEffect, use} from 'react'
import { NavLink, Link, useParams } from 'react-router'
import { GetCardData } from './CardUtilities'
import { CartContext } from './main'
import './CardBrowse.css'

export function CardBrowse() {
  document.title = "Pokémart - Browse Page"

  const {cart, setCart} = use(CartContext);

  function addToCart(card){
    setCart(current=>[...current, card])
    return cart;
  }

  return <main>
    <div class="topBar">
    <img class="logo" src="https://static.wixstatic.com/media/003dc9_8d9098ce78b24c0184b2ccd6f6ff3c06~mv2.png/v1/fill/w_458,h_458,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/003dc9_8d9098ce78b24c0184b2ccd6f6ff3c06~mv2.png"/>
    <Link to={"/cart"}><h1>Pokémart - Base Set 1</h1></Link>
    </div>
    <div class="cardRows">
    {GetCardData().map(card =>

      <div key={card.id} class="cardslot">
        <h1>{card.name}</h1>
        <Link to={'/cardpage/' + card.id}>
          <img src={card.images.small} class="cardimg" />
        </Link>
        <h2 class="price">${card.price} <button class="cartButton"onClick={() => console.log(addToCart(card))}>Add to cart</button></h2>
      </div>
    )}
    </div>
  </main>
}