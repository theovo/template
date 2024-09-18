const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map", // for error messages, match up to the correct files and line numbers
    devServer: { // watches js for changes, bundles files into output folder
        watchFiles: ["./src/template.html"], // watches html for changes
    },
});