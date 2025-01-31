import {useState, useEffect, use} from 'react'
import { NavLink, Link, useParams } from 'react-router'
import { GetCardData } from './CardUtilities'
import { CartContext } from './main'

export function Cart(){
    document.title = "Pokémart - Your cart"
    const {cart, setCart} = use(CartContext);

    console.log(cart);

    return <main>
    <div class="topBar">
    <img class="logo" src="https://static.wixstatic.com/media/003dc9_8d9098ce78b24c0184b2ccd6f6ff3c06~mv2.png/v1/fill/w_458,h_458,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/003dc9_8d9098ce78b24c0184b2ccd6f6ff3c06~mv2.png"/>
    <h1>Pokémart - Your cart</h1>
    </div>
    <div class="cardRows">
    {cart.map(card =>

      <div key={card.id} class="cardslot">
        <h1>{card.name}</h1>
          <img src={card.images.small} class="cardimg" />
        <h2 class="price">${card.price}</h2>
      </div>
    )}
    </div>
  </main>
}