import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login, logout } from 'redux-implicit-oauth2'
 
const config = {
  url: "https://accounts.spotify.com/authorize",
  client: "b7c39c022dfd4328b2b6a0334147cdc0",
  redirect: "http://localhost:8080/callback",
  scope: "",
  width: 640, // Width (in pixels) of login popup window. Optional, default: 400
  height: 640 // Height (in pixels) of login popup window. Optional, default: 400
}
 
const Login = ({ isLoggedIn, login, logout }) => {
  if (isLoggedIn) {
    return <button type='button' className="btn btn-primary" onClick={logout}>Logout</button>
  } else {
    return <button type='button' className="btn btn-primary" onClick={login}>Login</button>
  }
}
 
Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}
 
const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn
})
 
const mapDispatchToProps = {
  login: () => login(config),
  logout
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login)