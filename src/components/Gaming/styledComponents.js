import styled from 'styled-components'

export const GamingBackgroundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  @media screen and (min-width: 786px) {
    width: 80%;
  }
`

export const GamingBannerContainer = styled.div`
  background-color: #f1f1f1;
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
export const GamingIconContainer = styled.div`
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

export const GamingBannerText = styled.h1`
  color: #1e293b;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 800;
  margin-left: 12px;
  @media screen and (min-width: 786px) {
    font-size: 20px;
  }
`
export const GamingContainer = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 70px;
  padding-left: 16px;
  padding-right: 16px;
  flex-grow: 1;
`

export const GamingLists = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 0px;
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

export const NavigationBarGamgingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
