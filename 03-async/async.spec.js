const Ajax = require('./async');

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
