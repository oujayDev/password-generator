let passLength = document.getElementById("pass-length")

let pwBox1 = document.getElementById("pass-box1")
let pwBox2 = document.getElementById("pass-box2")
let pwBox3 = document.getElementById("pass-box3")
let pwBox4 = document.getElementById("pass-box4")

let pwObj = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: `~\`!@#$%^&*()_-+={[}]|:;"'<,>.?/`
}

let allChars = pwObj.lowerCase + pwObj.upperCase + pwObj.numbers + pwObj.symbols


passLength.oninput = function() {
  let pwLength = document.getElementById("pw-length")
  pwLength.textContent = "Password Length: " + passLength.value
  // the code below is for the styling of the slider
  let value = (this.value - this.min)/(this.max - this.min) * 100
  this.style.background = 'linear-gradient(to right, #10B981 0%, #10B981 ' + value + '%, #0C4A6E ' + value + '%, #0C4A6E 100%)'
}

function getRandomChars() {
  let result = ""
  let length = passLength.value
  for (let i = 0; i < length; i++) {
    result += allChars[ Math.floor(Math.random() * allChars.length) ]
  }
  return result
}

function generatePass() {
  pwBox1.value = getRandomChars()
  pwBox2.value = getRandomChars()
  pwBox3.value = getRandomChars()
  pwBox4.value = getRandomChars()
}

function copyPassword(contentToCopy) {
	let content = contentToCopy.value
  navigator.clipboard.writeText(content).then(() => {
    alert("Copied to clipboard!")
  })
}