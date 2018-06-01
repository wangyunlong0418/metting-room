const path = require('path');


const config = {
    mode: 'development',
    module: {
        
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
}

module.exports = config;