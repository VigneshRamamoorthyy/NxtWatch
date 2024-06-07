import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'

import TrendingVideoItem from '../TrendingVideoItem'

import NavigationBar from '../NavigationBar'

import VideoContext from '../../context/videoContext'

import {
  TrendingBannerContainer,
  TrendingIconContainer,
  TrendingBannerText,
  TrendingContainer,
  TrendingVideoLists,
  NoResultsImg,
  NoResultsHeading,
  NoResultsDescription,
  NoResultsRetryButton,
  LoaderContainer,
  NavigationBarTrendingContainer,
  TrendingBackgroundContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideoListDetails: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideosDetails()
  }

  getTrendingVideosDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const formattedData = data.videos.map(eachVideo => ({
        name: eachVideo.channel.name,
        profileImgUrl: eachVideo.channel.profile_image_url,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        trendingVideoListDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderTrendingVideoSuccessView = () => {
    const {trendingVideoListDetails} = this.state
    return (
      <>
        <TrendingVideoLists>
          {trendingVideoListDetails.map(eachVideo => (
            <TrendingVideoItem videoDetails={eachVideo} key={eachVideo.id} />
          ))}
        </TrendingVideoLists>
      </>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = isDarkTheme => {
    const titleColor = isDarkTheme ? '#f9f9f9' : '#231f20'

    return (
      <>
        <NoResultsImg
          src={
            isDarkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          }
          alt="failure view"
        />
        <NoResultsHeading style={{color: titleColor}}>
          Oops! Something Went Wrong
        </NoResultsHeading>
        <NoResultsDescription>
          We are having some trouble to complete your request. Please tray
          again.
        </NoResultsDescription>
        <NoResultsRetryButton onClick={this.onClickRetryButton}>
          Retry
        </NoResultsRetryButton>
      </>
    )
  }

  renderTrendingVideos = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderTrendingVideoSuccessView(isDarkTheme)
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
          const {isDarkTheme} = value
          const bannerIconBgColor = isDarkTheme ? '#0f0f0f' : '#e2e8f0'
          const bannerBgColor = isDarkTheme ? '#181818' : '#f1f1f1'
          const bannerTextColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
          const trendingBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9 '
          return (
            <>
              <Header />
              <NavigationBarTrendingContainer>
                <NavigationBar />
                <TrendingBackgroundContainer>
                  <TrendingBannerContainer
                    data-testid="banner"
                    style={{backgroundColor: bannerBgColor}}
                  >
                    <TrendingIconContainer
                      style={{backgroundColor: bannerIconBgColor}}
                    >
                      <HiFire size={25} color="#ff0000" />
                    </TrendingIconContainer>
                    <TrendingBannerText style={{color: bannerTextColor}}>
                      Trending
                    </TrendingBannerText>
                  </TrendingBannerContainer>
                  <TrendingContainer
                    data-testid="trending"
                    style={{backgroundColor: trendingBgColor}}
                  >
                    {this.renderTrendingVideos(isDarkTheme)}
                  </TrendingContainer>
                </TrendingBackgroundContainer>
              </NavigationBarTrendingContainer>
            </>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Trending
