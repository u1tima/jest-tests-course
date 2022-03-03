const { map } = require('./mock');

describe('Map function:', () => {
	let arr;
	let cb;

	beforeEach(() => {
		arr = [1, 2, 3, 5];
		cb = jest.fn(x => x ** 2);
        map(arr, cb);
	});

	test('should call callback', () => {
		expect(cb).toBeCalled();
	});

	test('should call callback', () => {
		expect(cb).toBeCalledTimes(4);
		expect(cb.mock.calls.length).toBe(4);
	});

	test('should pow 2 each element', () => {
        expect(cb.mock.results[0].value).toBe(1);
        expect(cb.mock.results[1].value).toBe(4);
        expect(cb.mock.results[2].value).toBe(9);
        expect(cb.mock.results[3].value).toBe(25);
	});
});
