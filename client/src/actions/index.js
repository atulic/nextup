import axios from "axios";

export const FETCH_SONGS = "fetch_songs";

const ROOT_URL = "https://api.spotify.com"
const API_KEY = "b7c39c022dfd4328b2b6a0334147cdc0";

const NEW_RELEASES = "browse/new-releases"

export function fetchSongs() {
    const request = axios.get(`${ROOT_URL}/${NEW_RELEASES}`)

    return {
      type: FETCH_SONGS,
      payload: request
    };
  }