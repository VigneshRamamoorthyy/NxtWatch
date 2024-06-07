import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'

import VideoContext from '../../context/videoContext'

import {
  VideoList,
  VideoThumbnail,
  VideoProfileImgDetailsContainer,
  VideoProfileImg,
  VideoDetailsContainer,
  VideoTitle,
  VideoDetails,
  VideoDetailText,
  VideoCountPublishedDate,
} from './styledComponents'

import './index.css'

const VideoItem = props => {
  const {videoDetails} = props

  const {
    id,
    name,
    profileImgUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    nothing,
  } = videoDetails

  return (
    <VideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const titleColor = isDarkTheme ? '#f4f4f4' : '#424242'
        return (
          <VideoList as={Link} to={`/videos/${id}`} className="video-link">
            <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoProfileImgDetailsContainer>
              <VideoProfileImg src={profileImgUrl} alt="channel logo" />
              <VideoDetailsContainer>
                <VideoTitle style={{color: titleColor}}>{title}</VideoTitle>
                <VideoDetails>
                  <VideoDetailText>{name}</VideoDetailText>
                  <VideoCountPublishedDate>
                    <BsDot
                      className="Video-detail-dot video-count-dot"
                      size={20}
                    />
                    <VideoDetailText>{viewCount} views</VideoDetailText>
                    <BsDot className="Video-detail-dot" size={20} />
                    <VideoDetailText>
                      {formatDistanceToNow(new Date(publishedAt), {
                        addSuffix: true,
                      })
                        .split(' ')
                        .slice(1)
                        .join(' ')}
                    </VideoDetailText>
                  </VideoCountPublishedDate>
                </VideoDetails>
              </VideoDetailsContainer>
            </VideoProfileImgDetailsContainer>
          </VideoList>
        )
      }}
    </VideoContext.Consumer>
  )
}

export default VideoItem
