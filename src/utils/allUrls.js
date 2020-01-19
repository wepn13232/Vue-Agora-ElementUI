import qs from 'qs'

let header2 = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
let header = {'Content-Type': 'application/json;charset=utf-8'}
let baseUrl = 'https://www.fastmock.site/mock/329c8f16f62093ecfde33a5de5013930/yolo'

//获取首页推荐
export function getIndexPicRec(methods, data) {
    return fetch(baseUrl + '/api/getIndexRecPic',
        {method: methods, headers: header, body: qs.stringify(data)})
}

//获取首页“文章推荐”
export function getIndexEssay(methods, data) {
    return fetch(baseUrl + '/api/getIndexEssay',
        {method: methods, headers: header, body: qs.stringify(data)})
}

//登录接口
export function doLogin(methods, data) {
    let msg = data
    return fetch('/api/dologin',
        {method: methods, headers: header2, body: qs.stringify(msg)})
}

//注册
export function doRegister(methods, data) {
    let msg = data
    return fetch('/api/doRegister',
        {method: methods, headers: header2, body: qs.stringify(msg)})
}

