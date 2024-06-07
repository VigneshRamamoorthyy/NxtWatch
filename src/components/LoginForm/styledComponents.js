import styled from 'styled-components'

export const LoginFormBgContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginFormContainer = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 32px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
`

export const WebsiteLogo = styled.img`
  width: 110px;
  margin-bottom: 20px;
`

export const FormContainer = styled.form`
  width: 90%;
  max-width: 330px;
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  width: 100%;
`

export const InputLabel = styled.label`
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 0px;
`

export const InputField = styled.input`
  width: 100%;
  height: 38px;
  border: solid 1px #94a3b8;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 20px;
  outline: none;
  padding-left: 16px;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ShowPasswordCheckBox = styled.input`
  height: 12px;
  width: 12px;
  margin-right: 8px;
`

export const ShowPasswordLabel = styled.label`
  color: #231f20;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 800;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  width: 100%;
  height: 38px;
  border: 0px;
  border-radius: 6px;
  margin-top: 20px;
  font-family: Roboto;
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: Roboto,
  font-size: 10px;
  font-weight: 500;
`
