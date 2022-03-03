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
}

module.exports = Ajax;
