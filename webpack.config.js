const path = require('path');
const webpack = require('webpack');
const entry = [path.resolve(__dirname) + '/src/index.js'];
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            new MiniCssExtractPlugin()
        ],
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
