module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json',
        },
    },
    setupFilesAfterEnv: ['jest-extended'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@containers/(.*)$': '<rootDir>/src/containers/$1',
        '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^@mock-data/(.*)$': '<rootDir>/src/mock-data/$1',
        '^@models/(.*)$': '<rootDir>/src/models/$1',
        '^@services/(.*)$': '<rootDir>/src/services/$1',
        '^@src/(.*)$': '<rootDir>/src/$1',
    },
};
