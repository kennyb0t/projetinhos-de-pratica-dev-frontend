const pwA1 = document.getElementById("pw");
const copyA1 = document.getElementById("copy");
const lenA1 = document.getElementById("len");
const upperA1 = document.getElementById("upper");
const lowerA1 = document.getElementById("lower");
const numberA1 = document.getElementById("number");
const symbolA1 = document.getElementById("symbol");
const generateA1 = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const nummbers = "0123456789";
const symbols = "!@#$%&*()_-+=";


function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumbers() {
    return nummbers[Math.floor(Math.random() * nummbers.length)];
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenA1.value;

    let password = "";

    if (upperA1.checked) {
        password += getUppercase();
    }

    if (lowerA1.checked) {
        password += getLowercase();
    }

    if (numberA1.checked) {
        password += getNumbers();
    }

    if (symbolA1.checked) {
        password += getSymbols();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwA1.innerText = password;

}

function generateX() {
    const zz = [];
    if (upperA1.checked) {
        zz.push(getUppercase());
    }

    if (lowerA1.checked) {
        zz.push(getLowercase());
    }

    if (numberA1.checked) {
        zz.push(getNumbers());
    }

    if (symbolA1.checked) {
        zz.push(getSymbols());
    }

    if (zz.length === 0) return "";

    return zz[Math.floor(Math.random() * zz.length)];
}


generateA1.addEventListener("click", generatePassword);

copyA1.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwA1.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Senha copiada com sucesso.");

});


// TRABALHAR NESSE CÓDIGO AQUI PPRT KENNY NMRL TU É MTO BURRO MANÉ KKKKKKKKKKKKKXD //
const checkbox = document.querySelectorAll("upper", "lower", "symbol", "number");
const generate = document.querySelector("#generate");
const errormsg = "Selecione as opções abaixo para gerar sua senha.";
const pw = document.getElementById("pw");

pw.addEventListener("pw", (event) => {
    event.preventDefault();
});

function messageError() {
    const ErrorMsg = input.parentNode.querySelector("");
    ErrorMsg.innerText = "a";
    input.className = type ? "hue" : "err";
    return type;
}