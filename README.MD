# **Calculadora Simples**

Este é um projeto simples de calculadora implementado em JavaScript, HTML e CSS. A calculadora aceita entradas por meio de cliques em botões na interface gráfica e exibe os resultados na tela.

## **Funcionalidades**

### **Limpar Tela e Resultado**

**Botão "C" (Clear):** Limpa tanto a tela de entrada quanto a tela de resultados.

document.getElementById('clear').addEventListener('click', function () {
  screen.value = null;
  resultScreen.value = null;
});

### **Limpar Último Caractere**

**Botão "CE" (Clear Entry):** Remove o último caractere da tela de entrada.

document.getElementById('clearEntry').addEventListener('click', function () {
  screen.value = screen.value.slice(0, -1);
});

### **Realizar Cálculos**

**Botão "=" (Equals):** Avalia a expressão matemática presente na tela de entrada e exibe o resultado na tela de resultados.

document.getElementById('equals').addEventListener('click', function () {
  try {
    resultScreen.value = eval(screen.value);
  } catch (error) {
    resultScreen.value = error.nodeName;
  } finally {
    screen.value = null;
  }
});

### **Entrada de Dados**

**Botões Numéricos e Operadores:** Adicionam números e operadores à tela de entrada.

function addKeysOntheScreen(event) {
  let keyPress = event.target.textContent;

  if (keyPress.match(/^[0-9]*$|^\+|-|\*|\/|%|\.|/))  {
    if (!keyPress.match(/^[a-zA-Z=]*$/)) {
      screen.value += keyPress;
      resultScreen.value = null;
    }
  }
}

for (let i = 0; i < NUMBERS.length; i++) {
  NUMBERS[i].addEventListener('click', addKeysOntheScreen);
}

## **Uso**

Abra o arquivo github page: [Projeto](https://ferreiracodetech.github.io/calculadora_simples/) em um navegador.

Clique nos botões numéricos e operadores para realizar cálculos.

## **Contato**

Email: contatofilipe.sferreira@outlook.com
