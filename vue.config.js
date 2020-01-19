module.exports = {
    //请求代理
    devServer: {
        proxy: {
            '/api': {  //使用"/api"来代替"http://xxxx.cn"
                target: 'http://192.168.7.220:8881', //源地址 （接口域名）
                ws:true,
                changeOrigin: true, //改变源 （是否跨域）
                pathRewrite: {
                    '^/api': 'http://192.168.7.220:8881' //路径重写 (正常请求接口的简写)
                }
            }
        }
    },
}
