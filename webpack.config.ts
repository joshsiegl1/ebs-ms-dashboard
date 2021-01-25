import * as path from 'path'; 
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin'; 

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
    plugins: { 
        new HtmlWebpackPlugin
    }, 
    module: { 
        rules: [ 
            { 
                test: /\.tsx?$/, 
                use: 'ts-loader',
                exclude: /node_modules/ 
            }
        ]
    }
}

export default config; 