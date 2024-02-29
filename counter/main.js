let dec = document.getElementById("btn__dec")
let inc = document.getElementById("btn__inc")
let res = document.getElementById("btn__res")
let countDis = document.getElementById("card__heading")

let count = 0

// Dec 
dec.onclick = function() {
    count--
    countDis.innerHTML = count
}

// Res

res.onclick = function() {
    count = 0
    countDis.innerHTML = count
}

// Inc

inc.onclick = function() {
    count++
    countDis.innerHTML = count
}
