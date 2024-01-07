const title = document.querySelector(".title")
const text = document.querySelector(".text")

let meva = ["olma", "xurmo", "nok", "uzum"]
let result = [ "bu mevalar bor"]
while (true) {
    let javob = prompt("Meva kiriting")
    if (javob == "stop") {
        break
    } else if (meva[0] == javob || meva[1] == javob || meva[2] == javob || meva[3] == javob) {
        result.unshift(javob)
        continue
    } else {
        meva.push(javob)
        
    }
}
title.textContent = meva
text.textContent = result