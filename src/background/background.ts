
console.log('woro333333333');
const val55 = "valconst"
const objback = { key: 'value2'}
var dataObj = {
urllik: "link",
nameproducy:"namenn"
};
chrome.storage.local.set(dataObj)

chrome.storage.local.get(['urllik'], result => {
    console.log('get val back urllik',result.urllik) // returns value
})

