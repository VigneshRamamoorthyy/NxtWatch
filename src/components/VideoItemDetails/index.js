import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoContext from '../../context/videoContext'

import {
  VideoItemDetailsContainer,
  VideoItemDetailsContentContainer,
  Player,
  VideoTitle,
  VideoCountPublishedDateCustomizeBtnContainer,
  VideoCountPublishedDate,
  VideoDetailText,
  NoResultsImg,
  NoResultsHeading,
  NoResultsDescription,
  NoResultsRetryButton,
  LoaderContainer,
  VideoCustomizeButtonsContainer,
  VideoCustomizeButton,
  VideoCustomizeButtonContent,
  Seprator,
  ChannelInfoContainer,
  ChannelLogo,
  ChannelInfoContentContainer,
  ChannelName,
  VideoDescription,
  NavigationBarVideoItemDetailContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    channelInfo: {},
    videoInfo: {},
    apiStatus: apiStatusConstants.initial,
    isVideoLiked: false,
    isVideoDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formatChannelInfo = data => ({
    name: data.name,
    profileImgUrl: data.profile_image_url,
    subscriberCount: data.subscriber_count,
  })

  formatVideoInfo = data => ({
    id: data.id,
    description: data.description,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    videoUrl: data.video_url,
    viewCount: data.view_count,
  })

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const channelInfo = this.formatChannelInfo(data.video_details.channel)
      const videoInfo = this.formatVideoInfo(data.video_details)

      this.setState({
        channelInfo,
        videoInfo,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = isDarkTheme => (
    <>
      <NoResultsImg
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <NoResultsHeading>Oops! Something Went Wrong</NoResultsHeading>
      <NoResultsDescription>
        We are having some trouble to complete your request. Please try again.
      </NoResultsDescription>
      <NoResultsRetryButton onClick={this.getVideoDetails}>
        Retry
      </NoResultsRetryButton>
    </>
  )

  renderLoaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onClickLikeButton = () => {
    this.setState(prevState => ({
      isVideoLiked: !prevState.isVideoLiked,
      isVideoDisLiked: false,
    }))
  }

  onClickDisLikeButton = () => {
    this.setState(prevState => ({
      isVideoDisLiked: !prevState.isVideoDisLiked,
      isVideoLiked: false,
    }))
  }

  renderVideoDetailsSuccessView = (
    addVideo,
    removeVideo,
    savedVideosList,
    isDarkTheme,
  ) => {
    const {videoInfo, channelInfo, isVideoLiked, isVideoDisLiked} = this.state

    const {id, videoUrl, title, publishedAt, viewCount, description} = videoInfo
    const {profileImgUrl, name, subscriberCount} = channelInfo

    // console.log(activeTab)
    console.log(savedVideosList)
    const isSaved = savedVideosList.some(eachVideo => eachVideo.id === id)
    // console.log(isSaved)
    const addOrRemoveItem = () => {
      if (isSaved) {
        removeVideo(id)
      } else {
        addVideo({...videoInfo, ...channelInfo})
      }
    }

    const onClickSaveButton = () => {
      addOrRemoveItem()
    }

    const videoTitleColor = isDarkTheme ? '#f1f1f1' : ''

    return (
      <>
        <Player url={videoUrl} controls />
        <VideoItemDetailsContentContainer>
          <VideoTitle style={{color: videoTitleColor}}>{title}</VideoTitle>
          <VideoCountPublishedDateCustomizeBtnContainer>
            <VideoCountPublishedDate>
              <VideoDetailText>{viewCount} views</VideoDetailText>
              <BsDot
                style={{color: '#475569', marginBottom: '8px'}}
                size={20}
              />
              <VideoDetailText>
                {formatDistanceToNow(new Date(publishedAt), {
                  addSuffix: true,
                })
                  .split(' ')
                  .slice(1)
                  .join(' ')}
              </VideoDetailText>
            </VideoCountPublishedDate>

            <VideoCustomizeButtonsContainer>
              <VideoCustomizeButton
                onClick={this.onClickLikeButton}
                style={{color: isVideoLiked ? '#2563eb' : '#64748b'}}
              >
                <BiLike size={20} />
                <VideoCustomizeButtonContent>Like</VideoCustomizeButtonContent>
              </VideoCustomizeButton>
              <VideoCustomizeButton
                onClick={this.onClickDisLikeButton}
                style={{color: isVideoDisLiked ? '#2563eb' : '#64748b'}}
              >
                <BiDislike size={20} />
                <VideoCustomizeButtonContent>
                  Dislike
                </VideoCustomizeButtonContent>
              </VideoCustomizeButton>
              <VideoCustomizeButton
                onClick={onClickSaveButton}
                style={{
                  color: isSaved ? '#2563eb' : '#64748b',
                }}
              >
                <BiListPlus size={20} />
                <VideoCustomizeButtonContent>
                  {isSaved ? 'Saved' : 'Save'}
                </VideoCustomizeButtonContent>
              </VideoCustomizeButton>
            </VideoCustomizeButtonsContainer>
          </VideoCountPublishedDateCustomizeBtnContainer>
          <Seprator />
          <ChannelInfoContainer>
            <ChannelLogo src={profileImgUrl} alt="channel logo" />
            <ChannelInfoContentContainer>
              <ChannelName style={{color: videoTitleColor}}>{name}</ChannelName>
              <VideoDetailText>{subscriberCount} subscribers</VideoDetailText>
            </ChannelInfoContentContainer>
          </ChannelInfoContainer>
          <VideoDescription style={{color: videoTitleColor}}>
            {description}
          </VideoDescription>
        </VideoItemDetailsContentContainer>
      </>
    )
  }

  renderVideoDetails = (
    addVideo,
    removeVideo,
    savedVideosList,
    isDarkTheme,
  ) => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderVideoDetailsSuccessView(
          addVideo,
          removeVideo,
          savedVideosList,
          isDarkTheme,
        )
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <VideoContext.Consumer>
        {value => {
          const {addVideo, removeVideo, savedVideosList, isDarkTheme} = value
          const videoDetailsBgColor = isDarkTheme ? '#0f0f0f ' : '#f9f9f9'
          return (
            <>
              <Header />
              <NavigationBarVideoItemDetailContainer>
                <NavigationBar />
                <VideoItemDetailsContainer
                  data-testid="videoItemDetails"
                  style={{backgroundColor: videoDetailsBgColor}}
                >
                  {this.renderVideoDetails(
                    addVideo,
                    removeVideo,
                    savedVideosList,
                    isDarkTheme,
                  )}
                </VideoItemDetailsContainer>
              </NavigationBarVideoItemDetailContainer>
            </>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default VideoItemDetails
