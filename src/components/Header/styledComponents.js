import styled from 'styled-components'

export const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const NavContent = styled.div`
  width: 93%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLogo = styled.img`
  width: 100px;
`
export const NavMenuItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0px;
`
export const NavItem = styled.li`
  margin-left: 16px;
  list-style-type: none;
  cursor: pointer;
`
export const NavButton = styled.button`
  background: transparent;
  border: 0px;
  width: 30px;
  cursor: pointer;
`

export const LogoutModalContainer = styled.div`
  width: 320px;
  height: 200px;
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoutModalHeading = styled.p`
  color: #00306e;
  font-family: Roboto: 
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 38px;
`

export const LogoutButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
`

export const CancelButton = styled.button`
  background-color: transparent;
  color: #94a3b8;
  border: #94a3b8 1.5px solid;
  border-radius: 2px;
  height: 34px;
  width: 90px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: 0px;
  border-radius: 2px;
  height: 36px;
  width: 90px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`

export const MenuModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CloseButton = styled.div`
  border: none;
  background-color: transparent;
  align-self: flex-end;
  font-size: 30px;
  padding-top: 30px;
  padding-right: 30px;
  font-weight: 500;
  cursor: pointer;
`
export const MenuItemLists = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const MenuItemList = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 160px;
  width: 100%;
  padding-left: 140px;
  text-decoration: none;
`

export const MenuItemContent = styled.p`
  font-family: Roboto;
  font-size: 16px;
  margin-left: 22px;
`

export const ProfileImg = styled.img`
  width: 30px;
`

export const LogoutButton = styled.button`
  width: 90px;
  height: 30px;
  background-color: transparent;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  font-size: 14px;
  cursor: pointer;
`
