import Header from '../Header'

import VideoContext from '../../context/videoContext'

import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <VideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundHeadingColor = isDarkTheme ? '#f1f1f1' : '#000000'
      const NotFoundContainerBgColor = isDarkTheme ? '#181818' : '#ffffff'
      return (
        <>
          <Header />
          <NotFoundContainer
            style={{backgroundColor: NotFoundContainerBgColor}}
          >
            <NotFoundImg
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <NotFoundHeading style={{color: notFoundHeadingColor}}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundDescription>
              We are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </NotFoundContainer>
        </>
      )
    }}
  </VideoContext.Consumer>
)

export default NotFound
