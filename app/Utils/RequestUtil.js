import getUrl from './UrlUtil';

const request = (url, method, body) => {
    var isOK = false;
    return new Promise((resolve, reject) => {
        fetch(getUrl(url), {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: body
        }).then((response)=>{
            if (response.ok) {
                isOK = true
            } else {
                isOK = false;
            }
            return response.json();
        }).then((responseData)=> {
            if (isOK) {
                resolve(responseData);
            } else {
                reject(responseData);
            }
        }).catch((error)=>{
            reject(error);
        })
    })
}

export  default request;