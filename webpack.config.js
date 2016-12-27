const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const SuperAwesomeWebpackPlugin = require('super-awesome-webpack-plugin');

const awesomeConfig = require('./awesome.config')
const parts = require('./webpack.parts');

const TARGET = process.env.npm_lifecycle_event;
const ENABLE_POLLING = process.env.ENABLE_POLLING;
const PATHS = {
    app: path.join(__dirname, 'src'),
    style: [
        path.join(__dirname, 'src', 'main.scss'),
        path.join(__dirname, 'node_modules', 'normalize.css/normalize.css')
    ],
    build: path.join(__dirname, 'build'),
    test: path.join(__dirname, 'tests')
};

process.env.BABEL_ENV = TARGET;

const common = merge(
    {
        // Entry accepts a path or an object of entries.
        // We'll be using the latter form given it's
        // convenient with more complex configurations.
        entry: {
            app: PATHS.app
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        resolve: {
            extensions: ['', '.js'],
            modulesDirectories: ['src', 'node_modules']
        },
        plugins: [
            new SuperAwesomeWebpackPlugin(awesomeConfig, {
                resolve: {
                    modulesDirectories: ['src', 'node_modules']
                },
                externals: {
                    'styled-components': path.join(process.cwd(), './node_modules/styled-components/lib')
                },
                module: {
                    loaders: [
                        // Extract CSS during build
                        {
                            test: /\.css$/,
                            loaders: ['isomorphic-style', 'css']
                        },
                        {
                            test: /\.scss$/,
                            loaders: ['isomorphic-style', 'css!sass']
                        }
                    ]
                }
            })
        ]
    },
    parts.loadJSX(PATHS.app),
    parts.lintJSX(PATHS.app)
);

var config;

// Detect how npm is run and branch based on that
switch (TARGET) {
    case 'build':
    case 'stats':
        config = merge(
            common,
            {
                devtool: 'source-map',
                entry: {
                    style: PATHS.style
                },
                output: {
                    path: PATHS.build,
                    filename: '[name].[chunkhash].js',
                    chunkFilename: '[chunkhash].js'
                }
            },
            parts.clean(PATHS.build),
            parts.setFreeVariable(
                'process.env.NODE_ENV',
                'production'
            ),
            parts.extractBundle({
                name: 'vendor',
                entries: Object.keys(require('./package.json').dependencies)
            }),
            parts.minify(),
            parts.extractCSS(PATHS.style, '[name].[chunkhash].css')
        );
        break;
    case 'test':
    case 'test:tdd':
        config = merge(
            common,
            {
                devtool: 'inline-source-map'
            },
            parts.loadIsparta(PATHS.app),
            parts.loadJSX(PATHS.test)
        );
        break;
    default:
        config = merge(
            common,
            {
                devtool: 'eval-source-map',
                entry: {
                    style: PATHS.style
                }
            },
            parts.extractBundle({
                name: 'vendor',
                entries: Object.keys(require('./package.json').dependencies)
            }),
            parts.extractCSS(PATHS.style, '[name].css'),
            parts.devServer({
                // Customize host/port here if needed
                host: process.env.HOST,
                port: process.env.PORT,
                poll: ENABLE_POLLING
            }),
            parts.enableReactPerformanceTools()
        );
}

module.exports = validate(config, {
    quiet: true
});