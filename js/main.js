const text = document.querySelector('.text')
const textMath = document.querySelector('.text__math')

function detectBrowser() {
    let result = 'Other'
    let resultMath = ''

    if (navigator.userAgent.indexOf('YaBrowser') !== -1) {
        result = 'Yandex Browser';
    } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
        result = 'Mozilla Firefox';
        resultMath = 'y=x+3'
    } else if (navigator.userAgent.indexOf('Opera') !== -1) {
        result = 'Opera';
        resultMath = 'y=3*x+5'
    } else if (navigator.userAgent.indexOf('Chrome') !== -1) {
        result = 'Google Chrome';
        resultMath = 'y=x/3+x/5'
    }
    return {one: result, two: resultMath}
}

const browser = detectBrowser()

text.innerText = browser.one
textMath.innerText = browser.two