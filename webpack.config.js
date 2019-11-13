var path = require('path');

module.exports = {
devServer: {
	    contentBase: path.join(__dirname, './src'),
	    compress: true,
	    port: 8080
},
  entry: {
    main: './src/main.js'
},
output: {
    filename: 'index.js'
},
};