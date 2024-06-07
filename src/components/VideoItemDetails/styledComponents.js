import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const VideoItemDetailsContainer = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  overflow-y: scroll;
  padding-top: 18px;
  padding-bottom: 18px;
  @media screen and (min-width: 786px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 80%;
  }
`
export const Player = styled(ReactPlayer)`
  width: 100% !important ;
  height: 600px !important;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 100% !important ;
    height: 600px !important;
  }

  @media screen and (max-width: 450px) {
    width: 100% !important ;
    height: 200px !important;
  }
`

export const VideoContainer = styled.div`
  width: 100%;
  border: 2px red solid;
  background-color: #000000;
  position: relative;
`

export const VideoItemDetailsContentContainer = styled.div`
  width: 90%;
  margin-top: 20px;
`
export const VideoTitle = styled.p`
  color: #212121;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`

export const VideoCountPublishedDateCustomizeBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 786px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const VideoCountPublishedDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const VideoDetailText = styled.p`
  color: #64748b;
  fon-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 0px;
`

export const VideoCustomizeButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 16px;
`

export const VideoCustomizeButton = styled.button`
  border: 0px;
  background-color: transparent;
  height: 20px;
  font-size: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  padding-left: 0px;
  cursor: pointer;
`
export const VideoCustomizeButtonContent = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  margin-left: 6px;
`

export const Seprator = styled.hr`
  border-color: #e2e8f0;
  width: 100%;
`

export const ChannelInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`

export const ChannelLogo = styled.img`
  width: 48px;
`

export const ChannelInfoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const ChannelName = styled.p`
  color: #181818;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
`

export const VideoDescription = styled.p`
  color: #313131;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
`

export const NoResultsImg = styled.img`
  width: 200px;
  margin-top: 60px;
`

export const NoResultsHeading = styled.h1`
  color: #231f20;
  font-family: Roboto;
  font-size: 17px;
  font-weight: 800;
  text-align: center;
  margin-top: 26px;
  margin-bottom: 0px;
`
export const NoResultsDescription = styled.p`
  color: #64748b;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding-right: 20px;
  padding-left: 20px;
`

export const NoResultsRetryButton = styled.button`
  border: none;
  height: 36px;
  width: 90px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const NavigationBarVideoItemDetailContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`
