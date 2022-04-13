import axios from '@/common/miliao/Axios'
import store from '@/store'
import dialog from '@/common/miliao/Dialog'
import { Toast } from 'vant'

const model = {
    PhoneLogin(post, callback) {
        Toast.loading({ mask: true, duration: 0, message: '正在登录密聊...' });
        const getResponse = ({ data }) => {
            if (data.code == 1) {
                localStorage['MiLogin'] = 1;
                localStorage['userUid'] = data.info.uid;
                localStorage['userToken'] = data.info.token;
                localStorage['userMid'] = data.info.mid;
                localStorage['userNickName'] = data.info.nickname || '昵称未设置';
                localStorage['userHeader'] = data.info.header;
                localStorage['systemVoice'] = data.info.is_v_d;
                localStorage['userQRCode'] = data.info.code_url;
                localStorage['userType'] = data.info.users_type;
            }else{
                Toast({ message: data.code_dec, position: 'bottom' });
            }
            callback && callback(data);
        }
        axios.post('User/phonelogin', post, { noLogin: true }).then(getResponse);
    },
    Logout(callback) {
        const getData = ({ data }) => {
            var currUser = localStorage['CurrUser'];
            var userArr = localStorage['UserArr'];
            localStorage.clear();
            localStorage['CurrUser'] = currUser;
            localStorage['UserArr'] = userArr;
            callback && callback(data);
            window.parent.postMessage({ close: true, logout: true }, '*');
        }
        axios.post('User/Logout').then(getData);
    },
    GetUserData(callback) {
        const getResponse = ({ data }) => {
            delete data.code;
            store.dispatch("UpdateChatData", data);
            callback && callback(data);
        }
        axios.post('User/GetUserData').then(getResponse);
    },
    SoMi(mid, callback) {
        const getResponse = ({ data }) => {
            if (data.code == 1) {
                data.info.nickname = data.info.nickname || '昵称未设置';
            }
            callback && callback(data);
        }
        axios.post('User/SoMi', { mid: mid }).then(getResponse);
    },
    GetUserInfo(callback) {
        const getResponse = ({ data }) => {
            if (data.code == 1) {
                data.info.nickname = data.info.nickname || '昵称未设置';
                localStorage['userNickName'] = data.info.nickname;
                localStorage['userHeader'] = data.info.header;
                localStorage['userQRCode'] = data.info.code_url;
                localStorage['systemVoice'] = data.info.is_v_d;
                store.dispatch("UpdateMiUserInfo", data.info);
            } else {
                data.info = {
                    nickname: '',
                    header: ''
                }
            }
            callback && callback(data);
        }
        axios.post('User/GetUserInfo').then(getResponse);
    },
    SetUserInfo(post, callback) {
        Toast.loading({ mask: true, duration: 0, message: '正在提交...' });
        const getResponse = ({ data }) => {
            Toast.clear();
            if (data.code == 1) {
                callback && callback(data);
                this.GetUserInfo();
            } else {
                callback && callback(false);
                Toast({ message: data.code_dec, position: 'bottom' });
            }
        }
        axios.post('User/SetUserInfo', post).then(getResponse);
    },
    UploadImg(post, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('User/UploadImg', post, { fromData: true }).then(getResponse);
    },

    CreateGroups(group, password, callback) {
        Toast.loading({ mask: true, duration: 0, message: '正在提交...' });
        const getResponse = ({ data }) => {
            Toast.clear();
            if (data.code == 1) {
                callback && callback(data);
            } else {
                Toast({ message: data.code_dec, position: 'bottom' });
            }
        }
        axios.post('Groups/CreateGroups', { fid: group, password: password }).then(getResponse);
    },
    GroupsList(callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
            store.dispatch("UpdateGroupList", data.list||[]);
        }
        axios.post('Groups/GroupsList').then(getResponse);
    },
    SoGroups(gid, callback) {
        const getResponse = ({ data }) => {
            if (data.code == 1) {
                data.info.nickname = data.info.nickname || '密群名未设置';
            }
            callback && callback(data);
        }
        axios.post('Groups/SoGroups', { gid: gid }).then(getResponse);
    },
    NewGroupsList(callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('Groups/GroupsNewList').then(getResponse);
    },
    AddGroups(gid, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('Groups/ApplyGroups', { gid: gid }).then(getResponse);
    },
    GetGroupsInfo(gid, callback) {
        const getResponse = ({ data }) => {
            if (data.code == 1) {
                data.info.group_name = data.info.group_name || '密群名未设置';
                store.dispatch("UpdateGroupInfo", data.info);
                callback && callback(data);
            }
        }
        axios.post('Groups/GetGroupsInfo', { gid: gid }).then(getResponse);
    },
    GroupsMember(gid, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
            if(data.code==1){
                store.dispatch("UpdateGroupMember", data.list);
            }
        }
        axios.post('Groups/GroupsMember', { gid: gid }).then(getResponse);
    },
    SetGroupsInfo(post, callback) {
        Toast.loading({ mask: true, duration: 0, message: '正在提交...' });
        const getResponse = ({ data }) => {
            Toast.clear();
            if (data.code == 1) {
                callback && callback(data);
            } else {
                callback && callback(false);
                Toast({ message: data.code_dec, position: 'bottom' });
            }
        }
        axios.post('Groups/SetGroupsInfo', post).then(getResponse);
    },
    InvitationJoinGroups(gid, group, callback) {
        Toast.loading({ mask: true, duration: 0, message: '正在提交...' });
        const getResponse = ({ data }) => {
            if (data.code == 1) {
                callback && callback(data);
            }
            Toast({ message: data.code_dec, position: 'bottom' });
        }
        axios.post('Groups/InvitationJoinGroups', { gid: gid, fid: group }).then(getResponse);
    },
    GetGroupsnewInfo(id, callback) {
        const getResponse = ({ data }) => {
            if (data.code == 1) {
                data.info.nickname = data.info.nickname || '昵称未设置';
                callback && callback(data);
            }
        }
        axios.post('Groups/GetGroupsnewInfo', { id: id }).then(getResponse);
    },
    SetGroupsnewInfo(post, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
            if (data.code == 0) {
                dialog.Alert(data.code_dec);
            }
        }
        axios.post('Groups/SetGroupsnewInfo', post).then(getResponse);
    },
    AddFriends(mid, content, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('Friends/AddFriends', { mid: mid, content: content }).then(getResponse);
    },
    FriendsList(post, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
            if(!post){
                store.dispatch("UpdateFriendList", data.list||[]);
            }
        }
        axios.post('Friends/FriendsList', post).then(getResponse);
    },
    NewsFriendsList(callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('Friends/NewsFriendsList').then(getResponse);
    },
    GetFriendsInfo(id, callback) {
        const getResponse = ({ data }) => {
            if (data.code == 1) {
                data.info.nickname = data.info.nickname || '昵称未设置';
                store.dispatch("UpdateFriendInfo", data.info);
                callback && callback(data);
            }
        }
        axios.post('Friends/GetFriendsInfo', { id: id }).then(getResponse);
    },
    SetFriendsInfo(post, callback) {
        Toast.loading({ mask: true, duration: 0, message: '正在提交...' });
        const getResponse = ({ data }) => {
            Toast.clear();
            if (data.code == 1) {
                callback && callback(data);
            } else {
                callback && callback(false);
                Toast({ message: data.code_dec, position: 'bottom' });
            }
        }
        axios.post('Friends/SetFriendsInfo', post).then(getResponse);
    },

    GetRecordList(post, callback) {
        const getResponse = ({ data }) => {
            if (post.chat_type == 1) {
                data.tit = data.tit || '昵称未设置';
            }
            if (post.chat_type == 2) {
                data.tit = data.tit || '密群名未设置';
            }
            callback && callback(data);
        }
        axios.post('Record/GetRecordList', post).then(getResponse);
    },
    SendRecord(post, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('Record/SendRecord', post).then(getResponse);
    },
    SoRecord(content, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('Record/SoRecord', { content: content }).then(getResponse);
    },
    SeeAllRecord(post, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('Record/seeAllRecord', post).then(getResponse);
    },
    DelUserNew(post, callback) {
        const getResponse = ({ data }) => {
            if (data.code == 1) {
                callback && callback(data);
            } else {
                Toast({ message: data.code_dec, position: 'bottom' });
            }
        }
        axios.post('Record/delUserNew', post).then(getResponse);
    },
    BindUid(post, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('base/bind_uid', post).then(getResponse);
    },


    NewRegister(post, callback) {
        Toast.loading({ mask: true, duration: 0, message: '正在提交...' });
        const getResponse = ({ data }) => {
            callback && callback(data);
            Toast({ message: data.code_dec, position: 'bottom' });
        }
        axios.post('User/newuserregister', post, { noLogin: true }).then(getResponse);
    },
    GetGroupRecordList(post, callback) {
        const getResponse = ({ data }) => {
            data.tit = data.tit || '密群名未设置';
            callback && callback(data);
        }
        axios.post('Record/GetgroupRecordList', post).then(getResponse);
    },
    DelRecord(post,callback) {
        Toast.loading({ mask: true, duration: 0, message: '正在提交...' });
        const getResponse = ({data}) => {
            callback&&callback(data);
            Toast({ message: data.code_dec, position: 'bottom' });
        }
        axios.post('Record/delRecord',post).then(getResponse);
    },
    SetAddress(post, callback) {
        const getResponse = ({ data }) => {
            callback && callback(data);
        }
        axios.post('User/addressbook', post).then(getResponse);
    },
    SmsCode(callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('sms/smsCode').then(getData);
    },
    GetSMSCode(post,callback){
        Toast.loading({ mask: true, duration: 0, message: '正在发送...' });
        const getData = ({data}) => {
            callback&&callback(data);
            Toast({ message: data.code_dec, position: 'bottom' });
        }
        axios.post('Sms/sendSMSCode',post).then(getData);
    },
    SendBill(post,callback){
        Toast.loading({ mask: true, duration: 0, message: '正在提交...' });
        const getData = ({data}) => {
            callback&&callback(data);
            Toast({ message: data.code_dec, position: 'bottom' });
            if(data.code==1){
                this.GetUserInfo();
            }
        }
        axios.post('hongbao/giveOutHongBao',post).then(getData);
    },
    RobBill(id,callback){
        Toast.loading({ duration: 0, message: '正在领红包...' });
        const getData = ({data}) => {
            callback&&callback(data);
            Toast({ message: data.code_dec, position: 'bottom' });
            if(data.code==1){
                this.GetUserInfo();
            }
        }
        axios.post('hongbao/grabHongBao',{hb_id:id, sitetoken: localStorage['Token']}).then(getData);
    },
    BillInfo(id,callback){
        Toast.loading({ duration: 0, message: '加载中...' });
        const getData = ({data}) => {
            Toast.clear();
            callback&&callback(data);
        }
        axios.post('hongbao/getHongBaoinfo',{hb_id:id}).then(getData);
    },
    CreateUploadImage(callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Aliyun/CreateUploadImage').then(getData);
    },
    CreateUploadVideo(post,callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Aliyun/CreateUploadVideo',post).then(getData);
    },
    RefreshUploadVideo(post,callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Aliyun/RefreshUploadVideo',post).then(getData);
    },
    GetPlayInfo(post,callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Aliyun/GetPlayInfo',post).then(getData);
    },
    GetVideoPlayAuth(post,callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Aliyun/GetVideoPlayAuth',post).then(getData);
    },
    GetUploadDetails(post,callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Aliyun/GetUploadDetails',post).then(getData);
    },
    ListSnapshots(post,callback){
        const getData = ({data}) => {
            callback&&callback(data);
        }
        axios.post('Aliyun/ListSnapshots',post).then(getData);
    },
}

export default model