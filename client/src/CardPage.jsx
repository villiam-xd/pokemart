import { NavLink, Link, useParams } from 'react-router'
import carddata from './carddata'
import './CardPage.css'

export function CardPage() {
  return <main>
    <CardInfo />
  </main>;
}

function CardInfo() {
  const { cardId } = useParams();
  const card = carddata.find(c => c.id == cardId);

  if (!card) {
    return <h1>ERROR: No card found</h1>
  }

  document.title = "Pokécenter - " + card.name + " " + card.id;
  return <div>
    <img src={card.images.large} />
    <h1>{card.name}</h1>
  </div>
}