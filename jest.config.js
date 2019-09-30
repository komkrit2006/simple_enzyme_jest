module.exports = {
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],  // run file after env for set jest with react V.16
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
        '^.+\\.js$': 'babel-jest'       // transform .js to babel jest
    },
    modulePathIgnorePatterns: ['<rootDir>/webpack.test.js'],  //not run webpack.test.js
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",  //mock file image
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",       //mock file css
    },
    unmockedModulePathPatterns: [
        "<rootDir>/node_modules/react/",
        "<rootDir>/node_modules/enzyme/"
    ]
}
