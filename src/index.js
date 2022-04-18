// index.js - Shirozii (contact@shiroko.me) - 2022/04/18
// Description: messy script file >w<
const host = window.location.host

function fetchj(path) {
    console.log(host + path)
    return fetch("http://" + host + path)
}

function setPara(text) {
    const content = document.getElementById("message")
    content.innerHTML = "<p id='message'>" + text  + "</p>"
}

function start() {
    fetchj("/message.txt").then(file => {
        file.text().then(text => {
            console.log(text)
            content.innerHTML = text
        })
    }).catch(err => {
        console.warn(">w< error: " +  err)
        content.innerHTML = ">w< error: " +  err
    })
}