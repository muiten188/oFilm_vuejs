module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "vue_app_bundle.js"
    },
    module: {
        loaders: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
            }
        ]
    },
}