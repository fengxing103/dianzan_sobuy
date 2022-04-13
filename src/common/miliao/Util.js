import $ from "jquery"
import { Dialog } from 'vant';

const util = {
    KeepDecimal: function (number, val) {
        var bei = 1;
        switch (val) {
            case 1:
                bei = 10;
                break;
            case 2:
                bei = 100;
                break;
            case 3:
                bei = 1000;
                break;
            case 4:
                bei = 10000;
                break;
        }
        return Math.round(number * bei) / bei;
    },
    CopyText: function (ios, app, type) {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
            window.getSelection().removeAllRanges();
            var Url2 = document.getElementById(ios);
            var range = document.createRange();
            range.selectNode(Url2);
            window.getSelection().addRange(range);
            var successful = document.execCommand('copy');
            if (successful) {
                Dialog.alert({ className: 'D-confirm', message: '复制' + (type == 1 ? '密群号' : type == 2 ? '推广链接' : '密聊号') + '成功' });
            } else {
                Dialog.alert({ className: 'D-confirm', message: 'IOS系统不支持，请长按链接自行复制' });
            }
            window.getSelection().removeAllRanges();
        } else {
            var Url2 = document.getElementById(app);
            Url2.select();
            document.execCommand("Copy");
            Dialog.alert({ className: 'D-confirm', message: '复制' + (type == 1 ? '密群号' : type == 2 ? '推广链接' : '密聊号') + '成功' });
        }
    },
    SortBy: function (arr, key, desc) {
        return arr.sort(function (a, b) {
            if (key) {
                if (desc) {
                    return b[key] - a[key];
                } else {
                    return a[key] - b[key];
                }
            } else {
                if (desc) {
                    return b - a;
                } else {
                    return a - b;
                }
            }
        });
    },
    CompressImg: function (imgType, imgSrc, maxW, callback) {
        if (!imgType.match(/.png|.jpg|.jpeg|.gif/)) {
            Dialog.alert({ className: 'D-confirm', message: '只能上传图片' });
            return;
        }
        var newImg = new Image();
        newImg.src = imgSrc;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        newImg.onload = function () {
            // 图片原始尺寸
            var originWidth = this.width;
            var originHeight = this.height;
            // 最大尺寸限制
            var maxWidth = maxW, maxHeight = maxW;
            // 目标尺寸
            var targetWidth = originWidth, targetHeight = originHeight;
            // 图片尺寸超过限制
            if (originWidth > maxWidth || originHeight > maxHeight) {
                if (originWidth / originHeight > maxWidth / maxHeight) {
                    // 更宽，按照宽度限定尺寸
                    targetWidth = maxWidth;
                    targetHeight = Math.round(maxWidth * (originHeight / originWidth));
                } else {
                    targetHeight = maxHeight;
                    targetWidth = Math.round(maxHeight * (originWidth / originHeight));
                }
            }
            // canvas对图片进行缩放
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            // 清除画布
            context.clearRect(0, 0, targetWidth, targetHeight);
            // 图片压缩
            context.drawImage(newImg, 0, 0, targetWidth, targetHeight);
            var base64 = canvas.toDataURL(imgType);
            var arr = base64.split(',');
            var bstr = atob(arr[1]);
            var n = bstr.length;
            var u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            //转换成file对象
            callback(new File([u8arr], '', { type: imgType }));
        };
    },
    CompressVideo: function (imgType, imgSrc, callback) {
        if (!imgType.match(/.mp4|.3GP|.rmvb|.rm|.mov|.AVI/)) {
            Dialog.alert({ className: 'D-confirm', message: '只能上传视频' });
            return;
        }
        var fileReader = new FileReader();
        fileReader.readAsDataURL(imgSrc);
        fileReader.onload = function (ev) {
            var base64 = ev.target.result;
            var arr = base64.split(',');
            var bstr = atob(arr[1]);
            var n = bstr.length;
            var u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            //转换成file对象
            callback(new File([u8arr], '', { type: imgType }));
        };
    },
    LongTap(obj,callback) {
        var timeOutEvent = '',longClick = false;
        $('body').on('touchstart', obj, (e) => {
            clearTimeout(timeOutEvent);
            timeOutEvent = setTimeout(()=>{
                longClick = true;
            },600)
        });
        $('body').on('mousedown', obj, (e) => {
            clearTimeout(timeOutEvent);
            timeOutEvent = setTimeout(()=>{
                longClick = true;
            },600)
        });
        $('body').on('touchmove', obj, (e) => {
            clearTimeout(timeOutEvent);
            longClick = false
            timeOutEvent = '';
            e.preventDefault();
        });
        $('body').on('mousemove', obj, (e) => {
            clearTimeout(timeOutEvent);
            longClick = false
            timeOutEvent = '';
            e.preventDefault();
        });
        $('body').on('touchend', obj, (e) => {
            if(longClick){
                callback({state:'long',event:e})
            }else{
                callback({state:'click',event:e})
            }
            longClick = false
            clearTimeout(timeOutEvent);
            return false;
        });
        $('body').on('mouseup', obj, (e) => {
            if(longClick){
                callback({state:'long',event:e})
            }else{
                callback({state:'click',event:e})
            }
            longClick = false
            clearTimeout(timeOutEvent);
            return false;
        });
    },
    DateFormat(fmt, date) {
        let ret;
        let opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "M+": (date.getMonth() + 1).toString(),     // 月
            "D+": date.getDate().toString(),            // 日
            "h+": date.getHours().toString(),           // 时
            "m+": date.getMinutes().toString(),         // 分
            "s+": date.getSeconds().toString(),         // 秒
            "S+" : date.getMilliseconds().toString()     //毫秒
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    },
    TimeFormat(time) {
        var hh = Math.floor(time/3600);
        var mm = Math.floor((time%3600)/60);
        var ss = Math.round(time%60);
        var h = hh>9?hh:'0'+hh;
        var m = mm>9?mm:'0'+mm;
        var s = ss>9?ss:'0'+ss;
        return (hh?h+':':'')+m+':'+s;
    },
}
export default util