module.exports = {
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	testRegex: '.+\\.ts',
	moduleFileExtensions: ['ts', 'js'],
	rootDir: 'test',
	testEnvironment: 'node',
};
