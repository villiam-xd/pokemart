import { NavLink, Link, useParams } from 'react-router'
import carddata from './carddata'
import './CardBrowse.css'

export function CardBrowse() {
  document.title = "Pokémart - Browse Page"
  return <main>
    {carddata.map(card =>

      <div class="cardslot">
        <h1>{card.name}</h1>

        <Link to={'/cardpage/' + card.id}>
          <img src={card.images.small} class="cardimg" />
        </Link>
      </div>
    )}
  </main>
}