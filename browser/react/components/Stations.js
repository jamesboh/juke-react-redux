import React from 'react';
import {Link} from 'react-router';

// const DUMMY_STATIONS_DATA = [
//   { name: '90s Hip Hop' },
//   { name: 'Death Metal' },
//   { name: 'Classical' }
// ];

const Stations = (props) => (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        Object.keys(props.stations).map(stationName => {
          return (
            <div className="list-group-item" key={stationName}>
              <Link to={'fill/me/in/later'}>{stationName}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
)

export default Stations;