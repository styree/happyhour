import React from 'react';

export default class VenueList extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		const { venue } = this.props;

		return (
			<div>
				<h2>{venue.name}</h2>
				<p>{venue.address}</p>
				<p>{venue.neighborhood}</p>
				<p>{venue.happyHourStart}</p>
				<p>{venue.happyHourEnd}</p>
				<p>{venue.days}</p>
				<p>{venue.wifi}</p>
				<p>{venue.parking}</p>
				<p>{venue.patio}</p>
				<p>{venue.specials}</p>
			</div>
		);
	}
};
