# About
A interactive webpage built as part of a "virtual" adventure, taking players around the Internet.
Basically a game with several stages where you need to solve clues and puzzles to proceed.

*Curious?*

Start here: https://www.youtube.com/channel/UCuUoEmlb3P8T2nZ8iIw-eKA


# Extra
This project was built with React, based on a tutorial from
https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
Special thanks !

Extra info:

Dependencies:
webpack: We need Webpack to bundle our code.

webpack-cli: We will be using some CLI features for Webpack to make our life easier while writing some scripts.

webpack-dev-server: I will create a server using the webpack-dev-server package. This is only meant to be used in the development environment, and not for production. This means while developing and working on my code, I don’t need a separate server like Node.js.

@babel/preset-env: This package behaves exactly the same as @babel/preset-latest (or @babel/preset-es2015, @babel/preset-es2016, and @babel/preset-es2017 together). Cool right?

@babel/preset-react: The name of the package sounds clear — this will add support for react while we bundle our code.

@babel/preset-stage-2: This will add stage-2 feature of the Ecma TC39 proposal. You can read more about it here.

@babel/loader: This is a dependency of Webpack. It allows transpiling Babel using Webpack.

@babel/core: This is a dependency for the @babel/loader itself.

uglifyjs-webpack-plugin: As the name sounds, this will uglify and minimize all our code to reduce the bundle size.

optimize-css-assets-webpack-plugin: This plugin will minimize and optimize your CSS code.
