let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text)
console.log(text.length)


text = text.replace(/[.,]/g,"");
text = text.split(" ")
console.log(text)
console.log(text.length)