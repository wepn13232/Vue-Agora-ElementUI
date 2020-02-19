export function getTime() {
    //获取时间
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let time = y + "-" + m + "-" + d;
    return time;
}
