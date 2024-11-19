const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const genPassBtn = document.getElementById('generatorBtn')
const password_one = document.getElementById('password_1')
const password_two = document.getElementById('password_2')

let passwordLength = 12

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}


function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}


const updatePassword = function(){
    const generatedPasswordOne = generateRandomPassword()
    const generatedPasswordTwo = generateRandomPassword()
    password_one.textContent = generatedPasswordOne
    password_two.textContent = generatedPasswordTwo
}


genPassBtn.addEventListener("click", updatePassword)
