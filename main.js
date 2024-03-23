async function EmojiPedia_AllEmoji_page1() {
    var Apikey = "d8f302d06bb3537891dac52322c171a531747330"
    var Api_URL = `https://emoji-api.com/emojis?access_key=${Apikey}`
    var ApiFetch = await fetch(Api_URL)
    var res = await ApiFetch.json()
    // all emoji 1858
    for (i = 0; i < 459; i++) {
        var emoji = res[i].character
        var EmojiName = res[i].subGroup
        console.log(EmojiName)
        console.log(emoji)
        console.log(i)
        var inner = `
        <div>
        <h1>${emoji}</h1>
        <p>${EmojiName}</p>
       </div>
        `
        document.querySelector("article").innerHTML += inner
    }
}
async function EmojiPedia_AllEmoji_page2() {
    var Apikey = "d8f302d06bb3537891dac52322c171a531747330"
    var Api_URL = `https://emoji-api.com/emojis?access_key=${Apikey}`
    var ApiFetch = await fetch(Api_URL)
    var res = await ApiFetch.json()
    // all emoji 1858
    for (i = 459; i < 800; i++) {
        var emoji = res[i].character
        var EmojiName = res[i].subGroup
        console.log(EmojiName)
        console.log(emoji)
        console.log(i)
        var inner = `
        <div>
        <h1>${emoji}</h1>
        <p>${EmojiName}</p>
       </div>
        `
        document.querySelector("article").innerHTML += inner
    }
}
async function EmojiPedia_AllEmoji_page3() {
    var Apikey = "d8f302d06bb3537891dac52322c171a531747330"
    var Api_URL = `https://emoji-api.com/emojis?access_key=${Apikey}`
    var ApiFetch = await fetch(Api_URL)
    var res = await ApiFetch.json()
    // all emoji 1858
    for (i = 800; i < 1459; i++) {
        var emoji = res[i].character
        var EmojiName = res[i].subGroup
        console.log(EmojiName)
        console.log(emoji)
        console.log(i)
        var inner = `
        <div>
        <h1>${emoji}</h1>
        <p>${EmojiName}</p>
       </div>
        `
        document.querySelector("article").innerHTML += inner
    }
}
    function getParameter(x){
        params= window.location.href.split("?")[1].split("&"); 
        for(i=0;i<params.length;i++){
            // ["id","example"]
            e = params[i].split("=");
            if(e[0] == x){
                return e[1];
            }
        }
    }
    var id = getParameter("id")
var page1 = document.getElementById("page1")
var page2 = document.getElementById("page2")
var page3 = document.getElementById("page3")
page1.onclick = ()=>{
    location.href = "/emoji.html?id=E12f1f37-44b6-4dc6-8418-9dc301130951"
}
page2.onclick =()=>{
    location.href = "/emoji.html?id=F9061467-710a-4726-B12a-24a04b4840f5"
}
page3.onclick = ()=>{
    location.href = "/emoji.html?id=77c37622-8c5b-4581-Bf89-41c24faa34d3"
}
if(id === "E12f1f37-44b6-4dc6-8418-9dc301130951"){
    EmojiPedia_AllEmoji_page1()
}
if(id === "F9061467-710a-4726-B12a-24a04b4840f5"){
    EmojiPedia_AllEmoji_page2()
}
if(id === "77c37622-8c5b-4581-Bf89-41c24faa34d3"){
   EmojiPedia_AllEmoji_page3()
}