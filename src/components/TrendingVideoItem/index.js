import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'

import VideoContext from '../../context/videoContext'

import {
  TrendingVideoList,
  TrendingVideoThumbnail,
  TrendingVideoProfileImgDetailsContainer,
  TrendingVideoProfileImg,
  TrendingVideoDetailsContainer,
  TrendingVideoTitle,
  TrendingVideoDetails,
  TrendingVideoDetailText,
  TrendingVideoCountPublishedDate,
} from './styledComponents'

import './index.css'

const TrendingVideoItem = props => {
  const {videoDetails} = props

  const {
    id,
    name,
    profileImgUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    nope,
  } = videoDetails

  return (
    <VideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const titleColor = isDarkTheme ? '#f4f4f4' : '#424242'
        return (
          <TrendingVideoList
            as={Link}
            to={`/videos/${id}`}
            style={{textDecoration: 'none'}}
          >
            <TrendingVideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <TrendingVideoProfileImgDetailsContainer>
              <TrendingVideoProfileImg src={profileImgUrl} alt="channel logo" />
              <TrendingVideoDetailsContainer>
                <TrendingVideoTitle style={{color: titleColor}}>
                  {title}
                </TrendingVideoTitle>
                <TrendingVideoDetails>
                  <TrendingVideoDetailText>{name}</TrendingVideoDetailText>
                  <TrendingVideoCountPublishedDate>
                    <BsDot
                      className="trending-video-detail-dot trending-video-count-dot"
                      size={20}
                    />
                    <TrendingVideoDetailText>
                      {viewCount} views
                    </TrendingVideoDetailText>
                    <BsDot className="trending-video-detail-dot" size={20} />
                    <TrendingVideoDetailText>
                      {formatDistanceToNow(new Date(publishedAt), {
                        addSuffix: true,
                      })
                        .split(' ')
                        .slice(1)
                        .join(' ')}
                    </TrendingVideoDetailText>
                  </TrendingVideoCountPublishedDate>
                </TrendingVideoDetails>
              </TrendingVideoDetailsContainer>
            </TrendingVideoProfileImgDetailsContainer>
          </TrendingVideoList>
        )
      }}
    </VideoContext.Consumer>
  )
}

export default TrendingVideoItem
