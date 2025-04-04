import { useContext, useState, useEffect } from 'react';
import { moviesContext } from '../../contex/moviesContext';
import { MovieType } from '../../helpers/types/moviesTypes';
import Title from '../base/title';
import Paragraph from '../base/paragraph';

const imageBaseUrl = import.meta.env.VITE_API_IMAGE_BASE_URL;

import {
  HeroContainer,
  HeroImage,
  LeftSideFade,
  InfosContainer,
  TitleSection,
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

  const getVoteValue = () => {
    if (movie?.vote_average != undefined) {
      return (movie.vote_average / 10) * 100;
    }

    return 0;
  };

  console.log(movie);
  return (
    <HeroContainer>
      <HeroImage
        src={`${imageBaseUrl}${movie?.backdrop_path}`}
        alt={`${movie?.title} backdrop image`}
      />
      <LeftSideFade />
      <InfosContainer>
        <TitleSection>
          <Title
            textcolor="white"
            fontSize="3em"
            width="70%"
          >
            {movie?.title}
          </Title>
          <Paragraph
            textcolor="white"
            fontSize="1.2em"
            borderRadius='50%'
            backgroundColor="green"
            padding="15px 10px 15px 10px"
            margin="20px"
          >
            { getVoteValue().toFixed(0) }%
          </Paragraph>
        </TitleSection>
        <Paragraph
            textcolor="white"
            fontSize="1.5em"
          >
            { `Release date: ${movie?.release_date}` }
          </Paragraph>
      </InfosContainer>
    </HeroContainer>
  )
}

export default Hero;
