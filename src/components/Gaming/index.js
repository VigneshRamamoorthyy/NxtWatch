import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'

import GamingVideoItem from '../GamingVideoItem'

import NavigationBar from '../NavigationBar'

import VideoContext from '../../context/videoContext'

import {
  GamingBannerContainer,
  GamingIconContainer,
  GamingBannerText,
  GamingContainer,
  GamingLists,
  NoResultsImg,
  NoResultsHeading,
  NoResultsDescription,
  NoResultsRetryButton,
  LoaderContainer,
  GamingBackgroundContainer,
  NavigationBarGamgingContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingListDetails: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingDetails()
  }

  getGamingDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

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
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      // console.log(formattedData)
      this.setState({
        gamingListDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingSuccessView = () => {
    const {gamingListDetails} = this.state
    return (
      <GamingLists>
        {gamingListDetails.map(eachGame => (
          <GamingVideoItem gameDetails={eachGame} key={eachGame.id} />
        ))}
      </GamingLists>
    )
  }

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
          We are having some trouble to complete your request. Please try
          again.
        </NoResultsDescription>
        <NoResultsRetryButton onClick={this.onClickRetryButton}>
          Retry
        </NoResultsRetryButton>
      </>
    )
  }

  renderGamingView = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderGamingSuccessView()
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
          const gamingBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9 '
          return (
            <>
              <Header />
              <NavigationBarGamgingContainer>
                <NavigationBar />
                <GamingBackgroundContainer>
                  <GamingBannerContainer
                    data-testid="banner"
                    style={{backgroundColor: bannerBgColor}}
                  >
                    <GamingIconContainer
                      style={{backgroundColor: bannerIconBgColor}}
                    >
                      <SiYoutubegaming size={20} color="#ff0000" />
                    </GamingIconContainer>
                    <GamingBannerText style={{color: bannerTextColor}}>
                      Gaming
                    </GamingBannerText>
                  </GamingBannerContainer>
                  <GamingContainer
                    data-testid="gaming"
                    style={{backgroundColor: gamingBgColor}}
                  >
                    {this.renderGamingView(isDarkTheme)}
                  </GamingContainer>
                </GamingBackgroundContainer>
              </NavigationBarGamgingContainer>
            </>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Gaming
