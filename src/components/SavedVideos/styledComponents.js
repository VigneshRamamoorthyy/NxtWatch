import styled from 'styled-components'

export const SavedVideosBackgroundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow-y: scroll;
  @media screen and (min-width: 786px) {
    width: 80%;
  }
`

export const SavedVideosBannerContainer = styled.div`
  background-color: #f1f1f1;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 786px) {
    padding: 40px;
  }
`
export const SavedVideosIconContainer = styled.div`
  height: 34px;
  width: 34px;
  border-radius: 16px;
  background-color: #e2e8f0;
  padding: 6px;
  @media screen and (min-width: 786px) {
    height: 50px;
    width: 50px;
    border-radius: 28px;
    padding: 14px;
  }
`

export const SavedVideosBannerText = styled.h1`
  color: #1e293b;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 800;
  margin-left: 12px;
  @media screen and (min-width: 786px) {
    font-size: 20px;
  }
`

export const NoSavedVideosImg = styled.img`
  width: 80%;
  margin-top: 40px;
  @media screen and (min-width: 786px) {
    width: 46%;
  }
`
export const NoSavedVideosHeading = styled.h1`
  color: #231f20;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  margin-top: 48px;
`
export const NoSavedVideosDescription = styled.p`
  color: #424242;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
`

export const SavedVideoContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18px;
`

export const SavedVideoLists = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 786px) {
    padding-left: 22px;
  }
`

export const NavigationBarSavedVideosContainer = styled.div`
  width: 100%
  border: 2px red solid;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
