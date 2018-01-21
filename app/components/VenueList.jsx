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
			</div>
		);
	}
};
