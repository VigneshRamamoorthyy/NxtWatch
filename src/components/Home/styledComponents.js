import styled from 'styled-components'

export const HomeBackgroundContainer = styled.div`
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

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 100vh;
  background-size: cover;
  width: 100%;
  padding-top: 25px;
  display: flex;
  justify-content: center;
`

export const BannerContentCloseButton = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 576px) {
    width: 88%;
  }
`

export const BannerContent = styled.div`
  width: 70%;
  max-width: 270px;
  margin-top: 14px;
`

export const BannerLogo = styled.img`
  width: 140px;
`

export const BannerDescription = styled.p`
  color: #383838;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid #212121;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  width: 100px;
  height: 30px;
  cursor: pointer;
  margin-top: 10px;
`

export const BannerCloseButton = styled.button`
  border: none;
  background-color: transparent;
  width: 30px;
  height: 20px;
  cursor: pointer;
`

export const HomeContainer = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 100px;
`

export const SearchInputButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  height: 34px;
  width: 90%;
  border: 1px solid;
  margin-left: 18px;
  margin-right: 18px;
  @media screen and (min-width: 576px) {
    width: 75%;
  }

  @media screen and (min-width: 786px) {
    width: 50%;
  }
`

export const SearchInputField = styled.input`
  height: 30px;
  border: none;
  width: 75%;
  outline: none;
  padding-left: 14px;
`

export const SearchButton = styled.button`
  width: 25%;
  height: 32px;
  background-color: #f4f4f4;
  border: none;
  border-left: #cccccc 1px solid;
  cursor: pointer;
  font-color: #424242;
`

export const HomeVideoLists = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 18px;
    padding-right: 18px;
  }
`

export const NoResultsImg = styled.img`
  width: 200px;
  margin-top: 60px;
`

export const NoResultsHeading = styled.h1`
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
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const NavigationBarHomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`
export const FailureHeading = styled.h1`
  font-family: Roboto;
  font-size: 17px;
  font-weight: 800;
  text-align: center;
  margin-top: 26px;
  margin-bottom: 0px;
`
