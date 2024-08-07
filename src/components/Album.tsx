import { useState } from 'react';
import { useFetch, useLocalStorage, useInfiniteScroll } from '../hooks';
import Photo from './Photo';
import { PhotoContainer, PhotoGrid as Grid } from '../styles';
import Loader from './Loader';

const Album: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const { data, error, loading } = useFetch(page);

  const [favourites, setFavourites] = useLocalStorage({
    key: 'vinted-test-favourites',
    defaultValue: [],
  });

  const favourite = (id: string) => {
    const index = favourites.indexOf(id);
    const newFavourites = [...favourites];
    if (index >= 0) {
      newFavourites.splice(index, 1);
    } else {
      newFavourites.push(id);
    }
    setFavourites(newFavourites);
  }
  
  return (
    <PhotoContainer>
      <Grid>
        {data?.map((photo, idx) =>
          <Photo
            key={idx}
            photo={photo}
            isLiked={favourites.indexOf(photo.id) >= 0}
            addToFavourites={favourite}
          />
        )}
      </Grid>
      {error && <h4>Error loading data!</h4>}
      {loading && <Loader />}
    </PhotoContainer>
  )
}

export default Album;