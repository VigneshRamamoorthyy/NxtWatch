import React from 'react'

const activeTabIdConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  savedVideos: 'SAVEDVIDEOS',
  gaming: 'GAMING',
}

const VideoContext = React.createContext({
  savedVideosList: [],
  addVideo: () => {},
  removeVideo: () => {},
  activeTabId: activeTabIdConstants.home,
  setActiveTabId: () => {},
  isDarkTheme: false,
  toggleTheme: () => {},
})

export default VideoContext
