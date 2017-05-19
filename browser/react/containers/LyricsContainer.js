import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import {fetchLyrics,setLyrics} from '../action-creators/lyrics';
import axios from 'axios';


export default class LyricsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState());
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleSubmit(event){
    event.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {


      fetchLyrics(this.state.artistQuery,this.state.songQuery);

    }

  }

   handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }



    render() {
    return <Lyrics
      text={this.state.text}
      setArtist={this.handleArtistInput}
      setSong={this.handleSongInput}
      artistQuery={this.state.artistQuery}
      songQuery={this.state.songQuery}
      handleSubmit={this.handleSubmit}
    />
  }
}
