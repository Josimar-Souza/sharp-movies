import { useContext, useState, useEffect } from 'react';
import { moviesContext } from '../../contex/moviesContext';
import { MovieType } from '../../helpers/types/moviesTypes';

const imageBaseUrl = import.meta.env.VITE_API_IMAGE_BASE_URL;

import {
  HeroContainer,
  HeroImage,
  LeftSideFade,
} from './heroStyles';

function Hero() {
  const [movie, setMovie] = useState<MovieType>();

  const { moviesLists } = useContext(moviesContext);

  useEffect(() => {
    const getRandomMovie = () => {
      const randomMovie = moviesLists?.topRated[Math.floor(Math.random() * 20)];

      setMovie(randomMovie);
    };

    getRandomMovie()
  }, [moviesLists]);

  return (
    <HeroContainer>
      <HeroImage
        src={`${imageBaseUrl}${movie?.backdrop_path}`}
        alt={`${movie?.title} backdrop image`}
      />
      <LeftSideFade />
    </HeroContainer>
  )
}

export default Hero;
