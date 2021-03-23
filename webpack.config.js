const path = require('path')
const config = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/'),
    },
}
module.exports = config