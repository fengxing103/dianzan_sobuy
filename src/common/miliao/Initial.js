import $ from 'jquery'
const initial = {
    InitScrollWrap(el,otherH) {
        const winH = document.body.offsetHeight;
        const navH = $(el).find('.van-nav-bar').outerHeight() || 0;
        const searchH = $(el).find('.SearchBar').outerHeight() || 0;
        const tabH = $(el).find('.TabBar').outerHeight() || 0;
        const mainH = winH - navH - searchH - tabH - (otherH||0);
        $(el).find('.Scroll-Wrap').height(mainH);
        this.InitScroll(el);
    },
    InitScroll(el) {
        $(el).find('.Scroll-Con').height('auto');
        const scrollWrap = $(el).find('.Scroll-Wrap').outerHeight();
        const scrollCon = $(el).find('.Scroll-Con').outerHeight();
        if(scrollCon<scrollWrap){
            $(el).find('.Scroll-Con').height(scrollWrap+0.5);
        }
    }
}

export default initial