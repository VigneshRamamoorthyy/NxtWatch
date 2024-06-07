import styled from 'styled-components'

export const TrendingBackgroundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  @media screen and (min-width: 786px) {
    width: 80%;
  }
`

export const TrendingBannerContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 786px) {
    padding: 40px;
  }
`
export const TrendingIconContainer = styled.div`
  height: 34px;
  width: 34px;
  border-radius: 16px;
  padding: 6px;
  @media screen and (min-width: 786px) {
    height: 50px;
    width: 50px;
    border-radius: 28px;
    padding: 12px;
  }
`

export const TrendingBannerText = styled.h1`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 800;
  margin-left: 12px;
  @media screen and (min-width: 786px) {
    font-size: 20px;
  }
`
export const TrendingContainer = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 100px;
  flex-grow: 1;
`

export const TrendingVideoLists = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 786px) {
    padding-left: 22px;
  }
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

export const NavigationBarTrendingContainer = styled.div`
  width: 100%
  border: 2px red solid;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
