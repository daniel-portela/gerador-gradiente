let colorOne = document.getElementById("color-a");
let colorTwo = document.getElementById("color-b");
let currentDirection = 'to bottom';
let outputCode = document.getElementById("code");

function setDirection(value, _this) {
    let directions = document.querySelectorAll(".buttons button");
    for (let i of directions) {
        i.classList.remove("active");
    }
    _this.classList.add("active");
    currentDirection = value;
    generateCode(); // Atualiza o código gerado quando a direção é alterada
}

function generateCode() {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function copyText() {
    outputCode.select();
    document.execCommand('copy'); // Comando correto para copiar o texto
    alert("Gradiente copiado com sucesso!");
}

generateCode();
