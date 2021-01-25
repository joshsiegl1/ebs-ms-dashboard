import * as path from 'path'; 
import * as webpack from 'webpack'; 

const config: webpack.Configuration = { 
    mode: 'production', 
    entry: './index.ts', 
    output: { 
        path: path.resolve(__dirname, 'build'), 
        filename: 'webpack.bundle.js'
    }
}

export default config; 