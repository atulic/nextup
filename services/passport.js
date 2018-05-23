const passport = require("passport");
const SpotifyStrategy = require('passport-spotify').Strategy;
const keys = require("../config/keys");

passport.use(
  new SpotifyStrategy(
  {
    clientID: keys.spotifyClientID,
    clientSecret: keys.spotifyClientSecret,
    callbackURL: "/auth/spotify/callback"
  },
  function(accessToken, refreshToken, expires_in, profile, done) {
    console.log("access token ", accessToken);
    console.log("refresh token ", refreshToken);
    console.log("profile ", profile);
  }
));