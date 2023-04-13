// https://api.telegram.org/bot6110635795:AAEah0QSohxMi64cBCzT2QUujLNXZyYL6qE/getUpdates


// let TOKEN = "6110635795:AAEah0QSohxMi64cBCzT2QUujLNXZyYL6qE"
// let CHAT_ID = "1084152814"
// let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

// let success = document.getElementById("success")

// document.getElementById("tg").addEventListener("submit", function(e){
//     e.preventDefault()
//     let message = `<b><i>Заявка с сайта</i></b>\n`
//     message += `<b>Отправитель:</b> ${this.name.value}\n`
//     message += `<b>Номер:</b> ${this.number.value}\n`
//     message += `<b>Почта:</b> ${this.email.value}`
//     console.log(message);
//     axios.post(URL_API, {
//         chat_id: CHAT_ID,
//         parse_mode:"html",
//         text:message
    // }).then((res) => {
    //     this.name.value=""
    //     this.number.value=""
    //     this.email.value=""
    //     success.innerHTML="Сообшение отправлено!"
    //     success.style.display="block"
    // }).catch((err) => {
    //     console.log(err);
    // }).finally(() => console.log("Successfully"))
// })

let TOKEN = "6110635795:AAEah0QSohxMi64cBCzT2QUujLNXZyYL6qE"
let CHAT_ID = "1084152814"
let URL_API = `https://api.telegram.org/bot${TOKEN}/sendDocument`

document.getElementById("tg").addEventListener("submit", function(e){
    e.preventDefault()
    const formaData = new FormData()
    formaData.append("chat_id", CHAT_ID)
    formaData.append("document", this.document.files[0])
    axios.post(URL_API, formaData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((res) => {
        this.document.value=""
        success.innerHTML="Сообшение отправлено!"
        success.style.display="block"
    }).catch((err) => {
        console.log(err);
    }).finally(() => console.log("Successfully"))
})
