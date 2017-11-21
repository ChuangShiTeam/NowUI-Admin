function scrollToTop(number) {
    document.documentElement.scrollTop = number;
    document.body.scrollTop = number;
}

function setTitle(title) {
    document.title = title;
}

export default {
    scrollToTop: scrollToTop,
    setTitle: setTitle
};