var path = require('path');

module.exports = {
	entry: './js/app.js',
	output: {
		filename: 'out.js',
		path: path.resolve(__dirname, 'js')
	},
	mode: 'development',
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015'],
					},
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{ test: /\.html$/, 
				loader: 'html-loader' 
			},
			{
				test: /\.(png|jpg|jpeg|svg)$/,
				loader: 'file-loader',
				options: {
					//outputPath: './img',
					outputPath: (url, resourcePath, context) => {
						// `resourcePath` is original absolute path to asset
						// `context` is directory where stored asset (`rootContext`) or `context` option
		
						// To get relative path you can use
						// const relativePath = path.relative(context, resourcePath);
		
						if (/my-custom-image\.png/.test(resourcePath)) {
						  return `other_output_path/${url}`;
						}
		
						if (/images/.test(context)) {
						  return `image_output_path/${url}`;
						}
		
						return `./assets/${url}`;
					  },
					name: "[name].[ext]",
				  },
			},
		],
	},

};