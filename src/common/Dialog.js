import { Dialog, Toast} from 'vant';
import i18n from '@/i18n'

const dialog = {
    Confirm(msg,event,btnText,title) {
        Dialog.confirm({
            title: "Tips",
            message: msg,
            confirmButtonText: btnText||i18n.t('dialog[1]'),
            closeOnPopstate: true
        }).then(event).catch(()=>{});
    },
    Alert(msg,event,btn) {
        Dialog.alert({
            // title: i18n.t('dialog[0]'),
			title: "Tips",
            message: msg,
            confirmButtonText: btn||i18n.t('dialog[1]'),
            closeOnPopstate: true,
            closeOnClickOverlay: true
        }).then(event).catch(()=>{});
    },
    Toast(msg,position) {
        Toast({
			title: "Tips",
            message: msg,
            position: position||'bottom'
        });
    },
    Loading(msg,el) {
        Toast.loading({
			title: "Tips",
            message: msg||i18n.t('dialog[2]'),
            duration: 0,
            forbidClick: true,
            getContainer: el||'body'
        });
    },
    Close() {
        Toast.clear();
    },
}

export default dialog