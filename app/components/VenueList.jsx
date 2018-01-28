import React from 'react';

export default class VenueList extends React.Component {
	render () {
		const { venue } = this.props;

		return (
			<div>
				<h2>{venue.venuename}</h2>
				<p>{venue.venueaddress}</p>
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
