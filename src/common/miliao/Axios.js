import axios from 'axios'
import router from '@/router'
import model from '@/common/miliao/Model'
import { Toast,Dialog } from 'vant'

//接口配置
var instance = axios.create({
    baseURL: ChatUrl+'/chat/',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    },
})

/*取消请求*/
var source = axios.CancelToken.source();

// 添加请求拦截器
instance.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        config.cancelToken = source.token;
        config.data = config.data || {};
        config.data.sign = SiteSign;
        if(!config.noLogin){
            config.data.uid = localStorage['userUid'];
            config.data.token = localStorage['userToken'];
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
            if(router.history.current.name=='sendMsg'&&router.history.current.query.chat_type!=1){
                return response;
            }
            localStorage.removeItem('Home_Active');
            model.PhoneLogin(
                {
                    username: localStorage['MiName'],
                },(data)=>{
                    if(data.code==1){
                        model.GetUserData()
                        router.push({name: 'miliao'});
                    }
                }
            );
            return response;
        }else{
            return response;
        }
    },
    error => {
        const err = /<h1>(.*?)<\/h1>/ig.exec(error.response.data)[1];
        Toast({message: err});
        // return err;
        // 对响应错误做点什么
        // Toast.fail('网络异常');
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
        //   }, config.retryDelay || 1);
        // });
        // return backoff.then(function() {

        //   return axios(config);
        // });
    }
)

export default instance
