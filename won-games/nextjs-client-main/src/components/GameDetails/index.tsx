import Heading from 'components/Heading'
import { Linux, Windows, Apple } from '@styled-icons/fa-brands'

import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'
type platform = 'linux' | 'windows' | 'mac'
export type GameDetailsProps = {
  platforms: platform[]
  developer: string
  releaseDate: string
  rating: Rating
  genres: string[]
  publisher: string
}

const GameDetails = ({
  platforms,
  developer,
  genres,
  rating,
  publisher,
  releaseDate
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="linux" size={18} />,
    windows: <Windows title="windows" size={18} />,
    mac: <Apple title="mac" size={18} />
  }
  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary" color="white">
          Game details
        </Heading>
      </MediaMatch>
      <S.Content>
        <div>
          <S.Title>Company</S.Title>
          <S.Description>{developer}</S.Description>
        </div>
        <div>
          <S.Title>Release date</S.Title>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              year: 'numeric',
              month: 'short'
            }).format(new Date(releaseDate))}
          </S.Description>
        </div>
        <div>
          <S.Title>Platforms</S.Title>
          <S.IconsWrapper>
            {platforms.map((icon) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </div>
        <div>
          <S.Title>Publisher</S.Title>
          <S.Description>{publisher}</S.Description>
        </div>
        <div>
          <S.Title>Rating</S.Title>
          <S.Description>
            {rating === 'BR0' ? 'FREE' : rating.replace('BR', '').concat(' +')}
          </S.Description>
        </div>
        <div>
          <S.Title>Genre</S.Title>
          <S.Description>{genres.join(' / ')}</S.Description>
        </div>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
