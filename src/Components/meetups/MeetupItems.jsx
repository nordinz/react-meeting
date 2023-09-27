import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItems.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItems(props) {
  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        adress: props.address,
      });
    }
  }

  // const { addFavorite, removeFavorite, itemIsFavorite } =
  //   useContext(FavoritesContext);
  // console.log(favorites[0] === props.id);
  // console.log(props.id);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.adress}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from fav' : 'To Fav'}
          </button>
          {/* {itemIsFavorite(props.id) ? (
            <button onClick={() => removeFavorite(props.id)}>Remove Fav</button>
          ) : (
            <button onClick={() => addFavorite(props.id)}>Add fav</button>
          )} */}
        </div>
      </Card>
    </li>
  );
}

export default MeetupItems;
