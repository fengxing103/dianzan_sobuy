import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Toast,Dialog } from 'vant'
import i18n from '@/i18n'

//接口配置

var instance = axios.create({
    baseURL: (localStorage['CurrLine']||ApiUrl)+'/api/',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    }
})


/*取消请求*/
var source = axios.CancelToken.source();

// 添加请求拦截器
instance.interceptors.request.use(
    config => {

        // 在发送请求之前做些什么
        config.baseURL = (localStorage['CurrLine']||ApiUrl)+'/api/';

        config.cancelToken = source.token;
        config.data = config.data || {};
        config.data.lang = localStorage['Language']||'vi';
    //    config.data.lang = localStorage['Language']|| Language;
        if(!config.noLogin){
            config.data.token = localStorage['Token'];
        }
        if(!config.fromData){
            config.data = $.param(config.data);
        }
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        var Api = response.request.responseURL.slice(response.request.responseURL.lastIndexOf('\/'));
        if (response.data.code > 200 && response.data.code < 206) {
            localStorage.removeItem('Token');
            localStorage.removeItem('UserInfo');
            localStorage.removeItem('BankCardList');
            store.dispatch('UpdateUserInfo', '');
            store.dispatch('UpdateBankCardList', []);
            Toast.clear();
            source.cancel();
            Dialog.alert({
                title: 'Tips',
                message: response.data.code_dec,
                closeOnPopstate: true,
            }).then(() => {
                router.push('/login');
                source = axios.CancelToken.source();
            }).catch(()=>{
                router.push('/login');
                source = axios.CancelToken.source();
            });
        }
        return response;
    },
    error => {
        // 对响应错误做点什么
        const err = /<h1>(.*?)<\/h1>/ig.exec(error.response.data)[1];
        Toast({message: err});
        // const config = error.config;
        // if (!config || !config.retry) return Promise.reject(error);
        // config.__retryCount = config.__retryCount || 0;
        // if (config.__retryCount >= config.retry) {
        //     return Promise.reject(error);
        // }
        // config.__retryCount += 1;
        // const backoff = new Promise(function(resolve) {
        //   setTimeout(function() {
        //       resolve();
        //   }, 2000);
        // });
        // return backoff.then(function() {
        //   return axios(config);
        // });
    }
)

export default instance