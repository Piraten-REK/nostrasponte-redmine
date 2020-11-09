"use strict";
ready(() => {
    console.log('Hello World!');
});
function ready(fn) {
    if (document.readyState !== 'loading')
        fn();
    // @ts-ignore
    else
        document.addEventListener('DOMContentLoaded', fn);
}
//# sourceMappingURL=theme.js.map