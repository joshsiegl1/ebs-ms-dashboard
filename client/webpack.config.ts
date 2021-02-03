import * as path from 'path'; 
import * as webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config: webpack.Configuration = { 
    mode: 'production', 
    entry: './src/index.tsx', 
    devtool: 'source-map', 
    output: { 
        path: path.resolve(__dirname, 'build'), 
        filename: '[name].bundle.js'
    }, 
    resolve: { 
        extensions: ['.tsx', '.ts', '.js']
    }, 
    plugins: [ new HtmlWebpackPlugin({ 
        template: path.join(__dirname, 'src/index.html')
    }) ], 
    module: { 
        rules: [ 
            { 
                test: /\.tsx?$/, 
                use: 'ts-loader',
                exclude: /node_modules/ 
            }, 
            { 
                test: /\.(png|svg|jpg|jpeg|gif)$/i, 
                type: 'asset/resource'
            }
        ]
    }, 
    devServer: { 
        compress: true, 
        port: 5005, 
        historyApiFallback: true
    }
}

export default config; 