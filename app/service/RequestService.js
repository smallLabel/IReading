'use strict';
var HOST = 'http://v.juhe.cn/toutiao/index?';

let  instance;

export  default  class RequestService{
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    static  SharedIntance(){
        let  singleton = new RequestService();
        return singleton;
    }
}

RequestService.prototype.request = function (url, method, body) {
        var isOK = false;
        console.log(url);
        return new Promise((resolve, reject) => {
            fetch(HOST + url, {
                method:method,
                headers:{

                },
                body:body
            }).then((response)=>{
                if (response.ok) {
                    isOK = true;
                } else {
                    isOK = false;
                }
                return response.json();
            }).then((responseData) => {
                if (isOK) {
                    console.log(responseData);
                    resolve(responseData);
                } else {
                    reject(responseData);
                }
            }).catch((error)=> {
                reject(error);
            })
        })
    }
