import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSongs } from "../actions";

class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  
  render() {
    return (
      <div>
        <h3>Welcome to Next Up!</h3>
        <h6>Next Up is a simple web app which integrates with the Spotify API to fetch new music clips.</h6>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { fetchSongs })(App);
