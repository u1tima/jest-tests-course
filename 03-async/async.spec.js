const axios = require('axios');
const Ajax = require('./async');

jest.mock('axios');

describe('Ajax: echo', () => {
	test('should return value async', async () => {
		const res = await Ajax.echo('text');
		expect(res).toBe('text');
	});

	test('sshould catch error with promise', async () => {
		try {
			await Ajax.echo();
		} catch (error) {
			expect(error.message).toBe('error');
		}
	});

	test('should return value with promise', () => {
		return Ajax.echo('text').then(res => {
			expect(res).toBe('text');
		});
	});

	test('should catch error with promise', () => {
		return Ajax.echo().catch(err => {
			expect(err).toBeInstanceOf(Error);
		});
	});
});

describe('Ajax: GET:', () => {
	let response;
	let todos;

	beforeEach(() => {
		todos = [{ id: 1, title: 'Todo 1', completed: false }];
		response = {
			data: { todos },
		};
	});

	test('should return data from backend', () => {
		axios.get.mockReturnValue(response);

		return Ajax.get().then(data => {
			expect(data.todos).toEqual(todos);
		});
	});
});
