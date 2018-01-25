import React from 'react';
import HeaderBar from './HeaderBar.jsx';
import VenueList from './VenueList.jsx';
import Data from '../services';

export default class App extends React.Component {
	renderListItems (items) {
		return items.map(item => {
			return (<VenueList key={Math.random()} venue={item}/>);
		});
	}

	render () {
		return (
			<div>
				<HeaderBar/>
				{this.renderListItems(Data)}
			</div>
		);
	}
};