import {useState, useEffect, use} from 'react'
import { NavLink, Link, useParams } from 'react-router'
import { GetCardData } from './CardUtilities'
import './CardPage.css'


export function CardPage() {
  return <main>
    <CardInfo />
  </main>;
}

function CardInfo() {
  const { cardId } = useParams();
  const card = GetCardData().find(c => c.id == cardId);

  if (!card) {
    return <h1>ERROR: No card found</h1>
  }

  document.title = "Pokémart - " + card.name + " " + card.id;
  return <div>
    <img src={card.images.small} />
    <h1>{card.name}</h1>
  </div>
}