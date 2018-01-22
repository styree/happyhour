import React from 'react';
import PropTypes from 'prop-types';

export default class VenueList extends React.Component {
	constructor (props) {
		super(props);

		this.propTypes = {
			venues: PropTypes.array
		}
	}

	render () {
		const { venues } = this.props;

		return (
			<div>
				<h2>{venues[0].name}</h2>
				<p>{venues[0].address}</p>
				<p>{venues[0].neighborhood}</p>
				<p>{venues[0].happyHourStart}</p>
				<p>{venues[0].happyHourEnd}</p>
				<p>{venues[0].days}</p>
				<p>{venues[0].wifi}</p>
				<p>{venues[0].parking}</p>
				<p>{venues[0].patio}</p>
				<p>{venues[0].specials}</p>
			</div>
		);
	}
};
