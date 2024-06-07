import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import VideoContext from '../../context/videoContext'
import {
  LoginFormBgContainer,
  LoginFormContainer,
  WebsiteLogo,
  FormContainer,
  InputContainer,
  InputLabel,
  InputField, // Corrected the spelling here
  ShowPasswordContainer,
  ShowPasswordCheckBox,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onShowPassword = event => {
    this.setState({
      showPassword: event.target.checked,
    })
  }

  renderUsernameField = isDarkTheme => {
    const labelColor = isDarkTheme ? '#f1f1f1' : '#616e7c'
    const inputFieldBgcolor = isDarkTheme ? '#0f0f0f' : '#ffffff'
    const inputFieldTextcolor = isDarkTheme ? '#ffffff' : '#000000'
    const {username} = this.state
    return (
      <InputContainer>
        <InputLabel htmlFor="username" style={{color: labelColor}}>
          USERNAME
        </InputLabel>
        <InputField
          type="text"
          placeholder="Username"
          id="username"
          onChange={this.onChangeUsername}
          value={username}
          style={{
            backgroundColor: inputFieldBgcolor,
            color: inputFieldTextcolor,
          }}
        />
      </InputContainer>
    )
  }

  renderPasswordField = isDarkTheme => {
    const labelColor = isDarkTheme ? '#f1f1f1' : '#616e7c'
    const inputFieldBgcolor = isDarkTheme ? '#0f0f0f' : '#ffffff'
    const inputFieldTextcolor = isDarkTheme ? '#ffffff' : '#000000'
    const {password, showPassword} = this.state
    return (
      <InputContainer>
        <InputLabel htmlFor="password" style={{color: labelColor}}>
          PASSWORD
        </InputLabel>
        <InputField
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          id="password"
          onChange={this.onChangePassword}
          value={password}
          style={{
            backgroundColor: inputFieldBgcolor,
            color: inputFieldTextcolor,
          }}
        />
      </InputContainer>
    )
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = msg => {
    this.setState({
      showError: true,
      errorMsg: msg,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {errorMsg, showError} = this.state
    return (
      <VideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const loginFormContainerBgColor = isDarkTheme ? '#212121' : '#ffffff'
          const loginFormBgcolor = isDarkTheme ? '#0f0f0f' : '#ffffff'
          const showPasswordColor = isDarkTheme ? '#f1f1f1' : ''
          return (
            <LoginFormBgContainer
              style={{backgroundColor: loginFormContainerBgColor}}
            >
              <LoginFormContainer style={{backgroundColor: loginFormBgcolor}}>
                <WebsiteLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormContainer onSubmit={this.submitForm}>
                  {this.renderUsernameField(isDarkTheme)}
                  {this.renderPasswordField(isDarkTheme)}
                  <ShowPasswordContainer>
                    <ShowPasswordCheckBox
                      type="checkbox"
                      id="showPassword"
                      onChange={this.onShowPassword}
                    />
                    <ShowPasswordLabel
                      htmlFor="showPassword"
                      style={{color: showPasswordColor}}
                    >
                      Show Password
                    </ShowPasswordLabel>
                  </ShowPasswordContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </FormContainer>
              </LoginFormContainer>
            </LoginFormBgContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default LoginForm
