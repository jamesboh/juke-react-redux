import React, {Component} from 'react';
import {connect} from 'react-redux';
import AUDIO from '../audio';
import store from '../store';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';

const mapStateToProps = (state, ownProps) => {
  return {
    player: state.player,
    currentsSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    next: () => {
      dispatch(next())
    } ,
    prev: () => {
      dispatch(previous())
    }, 
    toggle: (song, list) => {
      dispatch(toggleSong(song, list))
    }
  }
}

class PlayerWrapper extends Component {
  componentDidMount() {
    AUDIO.addEventListener('ended', this.props.next);
    AUDIO.addEventListener('timeupdate', () => {
      this.props.setProgress(AUDIO.currentTime / AUDIO.duration);
    });
  }
  render() {
    return <Player {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerWrapper);