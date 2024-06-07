import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {IoIosClose, IoIosSearch} from 'react-icons/io'

import Header from '../Header'

import VideoItem from '../VideoItem'

import NavigationBar from '../NavigationBar'

import VideoContext from '../../context/videoContext'

import {
  HomeContainer,
  HomeBackgroundContainer,
  BannerContainer,
  BannerContentCloseButton,
  BannerContent,
  BannerLogo,
  BannerDescription,
  BannerButton,
  BannerCloseButton,
  SearchInputButtonContainer,
  SearchInputField,
  SearchButton,
  HomeVideoLists,
  NoResultsImg,
  NoResultsHeading,
  NoResultsDescription,
  NoResultsRetryButton,
  LoaderContainer,
  NavigationBarHomeContainer,
  FailureHeading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videoListDetails: [],
    searchInputText: '',
    apiStatus: apiStatusConstants.initial,
    isBannerClosed: true,
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchInputText} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInputText}`

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
        videoListDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInputText: event.target.value,
    })
  }

  onClickSearchcButton = () => {
    this.getVideosDetails()
  }

  onClickRetryButton = () => {
    this.getVideosDetails()
  }

  onClickCloseBanner = () => {
    this.setState(prevState => ({
      isBannerClosed: !prevState,
    }))
  }

  renderBannerContainer = () => (
    <BannerContainer data-testid="banner">
      <BannerContentCloseButton>
        <BannerContent>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerDescription>
          <BannerButton>GET IT NOW</BannerButton>
        </BannerContent>
        <BannerCloseButton
          data-testid="close"
          onClick={this.onClickCloseBanner}
        >
          <IoIosClose size={25} />
        </BannerCloseButton>
      </BannerContentCloseButton>
    </BannerContainer>
  )

  renderSearchInputContainer = isDarkTheme => {
    const searchInputBgcolor = isDarkTheme ? '#181818' : '#f9f9f9'
    const buttonBgColor = isDarkTheme ? '#303030' : '#f9f9f9'
    const searchInputBorderColor = isDarkTheme ? '#606060' : '#cccccc'
    const inputTextColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
    const {searchInputText} = this.state

    return (
      <SearchInputButtonContainer
        style={{
          borderColor: searchInputBorderColor,
        }}
      >
        <SearchInputField
          type="search"
          placeholder="Search"
          onChange={this.onChangeSearchInput}
          value={searchInputText}
          style={{
            backgroundColor: searchInputBgcolor,
            color: inputTextColor,
          }}
        />
        <SearchButton
          data-testid="searchButton"
          onClick={this.onClickSearchcButton}
          style={{
            backgroundColor: buttonBgColor,
            borderColor: searchInputBorderColor,
          }}
        >
          <IoIosSearch
            size={20}
            style={{color: isDarkTheme ? '#606060' : ''}}
          />
        </SearchButton>
      </SearchInputButtonContainer>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderHomeVideoListsView = isDarkTheme => {
    const titleColor = isDarkTheme ? '#f9f9f9' : '#231f20'
    const {videoListDetails} = this.state

    const novideos = videoListDetails.length === 0

    return novideos ? (
      <>
        <NoResultsImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoResultsHeading style={{color: titleColor}}>
          No Search results found
        </NoResultsHeading>
        <NoResultsDescription>
          Try different key words or remove search filter
        </NoResultsDescription>
        <NoResultsRetryButton onClick={this.onClickRetryButton}>
          Retry
        </NoResultsRetryButton>
      </>
    ) : (
      <>
        <HomeVideoLists>
          {videoListDetails.map(eachVideo => (
            <VideoItem videoDetails={eachVideo} key={eachVideo.id} />
          ))}
        </HomeVideoLists>
      </>
    )
  }

  renderFailureView = isDarkTheme => {
    const titleColor = isDarkTheme ? '#f9f9f9' : '#231f20'
    // console.log(`Failure ${isDarkTheme}`)
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
        <FailureHeading style={{color: titleColor}}>
          Oops! Something Went Wrong
        </FailureHeading>
        <NoResultsDescription>
          We are having some trouble to complete your request. Please try again.
        </NoResultsDescription>
        <NoResultsRetryButton onClick={this.onClickRetryButton}>
          Retry
        </NoResultsRetryButton>
      </>
    )
  }

  renderOutputView = isDarkTheme => {
    const {apiStatus} = this.state
    console.log(isDarkTheme)
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderHomeVideoListsView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    const {isBannerClosed} = this.state
    return (
      <VideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgcolor = isDarkTheme ? '#181818' : '#f9f9f9'
          return (
            <>
              <Header />
              <NavigationBarHomeContainer>
                <NavigationBar />
                <HomeBackgroundContainer>
                  {isBannerClosed ? this.renderBannerContainer() : ''}
                  <HomeContainer
                    data-testid="home"
                    style={{backgroundColor: bgcolor}}
                  >
                    {this.renderSearchInputContainer(isDarkTheme)}
                    {this.renderOutputView(isDarkTheme)}
                  </HomeContainer>
                </HomeBackgroundContainer>
              </NavigationBarHomeContainer>
            </>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Home
