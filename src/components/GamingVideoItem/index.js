import {Link} from 'react-router-dom'

import VideoContext from '../../context/videoContext'

import {
  GamingList,
  GamingImg,
  GamingTitle,
  GamingViewCount,
  GamingViewCountContainer,
} from './styledComponents'

const GamingVideoItem = props => {
  const {gameDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gameDetails
  return (
    <VideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const titleColor = isDarkTheme ? '#f4f4f4' : '#424242'
        return (
          <GamingList
            as={Link}
            to={`/videos/${id}`}
            style={{textDecoration: 'none'}}
          >
            <GamingImg src={thumbnailUrl} alt="video thumbnail" />
            <GamingTitle style={{color: titleColor}}>{title}</GamingTitle>
            <GamingViewCountContainer>
              <GamingViewCount>{viewCount} Watching</GamingViewCount>
              <GamingViewCount>WorldWide</GamingViewCount>
            </GamingViewCountContainer>
          </GamingList>
        )
      }}
    </VideoContext.Consumer>
  )
}

export default GamingVideoItem
