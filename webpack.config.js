module.exports = {
    entry: "./admin/index.js",
    output: {
        path: `${__dirname}/admin`,
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/, use: [
                {loader: "style-loader" },
                {loader: "css-loader", options:{modules:true}}
            ]},
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use:[{loader: 'file-loader?name=public/fonts/[name].[ext]'}]
            }
        ]
    }
};