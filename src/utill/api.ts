//API 주요 타입
export type _api_param = {
    url:string, method?:string | undefined, param?: any
}

// API 호출 함수 (GET)
const getAPI = async ({url, method = 'get', param = undefined} : _api_param) => {
    const response = await fetch(`${url}`, {method, body: JSON.stringify(param)})
    const returnObj = await response.json()
    return returnObj
} 

// API 호출 함수 (POST)
const postAPI = async ({url, method = 'post', param = undefined} : _api_param) => {
    const response = await fetch(`${url}`, {method, body: JSON.stringify(param)})
    const returnObj = await response.json()
    return returnObj
} 

export {getAPI, postAPI}