const c = 'a'.charCodeAt(0);
const alphabets = Array.apply(null, new Array(26)).map((v, i) => {
    return String.fromCharCode(c + i);
});
const nums = [...Array(100).keys()]
const identifier = alphabets.concat(nums)

setInterval(() => {
    identifier.forEach(function (c) {
        const selector = '#skip-button\\:' + c +' > span > button'
        const button = document.querySelector(selector);
        if (button != null) {
            button.click();
        }
    })
}, 1000)
