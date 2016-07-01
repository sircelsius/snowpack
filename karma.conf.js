var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
    config.set({
        browsers: [ 'PhantomJS' ], //run in PhantomJS
        singleRun: true, //just run once by default
        frameworks: [ 'mocha' ], //use the mocha test framework
        files: [
            'tests.webpack.js' //just load this file
        ],
        plugins: [ 'karma-phantomjs-launcher', 'karma-chai', 'karma-mocha',
            /*'karma-sourcemap-loader',*/ 'karma-webpack', 'karma-coverage',
            'karma-mocha-reporter'
        ],
        preprocessors: {
            'tests.webpack.js': [ 'webpack' ] //preprocess with webpack and our sourcemap loader
        },
        reporters: [ 'mocha', 'coverage' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            // devtool: 'sourcemap', //just do inline source maps instead of the default
            module: {
                preLoaders: [
                    {
                        test: /\.js$/,
                        exclude: [
                            path.resolve('./node_modules/'),
                            // path.resolve('src/lib')
                        ],
                        loader: 'babel'
                    },
                    {
                        test: /\.js$/,
                        include: path.resolve('./src/lib'),
                        loader: 'isparta'
                    },
                    {
                        test: /\.less/,
                        include: path.resolve('./src/lib/styles'),
                        loader: 'style!css!less'
                    }
                ],
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }]/*,
                postLoaders: [{ //delays coverage til after tests are run, fixing transpiled source coverage error
                    test: /src\/.*\.js$/,
                    exclude: /(test|node_modules|bower_components)\//,
                    loader: 'istanbul-instrumenter'
                }]*/
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {
                    type: 'cobertura',
                    subdir: '.',
                    file: 'cobertura.txt'
                },
                {
                    type: 'html',
                    subdir: 'report-html'
                }
            ]
        }
    });
};
