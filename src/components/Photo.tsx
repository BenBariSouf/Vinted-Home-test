import { useCallback, useEffect, useRef, useState } from 'react';
import LikeIcon from './HeartIcon';
import { Frame, Content, Separator } from '../styles/StyledPhoto';
import { IPhoto } from '../types';
import { useLazyLoad } from "../hooks";

import { catchErrors, constructURL, getPhoto } from '../utils';

const Photo: React.FC<IPhoto> = ({ photo, isLiked, addToFavourites }) => {
  const {id, owner, ownername, title} = photo;
  const [author, setAuthor] = useState(ownername);

  const photoRef = useRef<HTMLImageElement>(null);

  const thumbnailPhoto = getPhoto(photo, true);

  const fetchData = useCallback(async () => {
    await fetch(constructURL(null, owner))
      .then(res => res.json())
      .then(result => {
          if (result?.profile?.first_name || result?.profile?.last_name) {
            setAuthor(`${result.profile?.first_name} ${result.profile?.last_name}`)
          }
        }
      )
  }, [owner]);


  useEffect(() => {
   catchErrors(fetchData());
  }, [fetchData]);

  return (
    <Frame>
      <Content>
        <img
          ref={photoRef}
          src={thumbnailPhoto}
          alt={title}
        />
        {isLiked && <LikeIcon />}

        <div className="content">
          <div className="info">
            <div className="title">{title}</div>
            <Separator />
            <div className="author">{author}</div>
          </div>
          <div className="favourite-container">
            <input
              type='button'
              className='favourite'
              onClick={() => addToFavourites(id)}
              value={isLiked ? 'Unfavourite' : 'Favourite'}
            />
          </div>
        </div>
      </Content>
    </Frame>
  )
}

export default Photo;