function scrollToTop(number) {
    document.documentElement.scrollTop = number;
    document.body.scrollTop = number;
}

function setTitle(title) {
    document.title = title;
}

function handleEnter(next, replace, callback) {

    callback();
}

function isPc() {
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return false;
    } else {
        return true
    }
}

export default {
    scrollToTop: scrollToTop,
    setTitle: setTitle,
    handleEnter: handleEnter,
    isPc: isPc
};