import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import TrendingVideoItem from '../TrendingVideoItem'
import VideoContext from '../../context/videoContext'
import NavigationBar from '../NavigationBar'

import {
  SavedVideosBackgroundContainer,
  SavedVideosBannerContainer,
  SavedVideosIconContainer,
  SavedVideosBannerText,
  SavedVideoContainer,
  SavedVideoLists,
  NoSavedVideosImg,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
  NavigationBarSavedVideosContainer,
} from './styledComponents'

const SavedVideos = () => {
  const renderNoVideoView = isDarkTheme => {
    const noVideoTextColor = isDarkTheme ? '#f9f9f9' : '#231f20'
    return (
      <>
        <NoSavedVideosImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <NoSavedVideosHeading style={{color: noVideoTextColor}}>
          No saved videos found
        </NoSavedVideosHeading>
        <NoSavedVideosDescription style={{color: noVideoTextColor}}>
          You can save your videos while watching them
        </NoSavedVideosDescription>
      </>
    )
  }

  const renderSavedVideosList = (savedVideosList, isDarkTheme) => {
    const bannerIconBgColor = isDarkTheme ? '#0f0f0f' : '#e2e8f0'
    const bannerBgColor = isDarkTheme ? '#181818' : '#f1f1f1'
    const bannerTextColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
    const savedVideosBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9 '
    console.log(`savedVideos ${isDarkTheme}`)
    return (
      <>
        <SavedVideosBannerContainer
          data-testid="savedVideos"
          style={{backgroundColor: bannerBgColor}}
        >
          <SavedVideosIconContainer
            style={{backgroundColor: bannerIconBgColor}}
          >
            <HiFire size={20} color="#ff0000" />
          </SavedVideosIconContainer>
          <SavedVideosBannerText style={{color: bannerTextColor}}>
            Saved Videos
          </SavedVideosBannerText>
        </SavedVideosBannerContainer>
        <SavedVideoContainer
          data-testid="savedVideos"
          style={{backgroundColor: savedVideosBgColor}}
        >
          <SavedVideoLists>
            {savedVideosList.map(eachVideo => (
              <TrendingVideoItem videoDetails={eachVideo} key={eachVideo.id} />
            ))}
          </SavedVideoLists>
        </SavedVideoContainer>
      </>
    )
  }

  return (
    <VideoContext.Consumer>
      {value => {
        const {savedVideosList, isDarkTheme} = value
        const showEmptyView = savedVideosList.length === 0
        const savedVideosBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        return (
          <>
            <Header />
            <NavigationBarSavedVideosContainer>
              <NavigationBar />
              <SavedVideosBackgroundContainer
                data-testid="savedVideos"
                style={{backgroundColor: savedVideosBgColor}}
              >
                {showEmptyView
                  ? renderNoVideoView(isDarkTheme)
                  : renderSavedVideosList(savedVideosList, isDarkTheme)}
              </SavedVideosBackgroundContainer>
            </NavigationBarSavedVideosContainer>
          </>
        )
      }}
    </VideoContext.Consumer>
  )
}

export default SavedVideos
