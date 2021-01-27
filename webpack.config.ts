import * as path from 'path'; 
import * as webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config: webpack.Configuration = { 
    mode: 'production', 
    entry: './index.tsx', 
    output: { 
        path: path.resolve(__dirname, 'build'), 
        filename: 'webpack.bundle.js'
    }, 
    resolve: { 
        extensions: ['.tsx', '.ts', '.js']
    }, 
    plugins: [ new HtmlWebpackPlugin() ], 
    module: { 
        rules: [ 
            { 
                test: /\.tsx?$/, 
                use: 'ts-loader',
                exclude: /node_modules/ 
            }
        ]
    }, 
    devServer: { 
        contentBase: path.join(__dirname, 'build'), 
        compress: true, 
        port: 8080, 
        historyApiFallback: true
    }
}

export default config; 