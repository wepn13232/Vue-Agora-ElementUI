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
    return fetch('/api/dologin',
        {method: methods, headers: header2, body: qs.stringify(data)})
}

//注册
export function doRegister(data, methods) {
    return fetch('/api/doRegister',
        {method: methods, headers: header2, body: qs.stringify(data)})
}

//查询用户信息
export function getUserInfo(data, methods) {
    return fetch('/api/getUserInfo',
        {method: methods, headers: header2, body: qs.stringify(data)})
}

//插入Appid接口（申请直播编码）
export function setAppid(data, methods) {
    return fetch('/api/insertAppId',
        {method: methods, headers: header2, body: qs.stringify(data)})
}

//编辑（更新）用户信息
export function editUserInfo(data, methods) {
    return fetch('/api/editUserInfo',
        {method: methods, headers: header2, body: qs.stringify(data)})
}

//查看空间动态信息
export function getSapceInfo(data, methods) {
    return fetch('/api/getSpaceInfo',
        {method: methods, headers: header2, body: qs.stringify(data)})
}

//插入空间动态信息
export function insertSpaceInfo(data, methods) {
    return fetch('/api/insertSpaceInfo',
        {method: methods, headers: header2, body: qs.stringify(data)})
}

//获取照片墙
export function getPicShows(data, methods) {
    return fetch('/api/getPicShows',
        {method: methods, headers: header2, body: qs.stringify(data)})
}


//添加照片（post照片）
export function insertPic(data, methods) {
    return fetch('/api/insertPic',
        {method: methods, headers: header2, body: qs.stringify(data)})
}


//根据用户昵称查询用户信息
export function getUserInfoByName(data, methods) {
    return fetch('/api/getUserInfoByName',
        {method: methods, headers: header2, body: qs.stringify(data)})
}

//获取文章信息（可模糊查询）
export function getEssay(data, methods) {
    return fetch('/api/getEssay',
        {method: methods, headers: header2, body: qs.stringify(data)})
}

//添加文章
export function insertEssay(data, methods) {
    return fetch('/api/insertEssay',
        {method: methods, headers: header2, body: qs.stringify(data)})
}

