function scrollToTop(number) {
    document.documentElement.scrollTop = number;
    document.body.scrollTop = number;
}

export default {
    scrollToTop: scrollToTop
};