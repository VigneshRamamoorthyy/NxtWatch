import styled from 'styled-components'

export const TrendingVideoList = styled.li`
  width: 100%;
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: flex-start;
    padding-left: 18px;
    padding-right: 18px;
    margin-bottom: 80px;
  }
`

export const TrendingVideoThumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 60%;
    margin-right: 14px;
  }
  @media screen and (min-width: 786px) {
    width: 40%;
  }
`

export const TrendingVideoProfileImgDetailsContainer = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
  @media screen and (min-width: 576px) {
    width: 40%;
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 0px;
  }
`
export const TrendingVideoProfileImg = styled.img`
  width: 36px;
  margin-top: 8px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const TrendingVideoDetailsContainer = styled.div`
  width: 85%;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    width: 80%;
  }
`

export const TrendingVideoTitle = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  @media screen and (min-width: 786px) {
    font-size: 16px;
  }
`

export const TrendingVideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TrendingVideoDetailText = styled.p`
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
export const TrendingVideoCountPublishedDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
