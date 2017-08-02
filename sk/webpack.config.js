let webpack = require('webpack'); // Requiring the webpack lib
let path = require('path');

function run(env) {
    let returnObj = {
        context: path.resolve(__dirname, "src/main/javascript"),
        entry: ['./index.jsx'],
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    loaders: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                },
                {
                    test: /.(png|woff|woff(2)?|eot|ttf|svg|otf)(\?[a-z0-9=\.]+)?$/,
                    loader: 'url-loader?limit=1000000'
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        output: {
            path: path.resolve(__dirname, 'target/classes/static'),
            publicPath: '/',
            filename: 'bundle.js',
            sourceMapFilename: 'bundle.js.map',
        },
        plugins: [],
        node: {
            net: 'empty',
        }
    };

    if (env == "prod") {
        console.log("PROD output");
        returnObj.devtool = 'cheap-source-map';
        returnObj.plugins.push(new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }));
        returnObj.plugins.push(new webpack.optimize.UglifyJsPlugin());
        returnObj.plugins.push(new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }));
        return returnObj;
    } else {
        console.log("DEV output");
        returnObj.devtool = 'inline-source-map';
        return returnObj;
    }
}

module.exports = run;
