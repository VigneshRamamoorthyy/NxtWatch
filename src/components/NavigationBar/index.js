import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import VideoContext from '../../context/videoContext'

import {
  NavigationBarContainer,
  MenuItemLists,
  MenuItemList,
  MenuItemContent,
  NavigationBarFooterContainer,
  FooterHeader,
  FooterIconContainer,
  FooterIcon,
  FooterDescription,
} from './styledComponents'

const activeTabIdConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  savedVideos: 'SAVEDVIDEOS',
  gaming: 'GAMING',
}

const NavigationBar = () => (
  <VideoContext.Consumer>
    {value => {
      const {activeTabId, setActiveTabId, isDarkTheme} = value
      const handleSetActiveTab = id => {
        setActiveTabId(id)
      }
      const navigationBarBgColor = isDarkTheme ? '#212121' : '#ffffff'
      const menuListtextColor = isDarkTheme ? '#d7dfe9' : '#313131'
      const activeMenuListTextColor = isDarkTheme ? '#d7dfe9' : '#313131'
      const menuListBackgroundColor = isDarkTheme ? '#383838' : '#e2e8f0'
      const footerHeaderColor = isDarkTheme ? '#f8fafc' : '#231f20'
      const footerDescriptionColor = isDarkTheme ? '#f8fafc' : ' #475569'
      return (
        <NavigationBarContainer style={{backgroundColor: navigationBarBgColor}}>
          <MenuItemLists>
            <MenuItemList
              as={Link}
              to="/"
              onClick={() => {
                handleSetActiveTab(activeTabIdConstants.home)
              }}
              style={{
                backgroundColor:
                  activeTabId === activeTabIdConstants.home
                    ? menuListBackgroundColor
                    : '',
              }}
            >
              <AiFillHome
                size="20"
                style={{
                  color:
                    activeTabId === activeTabIdConstants.home
                      ? ' #ff0b37'
                      : '#606060',
                }}
              />

              <MenuItemContent
                style={{
                  color:
                    activeTabId === activeTabIdConstants.home
                      ? activeMenuListTextColor
                      : menuListtextColor,
                  fontWeight:
                    activeTabId === activeTabIdConstants.home ? 800 : 500,
                }}
              >
                Home
              </MenuItemContent>
            </MenuItemList>
            <MenuItemList
              as={Link}
              to="/trending"
              onClick={() => {
                handleSetActiveTab(activeTabIdConstants.trending)
              }}
              style={{
                backgroundColor:
                  activeTabId === activeTabIdConstants.trending
                    ? menuListBackgroundColor
                    : '',
              }}
            >
              <HiFire
                size="20"
                color="#606060"
                style={{
                  color:
                    activeTabId === activeTabIdConstants.trending
                      ? ' #ff0b37'
                      : '#606060',
                }}
              />
              <MenuItemContent
                style={{
                  color:
                    activeTabId === activeTabIdConstants.trending
                      ? activeMenuListTextColor
                      : menuListtextColor,
                  fontWeight:
                    activeTabId === activeTabIdConstants.trending ? 800 : 500,
                }}
              >
                Trending
              </MenuItemContent>
            </MenuItemList>
            <MenuItemList
              as={Link}
              to="/gaming"
              onClick={() => {
                handleSetActiveTab(activeTabIdConstants.gaming)
              }}
              style={{
                backgroundColor:
                  activeTabId === activeTabIdConstants.gaming
                    ? menuListBackgroundColor
                    : '',
              }}
            >
              <SiYoutubegaming
                size="20"
                color="#606060"
                style={{
                  color:
                    activeTabId === activeTabIdConstants.gaming
                      ? ' #ff0b37'
                      : '#606060',
                }}
              />
              <MenuItemContent
                style={{
                  color:
                    activeTabId === activeTabIdConstants.gaming
                      ? activeMenuListTextColor
                      : menuListtextColor,
                  fontWeight:
                    activeTabId === activeTabIdConstants.gaming ? 800 : 500,
                }}
              >
                Gaming
              </MenuItemContent>
            </MenuItemList>
            <MenuItemList
              as={Link}
              to="/saved-videos"
              onClick={() => {
                handleSetActiveTab(activeTabIdConstants.savedVideos)
              }}
              style={{
                backgroundColor:
                  activeTabId === activeTabIdConstants.savedVideos
                    ? menuListBackgroundColor
                    : '',
              }}
            >
              <MdPlaylistAdd
                size="20"
                color="#606060"
                style={{
                  color:
                    activeTabId === activeTabIdConstants.savedVideos
                      ? ' #ff0b37'
                      : '#606060',
                }}
              />
              <MenuItemContent
                style={{
                  color:
                    activeTabId === activeTabIdConstants.savedVideos
                      ? activeMenuListTextColor
                      : menuListtextColor,
                  fontWeight:
                    activeTabId === activeTabIdConstants.savedVideos
                      ? 800
                      : 500,
                }}
              >
                Saved videos
              </MenuItemContent>
            </MenuItemList>
          </MenuItemLists>

          <NavigationBarFooterContainer>
            <FooterHeader style={{color: footerHeaderColor}}>
              CONTACT US
            </FooterHeader>
            <FooterIconContainer>
              <FooterIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <FooterIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <FooterIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </FooterIconContainer>
            <FooterDescription style={{color: footerDescriptionColor}}>
              Enjoy! Now to see your channels and recommendations!
            </FooterDescription>
          </NavigationBarFooterContainer>
        </NavigationBarContainer>
      )
    }}
  </VideoContext.Consumer>
)

export default NavigationBar
