const sum = (a, b) => a + b;

const nativeNull = () => null;

function expect(value) {
	return {
		toBe: exp => {
			if (value === exp) {
				console.log('sucsess');
			} else {
				console.error(`Value is ${value}, but exeptation is ${exp}`);
			}
		},
	};
}

// expect(sum(41, 1)).toBe(42)

module.exports = {
	sum,
	nativeNull,
};
