const path = require('path')
const TransformPages = require('uni-read-pages')
const { webpack } = new TransformPages()
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name', 'aliasPath']
					});
					return JSON.stringify(tfPages.routes)
				}, true)
			})
		]
	},
	devServer: {
		open: true, //项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
		port: 8080,
		proxy: {
			'/api': { //代理的地址如果 是 / 请求地址就不用带 如果是 /api， 请求地址则是 /api + 接口url
				"target": "http://localhost:3000",//请求的api地址
				"changeOrigin": true,
				pathRewrite: { '^/api': '/' }
			},
		},
	},
	pluginOptions: {
		"style-resources-loader": {
			preProcessor: "less",
			patterns: ["src/common/style.less"],
		},
	},
}