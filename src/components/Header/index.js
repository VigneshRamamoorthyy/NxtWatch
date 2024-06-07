import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import VideoContext from '../../context/videoContext'

import './index.css'

import {
  NavHeader,
  NavContent,
  NavLogo,
  NavMenuItems,
  NavItem,
  NavButton,
  LogoutModalContainer,
  LogoutModalHeading,
  LogoutButtonContainer,
  CancelButton,
  ConfirmButton,
  MenuModalContainer,
  CloseButton,
  MenuItemLists,
  MenuItemList,
  MenuItemContent,
  ProfileImg,
  LogoutButton,
} from './styledComponents'

const activeTabIdConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  savedVideos: 'SAVEDVIDEOS',
  gaming: 'GAMING',
}

const Header = props => {
  const onClickConfirmLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <VideoContext.Consumer>
      {value => {
        const {activeTabId, setActiveTabId, isDarkTheme, toggleTheme} = value
        const handleSetActiveTab = id => {
          setActiveTabId(id)
        }

        const onToggleTheme = () => {
          toggleTheme()
        }

        const bgColor = isDarkTheme ? '#212121' : '#ffffff'
        const iconColor = isDarkTheme ? 'ffffff' : '#0f0f0f'
        const menuListtextColor = isDarkTheme ? '#d7dfe9' : '#313131'
        const activeMenuListTextColor = isDarkTheme ? '#d7dfe9' : '#313131'
        const menuListBackgroundColor = isDarkTheme ? '#383838' : '#e2e8f0'
        const logoutButtonColor = isDarkTheme ? '#f1f1f1' : '#3b82f6'

        return (
          <NavHeader style={{backgroundColor: bgColor}}>
            <NavContent>
              <Link to="/">
                <NavLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                  onClick={() => {
                    handleSetActiveTab(activeTabIdConstants.home)
                  }}
                />
              </Link>

              <NavMenuItems>
                <NavItem>
                  <NavButton data-testid="theme" onClick={onToggleTheme}>
                    {isDarkTheme ? (
                      <FiSun size={25} style={{color: iconColor}} />
                    ) : (
                      <FaMoon size={25} style={{color: iconColor}} />
                    )}
                  </NavButton>
                </NavItem>
                <NavItem className="nav-menu-item">
                  <Popup
                    modal
                    trigger={
                      <NavButton>
                        <GiHamburgerMenu size={25} style={{color: iconColor}} />
                      </NavButton>
                    }
                  >
                    {close => (
                      <MenuModalContainer style={{backgroundColor: bgColor}}>
                        <CloseButton
                          type="button"
                          onClick={() => {
                            close()
                          }}
                        >
                          <IoMdClose size={30} style={{color: iconColor}} />
                        </CloseButton>

                        <MenuItemLists>
                          <MenuItemList
                            as={Link}
                            to="/"
                            onClick={() => {
                              close()
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
                                  activeTabId === activeTabIdConstants.home
                                    ? 800
                                    : 500,
                              }}
                            >
                              Home
                            </MenuItemContent>
                          </MenuItemList>
                          <MenuItemList
                            as={Link}
                            to="/trending"
                            onClick={() => {
                              close()
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
                                  activeTabId === activeTabIdConstants.trending
                                    ? 800
                                    : 500,
                              }}
                            >
                              Trending
                            </MenuItemContent>
                          </MenuItemList>
                          <MenuItemList
                            as={Link}
                            to="/gaming"
                            onClick={() => {
                              close()
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
                                  activeTabId === activeTabIdConstants.gaming
                                    ? 800
                                    : 500,
                              }}
                            >
                              Gaming
                            </MenuItemContent>
                          </MenuItemList>
                          <MenuItemList
                            as={Link}
                            to="/saved-videos"
                            onClick={() => {
                              close()
                              handleSetActiveTab(
                                activeTabIdConstants.savedVideos,
                              )
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
                                  activeTabId ===
                                  activeTabIdConstants.savedVideos
                                    ? ' #ff0b37'
                                    : '#606060',
                              }}
                            />
                            <MenuItemContent
                              style={{
                                color:
                                  activeTabId ===
                                  activeTabIdConstants.savedVideos
                                    ? activeMenuListTextColor
                                    : menuListtextColor,
                                fontWeight:
                                  activeTabId ===
                                  activeTabIdConstants.savedVideos
                                    ? 800
                                    : 500,
                              }}
                            >
                              Saved videos
                            </MenuItemContent>
                          </MenuItemList>
                        </MenuItemLists>
                      </MenuModalContainer>
                    )}
                  </Popup>
                </NavItem>
                <NavItem className="nav-profile-item">
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavItem>
                <NavItem className="nav-menu-item">
                  <Popup
                    modal
                    trigger={
                      <NavButton>
                        <FiLogOut size={25} style={{color: iconColor}} />
                      </NavButton>
                    }
                  >
                    {close => (
                      <LogoutModalContainer style={{backgroundColor: bgColor}}>
                        <LogoutModalHeading style={{color: menuListtextColor}}>
                          Are you sure you want to logout?
                        </LogoutModalHeading>
                        <LogoutButtonContainer>
                          <CancelButton type="button" onClick={() => close()}>
                            Cancel
                          </CancelButton>
                          <ConfirmButton onClick={onClickConfirmLogout}>
                            Confirm
                          </ConfirmButton>
                        </LogoutButtonContainer>
                      </LogoutModalContainer>
                    )}
                  </Popup>
                </NavItem>
                <NavItem className="nav-profile-item">
                  <Popup
                    modal
                    trigger={
                      <LogoutButton
                        style={{
                          color: logoutButtonColor,
                          borderColor: logoutButtonColor,
                        }}
                      >
                        Logout
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <LogoutModalContainer style={{backgroundColor: bgColor}}>
                        <LogoutModalHeading style={{color: menuListtextColor}}>
                          Are you sure, you want to logout?
                        </LogoutModalHeading>
                        <LogoutButtonContainer>
                          <CancelButton type="button" onClick={() => close()}>
                            Cancel
                          </CancelButton>
                          <ConfirmButton onClick={onClickConfirmLogout}>
                            Confirm
                          </ConfirmButton>
                        </LogoutButtonContainer>
                      </LogoutModalContainer>
                    )}
                  </Popup>
                </NavItem>
              </NavMenuItems>
            </NavContent>
          </NavHeader>
        )
      }}
    </VideoContext.Consumer>
  )
}

export default withRouter(Header)
