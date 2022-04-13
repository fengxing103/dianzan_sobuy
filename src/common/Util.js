import $Dialog from '@/common/Dialog'
import i18n from '@/i18n'

const util = {
    MoneyFormat: function(val){
        return (val/10000).toLocaleString();
    },
    KeepDecimal: function(number,val){
        var bei = 1;
        switch(val){
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
        return Math.round(number*bei)/bei;
    },
    CopyText: function (ios,app) {

        if(window.plus){
            var text = document.getElementById(ios).innerText;
            switch ( plus.os.name ) {
                case "Android":
                    var Context = plus.android.importClass("android.content.Context");
                    var main = plus.android.runtimeMainActivity();
                    var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
                    plus.android.invoke(clip,"setText",text);
                    break;
                case "iOS":
                    var UIPasteboard  = plus.ios.importClass("UIPasteboard");
                    var generalPasteboard = UIPasteboard.generalPasteboard();
                    // 设置/获取文本内容:
                    generalPasteboard.setValueforPasteboardType(text, "public.utf8-plain-text");
                    var value = generalPasteboard.valueForPasteboardType("public.utf8-plain-text");
                    break;
            }
            $Dialog.Toast(i18n.t('dialog[3]'));
        }else{
            if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
                window.getSelection().removeAllRanges();
                var Url2 = document.getElementById(ios);
                var range = document.createRange();
                range.selectNode(Url2);
                window.getSelection().addRange(range);
                var successful = document.execCommand('copy');
                if(successful){
                    $Dialog.Toast(i18n.t('dialog[3]'));
                }else{
                    $Dialog.Toast(i18n.t('dialog[4]'));
                }
                window.getSelection().removeAllRanges();
            }else{
                var Url2=document.getElementById(app);
                Url2.select();
                document.execCommand("Copy");
                $Dialog.Toast(i18n.t('dialog[3]'));
            }
        }
    },
    SortBy: function(arr, key, desc) {
        return arr.sort(function(a, b) {
            if (key) {
                if(desc){
                    return b[key] - a[key];
                }else{
                    return a[key] - b[key];
                }
            } else {
                if(desc){
                    return b - a;
                }else{
                    return a - b;
                }
            }
        });
    },
    DateFormat(fmt, date) {
        date = new Date(date);
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
    AddSubDate(n) {
        var dd = new Date();
        dd.setDate(dd.getDate()+n);
        var YY = dd.getFullYear();
        var MM = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);
        var DD = dd.getDate()<10?"0"+dd.getDate():dd.getDate();
        return YY+"-"+MM+"-"+DD;
    },
    CompressImg: function (imgType, imgSrc, maxW, callback) {
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
    OpenUrl(url) {
        // window.open('', '_blank').location = url
        if (window.plus) {
            plus.runtime.openURL(url)
        } else {
            window.open(url)
        }
    },
}
export default util