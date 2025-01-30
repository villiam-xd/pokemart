import { NavLink, Link, useParams } from 'react-router'
import './CardPage.css'

const carddata = [{"id": "base1-1", "name": "Alakazam", "images": "https://images.pokemontcg.io/base1/1.png"},
  {"id": "base1-2", "name": "Blastoise", "images": "https://images.pokemontcg.io/base1/2.png"},
  {"id": "base1-3", "name": "Chansey", "images": "https://images.pokemontcg.io/base1/3.png"}
 ] ;

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

  document.title = "Pokémart - " + card.name + " " + card.id;
  return <div>
    <img src={card.images} />
    <h1>{card.name}</h1>
  </div>
}