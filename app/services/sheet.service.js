import fetch from 'isomorphic-fetch';

const getData = () => {
	return fetch('http://localhost:3000/', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(resp => {
		if (resp.status >= 400) {
			throw new Error('Bad response from server');
		}

		return resp;
	});
};

const postData = (data) => {
	data._id = Math.floor(Math.random() * 10000);

	return fetch('http://localhost:3000/log', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(resp => {
			if (resp.status >= 400) {
				throw new Error('Bad response from server');
			}
		});
};

export default {
	getData: getData,
	postData: postData
};
