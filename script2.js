let saldo = 500;
let total = 0;

// FUNÇÃO PARA ADICIONAR NOVO GASTO
function adicionarGasto() {
    // PEGAR OS VALORES DOS CAMPOS
    let descricaoInput = document.getElementById("descricao");
    let valorInput = document.getElementById("valor");

    let descricao = descricaoInput.value.trim();
    let valor = Number(valorInput.value);

    if (descricao === "" || isNaN(valor) || valor <= 0) {
        alert("Preencha a descrição e um valor válido maior que zero!");
        return;
    }

    // ATUALIZA OS VALORES
    total += valor;
    saldo -= valor;

    // ADICIONA O GASTO NA LISTA
    document.getElementById("listaGastos").innerHTML += `
        <div class="gasto">
            <span>${descricao}</span>
            <span>R$ ${valor.toFixed(2)}</span>
        </div>
    `;

    // ATUALIZA O TOTAL E O SALDO NA TELA
    document.getElementById("total").textContent = "R$ " + total.toFixed(2);
    document.getElementById("saldo").textContent = "R$ " + saldo.toFixed(2);

    // LIMPA OS CAMPOS PARA UMA NOVA DESPESA
    descricaoInput.value = "";
    valorInput.value = "";
    descricaoInput.focus();
}

// FUNÇÃO PARA LIMPAR TUDO (RESET)
function limparGastos() {
    // Restaura os valores iniciais das variáveis
    saldo = 500;
    total = 0;

    // Atualiza a interface
    document.getElementById("listaGastos").innerHTML = "";
    document.getElementById("total").textContent = "R$ 0.00";
    document.getElementById("saldo").textContent = "R$ " + saldo.toFixed(2);

    // Limpa os campos de input e foca no primeiro campo
    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("descricao").focus();
}

// FUNÇÃO PARA ADICIONAR SALDO
function adicionarSaldo() {
    let valorAdicionado = Number(prompt("Digite o valor a ser adicionado ao saldo:"));

    if (isNaN(valorAdicionado) || valorAdicionado <= 0) {
        alert("Digite um valor válido maior que zero!");
        return;
    }

    // Atualiza a variável e a tela
    saldo += valorAdicionado;
    document.getElementById("saldo").textContent = "R$ " + saldo.toFixed(2);
}