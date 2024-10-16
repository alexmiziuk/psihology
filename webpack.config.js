/* const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
	 mode,
	 target,
	devtool,
	devServer: {
		port: 3000,
		open: true,
		hot: true,
	 },
	 entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
	 output: {
		  path: path.resolve(__dirname, 'dist'),
		  clean: true,
		  filename: '[name].[contenthash].js',
	 assetModuleFilename: 'assets/[name][ext]'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		 }),
		  new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'src', 'index.html'),
		  }),
		  new MiniCssExtractPlugin({
				filename: '[name].[contenthash].css',
		  }),
	 ],
	 optimization: {
		  minimizer: [
				new CssMinimizerPlugin(), // Минимизация CSS с помощью css-minimizer-webpack-plugin
		  ],
	 },
	 module: {
		  rules: [
				{
					 test: /\.html$/i,
					 loader: 'html-loader',
				},
				{
					 test: /\.(c|sa|sc)ss$/i,
					 use: [
						  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
						  'css-loader',
						  {
								loader: 'postcss-loader',
								options: {
									 postcssOptions: {
										  plugins: [require('postcss-preset-env')],
									 }
								}
						  },
						  'sass-loader'
					 ],
			 },
			 {
				 test: /\.(woff|woff2|eot|ttf|otf)$/i,
				 type: 'asset/resource',
				 generator: {
					 filename: 'fonts/[name][ext]'
				 }
			 },
			 {
				 test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				 use: [
					 {
						 loader: 'image-webpack-loader',
						 options: {
							 mozjpeg: {
								 progressive: true,
							 },
							 optipng: {
								enabled: false, 
							 },
							 pngquant: {
								quality: [0.65, 0.90],
								speed: 4
							 },
							 gifsicle: {
								 interlaced: false,
							 },
							 webp: {
								 quality: 75
							 }
						 }
					 }
				 ],
				type: 'asset/resource',
			},
				{
					 test: /\.m?js$/,
					 exclude: /(node_modules|bower_components)/,
					 use: {
						  loader: 'babel-loader',
						  options: {
								presets: ['@babel/preset-env'],
						  },
					 },
				},
		  ],
	 },
};
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
	mode,
	target: devMode ? 'web' : 'browserslist',
	devtool,
	devServer: {
		port: 3000,
		open: true,
		hot: true,
		watchFiles: ['src/**/*.html'],
	},
	entry: './src/index.js', // Один entry для всех страниц  
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: '[name].[contenthash].js',
		assetModuleFilename: 'assets/[name][ext]',
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html',
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'en.html'),
			filename: 'en.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
	],
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(), // Минимизация CSS  
		],
		splitChunks: {
			chunks: 'all', // Разделение кода для общего использования  
		},
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')],
							}
						}
					},
					'sass-loader'
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				}
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				use: [
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75
							}
						}
					}
				],
				type: 'asset/resource',
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};