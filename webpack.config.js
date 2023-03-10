const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
// const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV; 
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production'; 
const GLOBAL_CSS_REGEXP = /\.global.css/;
// const DEV_PLUGINS = [ new CleanWebpackPlugin(), new HotModuleReplacementPlugin() ];
// const COMMON_PLUGINS = [ new DefinePlugin ({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`}) ]

/** 
 * Генерирует настройку для devtool в зависимости от NODE_ENV: 
 * - в продакшене false
 * - в девелопменте eval
 */

function setupDevtool() {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
}

module.exports = {
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    // optimization: {
    //     concatenateModules: true,
    //   },
    // watch: true,
    // watchOptions: {
    //     aggregateTimeout: 200,
    //     poll: 1000,
    //   },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] ,
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: [
        path.resolve(__dirname, 'src/index.js'),
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'client.js',
    },
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/, //ПОЭТОМУ была ошибка!!!!!! из-за i на конце выражения /\.css$/i
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            },
                        },
                    },
                    // 'less-loader',
                ],
                exclude: GLOBAL_CSS_REGEXP
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html')})
],
    devServer: {
        port: 3000,
        open: true,
        hot: IS_DEV,
    },
    devtool: setupDevtool()
}; 


