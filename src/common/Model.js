import store from '@/store'
import router from '@/router'
import axios from './Axios'
import $Dialog from './Dialog'
import i18n from '@/i18n'

const model = {
    GetBackData(callback){
        const getData = ({data}) => {
            store.dispatch('UpdateInitData', data.info||'');
            callback&&callback(data.info);
        }
        axios.post('Common/BackData','',{noLogin: true}).then(getData);
    },
    Login(json,callback){
        const getData = ({data}) => {
            if(data.code==1){
                localStorage['MiName'] = data.info.username;
                localStorage['Token'] = data.info.token;
                localStorage['UserId'] = data.info.userid;
                store.dispatch('UpdateUserInfo', data.info);
                if(localStorage['FromPage']){
                    router.replace(localStorage['FromPage']);
                    localStorage.removeItem('FromPage');
                }else{
                    router.replace('/');
                }
            }
            callback&&callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('User/Login',json,{noLogin: true}).then(getData);
    },
    Logout(callback){
        const getData = ({data}) => {
            if(data.code==1){
                localStorage.clear();
                this.GetBackData()
                store.dispatch('UpdateUserInfo', '');
                store.dispatch('UpdateBankCardList', []);
                router.replace('/');
            }
            $Dialog.Toast(data.code_dec);
        }
        axios.post('User/Logout').then(getData);
    },
    UserRegister(json,callback){
        $Dialog.Loading(i18n.t('dialog[5]'));
        const getData = ({data}) => {
            if(data.code==1){
                this.Login({username: json.username, password: json.password})
            }
            callback&&callback(data.info);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('user/Register',json,{noLogin: true}).then(getData);
    },
    SmsCode(callback) {
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('sms/smsCode','',{noLogin: true}).then(getData);
    },
    GetSMSCode(json,callback) {
        const getData = ({data}) => {
            callback&&callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('sms/sendSMSCode',json,{noLogin: true}).then(getData);
    },
    SignIn(callback){
        const getData = ({data}) => {
            if(data.code==1){
                this.GetUserInfo()
            }
            callback&&callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('user/signin').then(getData);
    },
    GetUserInfo(callback){
        const getData = ({data}) => {
            if(data.code==1){
                store.dispatch('UpdateUserInfo', data.info);
            }
            callback&&callback(data);
        }
        axios.post('user/getUserInfo').then(getData);
    },
    SetUserInfo(json,callback){
        $Dialog.Loading(i18n.t('dialog[2]'));
        const getData = ({data}) => {
            if(data.code==1){
                this.GetUserInfo();
            }
            callback&&callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('user/setuserinfo',json).then(getData);
    },
    CreateOrder(json,callback){
        $Dialog.Loading(i18n.t('dialog[2]'));
        const getData = ({data}) => {
            if(data.code==1){
                router.push('/user/invest');
                this.GetUserInfo();
            }
            callback&&callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('Order/createOrder',json).then(getData);
    },
    OrderList(callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Order/Orderlist').then(getData);
    },
    OrderRecordList(id,callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Order/orderRecordList',{orderid: id}).then(getData);
    },
    FundDetails(json, callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Transaction/FundDetails',json).then(getData);
    },
    GetDrawRecord(json, callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Transaction/getDrawRecord',json).then(getData);
    },
    Draw(json,callback){
        $Dialog.Loading(i18n.t('dialog[2]'));
        const getData = ({data}) => {
            if(data.code==1){
                this.GetUserInfo();
            }
            callback&&callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('Transaction/draw',json).then(getData);
    },
    Transfer(json,callback){
        $Dialog.Loading(i18n.t('dialog[2]'));
        const getData = ({data}) => {
            if(data.code==1){
                this.GetUserInfo();
            }
            callback&&callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('Transaction/Transfer',json).then(getData);
    },
    AddBankCard(json,callback){
        $Dialog.Loading(i18n.t('dialog[2]'));
        const getData = ({data}) => {
            if(data.code==1){
                this.GetBankCardList()
            }
            callback&&callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('Account/AddBankCard',json).then(getData);
    },
    GetBankCardList(callback){
        const getData = ({data}) => {
            store.dispatch('UpdateBankCardList', data.data||[]);
            callback&&callback(data);
        }
        axios.post('Account/getBankCardList').then(getData);
    },
    GetRechargeRecord(json,callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Transaction/getRechargeRecord',json).then(getData);
    },
    GetRechargeType(callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Transaction/getRechargetype',{type:'app'}).then(getData);
    },
    RechargeOrder(json,callback){
        $Dialog.Loading(i18n.t('dialog[2]'));
        const getData = ({data}) => {
            if(data.code==1){
                router.push('/user/recharge/'+data.orderNumber);
            }
            callback&&callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('Recharge/newRechargeOrder',json).then(getData);
    },
    GetRechargeInfo(orderId,callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Recharge/getRechargeInfo',{orderNumber: orderId}).then(getData);
    },
    UploadImg(json, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('User/UploadImg', json, { fromData: true }).then(getResponse);
    },
    BuyVip(json, callback) {
        $Dialog.Loading(i18n.t('dialog[2]'));
        const getResponse = ({ data }) => {
            callback && callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('User/userBuyVip', json).then(getResponse);
    },
    PostTask(json, callback) {
        $Dialog.Loading(i18n.t('dialog[2]'));
        const getResponse = ({ data }) => {
            callback && callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('task/publishTask', json).then(getResponse);
    },
    GetTaskList(json, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('task/getTaskList', json).then(getResponse);
    },
    ReceiveTask(id, callback) {
        $Dialog.Loading(i18n.t('dialog[2]'));
        const getResponse = ({ data }) => {
            callback && callback(data);
            $Dialog.Toast(data.code_dec);
            if(data.code==1){
                this.GetUserInfo()
            }
        }
        axios.post('task/receiveTask', {id: id}).then(getResponse);
    },
    GetTaskinfo(id, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('task/getTaskinfo', {id: id}).then(getResponse);
    },
    GetTaskRecord(json, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('task/taskOrderlist', json).then(getResponse);
    },
    SubmitTask(json, callback) {
        $Dialog.Loading(i18n.t('dialog[2]'));
        const getResponse = ({ data }) => {
            callback && callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('task/taskOrderSubmit', json).then(getResponse);
    },
    CancelTask(id, callback) {
        $Dialog.Loading(i18n.t('dialog[2]'));
        const getResponse = ({ data }) => {
            callback && callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('task/revokeTask', {id: id}).then(getResponse);
    },
    TaskOrderInfo(id, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('task/taskorderinfo', {order_id: id}).then(getResponse);
    },
    AuditTask(json, callback) {
        $Dialog.Loading(i18n.t('dialog[2]'));
        const getResponse = ({ data }) => {
            callback && callback(data);
            $Dialog.Toast(data.code_dec);
        }
        axios.post('task/taskOrderTrial', json).then(getResponse);
    },
    DailyReport(callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('User/dailyReport').then(getResponse);
    },
    CreditList(callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('user/getUserCreditList').then(getResponse);
    },
    TeamReport(json,callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('user/teamReport',json).then(getResponse);
    },
    newLc(json,callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('Yuebao/getYuebaoList',json).then(getResponse);
    },
    newLcTj(json,callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('Yuebao/payYuebao',json).then(getResponse);
    },
    newList(json,callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('Yuebaojilu/getYuebaojiluList',json).then(getResponse);
    },
    yeb(json,callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('Yuebao/showMoney',json).then(getResponse);
    },
}

export default model
