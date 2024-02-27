function revName(){
    let name = document.getElementById('name').value
    rName = name.toUpperCase().split("").reverse().join("")
    document.getElementById('revName').innerHTML = `Reversed Name: ${rName}`
}

function gen0100() {
    let number = Math.floor(Math.random() * 101)
    document.getElementById('gen0100').innerHTML = `Number: ${number}`
}

function gen50100() {
    let number = Math.floor(Math.random() * (101 - 50 + 1) + 50)
    document.getElementById('gen50100').innerHTML = `Number: ${number}`
}

function ranLet() {
    const str = document.getElementById('letter').value
    const ind = Math.floor(Math.random() * str.length)
    const char = str.charAt(ind)
    document.getElementById('ranLet').innerHTML = `Character: ${char}`
}