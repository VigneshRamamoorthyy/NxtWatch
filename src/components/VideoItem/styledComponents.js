import styled from 'styled-components'

export const VideoList = styled.li`
  width: 100%;
  margin-bottom: 26px;
  text-direction: none;
  @media screen and (min-width: 576px) {
    width: 48%;
    text-direction: none;
  }
  @media screen and (min-width: 768px) {
    width: 32%;
    text-direction: none;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoProfileImgDetailsContainer = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
  @media screen and (min-width: 576px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`
export const VideoProfileImg = styled.img`
  width: 36px;
  margin-top: 8px;
`
export const VideoDetailsContainer = styled.div`
  width: 85%;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    width: 80%;
  }
`

export const VideoTitle = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const VideoDetailText = styled.p`
  color: #475569;
  fon-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    margin-bottom: 0px;
  }
`
export const VideoCountPublishedDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
