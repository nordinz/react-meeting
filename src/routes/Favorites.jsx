import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../Components/meetups/MeetupList';

function FavoritesPage() {
  const { favorites, totalFavorites } = useContext(FavoritesContext);
  console.log(favorites);
  let content;
  if (totalFavorites === 0) {
    content = <p>No fav yet, add some?</p>;
  } else {
    content = <MeetupList meetups={favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
