import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideoContext from './context/videoContext'

import './App.css'

class App extends Component {
  state = {
    savedVideosList: [],
    activeTabId: 'HOME',
    isDarkTheme: false,
  }

  addVideo = video => {
    const {savedVideosList} = this.state
    const videoObject = savedVideosList.find(
      eachVideoItem => eachVideoItem.id === video.id,
    )
    if (!videoObject) {
      const updatedSavedVideoList = [...savedVideosList, video]
      this.setState({
        savedVideosList: updatedSavedVideoList,
      })
    }
  }

  removeVideo = id => {
    const {savedVideosList} = this.state
    const updatedSavedVideoList = savedVideosList.filter(
      eachVideoItem => eachVideoItem.id !== id,
    )
    this.setState({
      savedVideosList: updatedSavedVideoList,
    })
  }

  setActiveTabId = id => {
    this.setState({
      activeTabId: id,
    })
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {savedVideosList, activeTabId, isDarkTheme} = this.state
    return (
      <VideoContext.Provider
        value={{
          savedVideosList,
          activeTabId,
          isDarkTheme,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
          setActiveTabId: this.setActiveTabId,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </VideoContext.Provider>
    )
  }
}

export default App
