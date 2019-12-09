import qs from 'qs'

let header2 = {'Content-Type': 'application/x-www-form-urlencoded'}
let header = {'Content-Type': 'application/json'}
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

//用户接口
export function allUserInfo(methods,data) {
    return fetch(baseUrl + '/api/userInfo',
        {method: methods, headers: header2, body: qs.stringify(data)})
}

//获取主播信息接口
export function getHostInfo(methods,data) {
    return fetch(baseUrl + '/api/hostInfo',
        {method: methods, headers: header, body: qs.stringify(data)})
}

//获取评分接口
export function getScore(methods,data) {
    return fetch(baseUrl + '/api/getScore',
        {method: methods, headers: header, body: qs.stringify(data)})
}

