const inputText = document.querySelector(".input-text");
const message = document.querySelector(".message");
const copy = document.querySelector(".div-btn-copy");



function encrypt(encryptedString) {

    let codeMatrix = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    encryptedString = encryptedString.toLowerCase();

    for (let i = 0; i < codeMatrix.length; i++) {
        if (encryptedString.includes(codeMatrix[i][0])) {
            encryptedString = encryptedString.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
        }
    }

    return encryptedString;
}

function decrypt(encryptedString) {

    let codeMatrix = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    encryptedString = encryptedString.toLowerCase();

    for (let i = 0; i < codeMatrix.length; i++) {
        if (encryptedString.includes(codeMatrix[i][0])) {
            encryptedString = encryptedString.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
        }
    }

    return encryptedString;
}


function btnCopy() {

    if (message.value == '') {
        message.placeholder = 'Mensagem não encontrada';
        message.style.backgroundImage = "none";
    } else {
        navigator.clipboard.writeText(message.value);
        message.value = '';
        inputText.value = '';
        message.placeholder = 'Texto copiado com sucesso!';
        inputText.placeholder = 'Cole seu texto aqui'
    }
}

function btnEncrypt() {

    if (inputText.value == 0) {
        alert('Você precisa digitar o texto que deseja encriptar.');
    } else if (inputText.value != 0) {
        const encryptedText = encrypt(inputText.value);
        message.value = encryptedText;
        message.style.backgroundImage = "none";
        copy.style.display = "flex";
    }
}

function btnDecrypt() {

    if (inputText.value == 0) {
        alert('You need to type the text you want to >DECRYPT< first.')
    } else if (inputText.value != 0) {
        const decryptedText = decrypt(inputText.value); 
        message.value = decryptedText;
        message.style.backgroundImage = "none";
        copy.style.display = "flex";
    }
}
