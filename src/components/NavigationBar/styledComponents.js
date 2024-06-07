import styled from 'styled-components'

export const NavigationBarContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  display: block;
  shrink: 0;
  @media screen and (max-width: 786px) {
    display: none;
  }
`

export const MenuItemLists = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const MenuItemList = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  text-decoration: none;
  padding-left: 20px;
`

export const MenuItemContent = styled.p`
  font-family: Roboto;
  font-size: 15px;
  margin-left: 22px;
`

export const NavigationBarFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 240px;
  width: 100%;
  padding-left: 20px;
`

export const FooterHeader = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
`
export const FooterIconContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const FooterIcon = styled.img`
  width: 24px;
  margin-right: 10px;
`
export const FooterDescription = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  margin-top: 18px;
  margin-bottom: 20px;
`
