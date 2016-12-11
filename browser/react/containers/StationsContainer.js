import {connect} from 'react-redux';
import Stations from '../components/Stations.js';

const uniqueGenresFromSongs = function (songs) {
	return songs.reduce((stations, song) => {
		if (!stations[song.genre]) stations[song.genre] = [song];
		else stations[song.genre].push(song);
		return stations;
	}, {})
}

const mapStateToProps = function (state, ownProps) {
	return {
		stations: uniqueGenresFromSongs(state.songs)
	}
}

const mapDispatchToProps = function (dispatch, ownProps) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations)