const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimize: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    ]
});

// if (process.env.NODE_ENV === 'production') {
//     module.exports.devtool = '#source-map';
//     module.exports.optimization.minimize = true;
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             }
//         }),
//     ])
// }