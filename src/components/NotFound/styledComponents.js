import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
export const NotFoundImg = styled.img`
  width: 90%;
  margin-top: 50px;
  @media screen and (min-width: 786px) {
    width: 500px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 800;
  margin-top: 28px;
  @media screen and (min-width: 786px) {
    font-size: 30px;
  }
`

export const NotFoundDescription = styled.p`
  color: #475569;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  width: 80%;
  text-align: center;
  margin-top: 0px;
  @media screen and (min-width: 786px) {
    font-size: 16px;
  }
`
