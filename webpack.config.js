const path = require('path');
const webpack = require('webpack');
const { resolve } = require('path');
const entry = [path.resolve(__dirname) + '/src/index.tsx'];
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin'); // plugin for output css styles in a separate file


const src = resolve(__dirname, 'src'); // save src folder

module.exports = function(env) {
    const isProd = env.production === true;

    const config = {
        entry: entry,
        devtool: false,
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: './index.html'
            }),
            new MiniCSSExtractPlugin({
                filename: 'style.css', // filename for output css file
            }),
           /* new MiniCssExtractPlugin()*/
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js'], // array of files extensions for import without extension & working import in .ts files
            alias: {
                '@': src,  //short path to src folder
                '@scss': resolve(src, 'scss'),
                '@images': resolve(src, 'images'),
            }
        },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            publicPath: './',
            filename: 'bundle.js'
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: '/node_modules/'
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-jsx']
                        }
                    }
                },
                {
                    test: /\.(c|sc)ss$/, // search style files (.css and .scss)
                    use: [
                        MiniCSSExtractPlugin.loader,
                        'css-loader', // for transform css styles to js module (processing all @import and url())
                        'sass-loader', // transform scss to css styles
                    ],
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                useRelativePath: false,
                                publicPath: './'
                            }
                        }
                    ]
                },
                {
                    test: /\.(ttf|otf)$/,
                    use: [{
                        loader: "file-loader",
                        options: { name: '[name].[ext]', outputPath: 'fonts' }
                    }]
                },
            ]
        },
    };

    if (!isProd) {
        config.devServer = {
            contentBase: path.join(__dirname, 'src/'),
            port: 9000,
            hot: true,
            lazy: false,
            inline: false,
            compress: true,
            publicPath: 'http://localhost:9000/',
            watchOptions: {
                poll: 2000,
                aggregateTimeout: 600,
            }
        };

        config.plugins.push(new webpack.HotModuleReplacementPlugin());
        config.entry.push('webpack/hot/poll?2000');
    }

    return config;
};
