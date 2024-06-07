import styled from 'styled-components'

export const GamingList = styled.li`
  width: 48%;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  @media screen and (min-width: 576px) {
    width: 30%;
  }
`

export const GamingImg = styled.img`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
`
export const GamingTitle = styled.p`
  color: #1e293b;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 0px;
`

export const GamingViewCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`

export const GamingViewCount = styled.p`
  color: #475569;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0px;
  margin-top: 8px;
  @media screen and (min-width: 576px) {
    margin-right: 4px;
  }
`
