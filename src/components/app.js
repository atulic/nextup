import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSongs } from "../actions";


class SongsIndex extends Component {

  componentDidMount() {
 //   this.props.fetchSongs();
  }

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

export default connect(mapStateToProps, { fetchSongs })(SongsIndex);
