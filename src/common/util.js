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

export default {
    scrollToTop: scrollToTop,
    setTitle: setTitle,
    handleEnter: handleEnter
};