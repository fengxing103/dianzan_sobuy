import { Dialog, Toast } from 'vant';

const dialog = {
    Confirm(msg,event,title) {
        Dialog.confirm({
            title: title||false,
            className: 'D-confirm',
            message: msg,
            confirmButtonText: '确定',
            closeOnPopstate: true
        }).then(event).catch(()=>{});
    },
    Alert(msg,event,btn) {
        Dialog.alert({
            className: 'D-confirm',
            message: msg,
            closeOnPopstate: true,
            confirmButtonText: btn||'确定'
        }).then(event);
    },
    Toast(msg,position) {
        Toast({
            message: msg,
            position: position||'bottom'
        });
    },
}

export default dialog