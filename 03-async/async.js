const axios = require('axios');

class Ajax {
	static echo(data) {
		return new Promise((res, rej) => {
			setTimeout(() => {
				if (data) {
					res(data);
				} else {
					rej(new Error('error'));
				}
			}, 200);
		});
	}

	static async get() {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/todos/1',
			);
			return response.data;
		} catch (error) {
			console.log(e);
		}
	}
}

module.exports = Ajax;
