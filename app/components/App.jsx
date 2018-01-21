import React from 'react';
import HeaderBar from './HeaderBar.jsx';
import VenueList from './VenueList.jsx';
import Data from '../services';

export default class App extends React.Component {
	render () {
		return (
			<div>
				<HeaderBar/>
				<VenueList venues={Data}/>
			</div>
		);
	}
};