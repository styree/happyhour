import React from 'react';
import HeaderBar from './HeaderBar.jsx';
import VenueList from './VenueList.jsx';
import sheetService from '../services/sheet.service.js';

export default class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			data: []
		};

		this.gonnaGetThatData = this.gonnaGetThatData.bind(this);
		this.renderListItems = this.renderListItems.bind(this);
		this.setData = this.setData.bind(this)
	}

	componentWillMount () {
		this.gonnaGetThatData();
	}

	setData (items) {
		this.setState({ data: items })
	}

	gonnaGetThatData () {
		return sheetService
			.getData()
			.then(resp => {
				return Promise
					.resolve(resp.json())
					.then(f => this.setData(f));
			});
	}

	renderListItems () {
		return this.state.data.map(item => <VenueList key={Math.random()} venue={item}/>);
	}

	render () {
		return (
			<div>
				<HeaderBar/>
				{this.renderListItems()}
			</div>
		);
	}
};
