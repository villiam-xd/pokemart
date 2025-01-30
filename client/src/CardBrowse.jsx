import { NavLink, Link, useParams } from 'react-router'
import './CardBrowse.css'

const carddata = [{"id": "base1-1", "name": "Alakazam", "images": "https://images.pokemontcg.io/base1/1.png"},
  {"id": "base1-2", "name": "Blastoise", "images": "https://images.pokemontcg.io/base1/2.png"},
  {"id": "base1-3", "name": "Chansey", "images": "https://images.pokemontcg.io/base1/3.png"}
 ] ;

export function CardBrowse() {
  document.title = "Pokémart - Browse Page"
  return <main>
    {carddata.map(card =>

      <div class="cardslot">
        <h1>{card.name}</h1>

        <Link to={'/cardpage/' + card.id}>
          <img src={card.images} class="cardimg" />
        </Link>
      </div>
    )}
  </main>
}