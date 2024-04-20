const path = require("path");
const GasPlugin = require("gas-webpack-plugin");
const TSLintPlugin = require("tslint-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("@effortlessmotion/html-webpack-inline-source-plugin");

const destination = "dist";
const isDev = process.env.NODE_ENV !== "production";

const htmlPlugin = new HtmlWebpackPlugin({
	template: "./src/client/template.html",
	filename: "index.html",
	inlineSource: ".(js|css)$",
	inject: "body"
});

const sharedConfigSettings = {
	optimization: {
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
				parallel: true,
				terserOptions: {
					ie8: true,
					mangle: false, 
					ecma: undefined,
					module: false,
					toplevel: false,
					nameCache: null,
					keep_classnames: undefined,
					safari10: false,
					parse: {},
					compress: {},
					keep_fnames: isDev,
					warnings: isDev,
					output: {
						beautify: isDev,
						comments: isDev
					}
				}
			})
		]
	},
	module: {}
};

const clientConfig = Object.assign({}, sharedConfigSettings, {
	name: "CLIENT",
	entry: "./src/client/index.tsx",
	output: {
		path: path.resolve(__dirname, destination)
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "source-map-loader",
				enforce: "pre",
				exclude: /node_modules/
			}, {
				test: /\.[jt]sx?$/,
				use: "awesome-typescript-loader",
				exclude: /node_modules/
			}, {
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader"
				]
			}, {
				test: /\.scss?$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader",
					options: {
						sourceMap: isDev
					}
				}]
			}
		]
	},
	plugins: [
		htmlPlugin,
        new HtmlWebpackInlineSourcePlugin(),
		new TSLintPlugin({
			files: ["./src/**/*.ts"]
		})
	]
});

const serverConfig = Object.assign({}, sharedConfigSettings, {
	name: "SERVER",
	entry: "./src/server/code.ts",
	output: {
		filename: "code.js",
		path: path.resolve(__dirname, destination),
		libraryTarget: "this"
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				use: "awesome-typescript-loader",
				exclude: /node_modules/
			}, {
				test: /\.js$/,
				use: "source-map-loader",
				enforce: "pre",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new GasPlugin(),
		new TSLintPlugin({
			files: ["./src/**/*.ts"]
		})
	]
});

module.exports = [
	clientConfig,
	serverConfig
];