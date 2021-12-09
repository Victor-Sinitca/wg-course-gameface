const path = require('path');
const webpack = require('webpack');
const { resolve } = require('path');
const entry = [path.resolve(__dirname) + '/src/index.js'];
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
            extensions: ['.ts', '.js'], // array of files extensions for import without extension & working import in .ts files
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
                        // if development mode then put styles in the <style>
                        // if production mode then put styles in a separate file by using mini-css-extract-plugin loader
                        !isProd ? 'style-loader' : MiniCSSExtractPlugin.loader,
                        'css-loader', // for transform css styles to js module (processing all @import and url())
                        {
                            loader: 'postcss-loader', // loader for processing css styles by using postcss
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        'postcss-preset-env', // for using presets (browserlist in package.json)
                                    ],
                                },
                            },
                        },
                        'sass-loader', // transform scss to css styles
                    ],
                },




               /* {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]___[hash:base64:5]'
                                }
                            },
                        }]
                },*/
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
                }
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
