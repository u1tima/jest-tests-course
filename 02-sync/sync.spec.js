const Lodash = require('./sync');

let _ = new Lodash();

describe('Lodash: compact', () => {
	let arr;

	beforeEach(() => {
		arr = [false, 42, 0, '', true, null, 'hello'];
	});

	afterAll(() => {
		_ = new Lodash();
	});

	test('should be defined', () => {
		expect(_.compact).toBeDefined();
	});

	test('should remove falsy values from array', () => {
		const res = [42, true, 'hello'];
		expect(_.compact(arr)).toEqual(res);
	});
});

describe('Lodash:groupBy', () => {
	test('should be defined', () => {
		expect(_.groupBy).toBeDefined();
	});

	test('should group array items by Math.floor', () => {
		const arr = [2.2, 2.4, 4.2, 3.1];
		const result = {
			2: [2.2, 2.4],
			4: [4.2],
			3: [3.1],
		};
		expect(_.groupBy(arr, Math.floor)).toEqual(result);
	});

	test('should group array items by length', () => {
		const arr = ['one', 'two', 'three'];
		const result = {
			5: ['three'],
			3: ['one', 'two'],
		};
		expect(_.groupBy(arr, 'length')).toEqual(result);
	});

	test('should should not return array', () => {
		expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
	});
});
