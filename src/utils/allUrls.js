import qs from 'qs'
import da from "element-ui/src/locale/lang/da";

// let header = {'Content-Type': 'application/x-www-form-urlencoded'}
let header = {'Content-Type': 'application/json'}

export function getToplistPerson(methods, data) {
   return  fetch('http://www.mocky.io/v2/5da1a12d3000002900f8a2fb',
        {method: methods, headers: header, body: qs.stringify(data)})
}
