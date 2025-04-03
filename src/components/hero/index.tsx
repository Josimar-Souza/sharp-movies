import { useContext } from 'react';
import { moviesContext } from '../../contex/moviesContext';

const imageBaseUrl = import.meta.env.VITE_API_IMAGE_BASE_URL;

import {
  HeroContainer,
  HeroImage,
  LeftSideFade,
} from './heroStyles';

function Hero() {
  const { moviesLists } = useContext(moviesContext);

  const getMovieBackdropImage = () => {
    const randomMovie = moviesLists?.topRated[Math.floor(Math.random() * 20)];

    if (randomMovie != undefined) {
      return `${imageBaseUrl}${randomMovie.backdrop_path}`;
    }

    return '';
  };

  return (
    <HeroContainer>
      <HeroImage src={getMovieBackdropImage()} />
      <LeftSideFade />
    </HeroContainer>
  )
}

export default Hero;
