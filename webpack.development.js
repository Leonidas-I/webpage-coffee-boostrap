const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AutoPrefixer = require("autoprefixer");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-cheap-module-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[a|c]ss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { sourceMap: true },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins() {
                                return AutoPrefixer;
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
});
