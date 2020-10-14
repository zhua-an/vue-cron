
// 基础路径 注意发布之前要先修改这里
const baseUrl = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  publicPath: baseUrl, // 根据你的实际情况更改这里
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 设为false打包时不生成.map文件
  productionSourceMap: false
}