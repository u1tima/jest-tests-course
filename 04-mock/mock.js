function map(arr, cb) {
	const res = [];
	for (let i = 0; i < arr.length; i++) {
		res.push(cb(arr[i]));
	}
	return res;
}

module.exports = { map };
