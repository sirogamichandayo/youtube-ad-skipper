const c = 'a'.charCodeAt(0);
const alphabets = Array.apply(null, new Array(26)).map((v, i) => {
    return String.fromCharCode(c + i);
});
alphabets.push('')
const nums = [];
for (let i = 0; i < 10; i++) {
    nums.push(String(i))
}
const identifier = alphabets.concat(nums)

setInterval(() => {
    identifier.forEach(function (c1) {
        identifier.forEach(function (c2) {
            const s1 = `#skip-button\\:${c1}${c2} > span > button`
            const b1 = document.querySelector(s1);
            if (b1 != null) {
                b1.click();
            }

            const s2 = `#preskip-component\\:${c1}${c2} > span`
            const b2 = document.querySelector(s2)
            if (b2 != null) {
                b2.click();
            }

            const s3 = `#invideo-overlay\\:${c1}${c2} > div > div:nth-child(1) > div.ytp-ad-overlay-close-container > button`
            const b3 = document.querySelector(s3)
            if (b3 != null) {
                b3.click();
            }
        })
    })
}, 100) // 0.1s
