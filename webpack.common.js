module.exports = {
    entry: {
        script: "./src/js/script.js",
        style: "./src/scss/style.scss",
    },
    optimization: {
        runtimeChunk: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"],
            },
        ],
    },
};
