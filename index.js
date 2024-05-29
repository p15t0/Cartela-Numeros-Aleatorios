function criarTabela(nome) {
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const tr_nome = document.createElement("tr");
    const td_nome = document.createElement("td");
    td_nome.innerHTML = nome;
    td_nome.colSpan = 5;

    tr_nome.appendChild(td_nome);
    thead.appendChild(tr_nome);

    const tr_header = document.createElement("tr");
    const th_B = document.createElement("th");
    th_B.innerHTML = "B";
    const th_I = document.createElement("th");
    th_I.innerHTML = "I";
    const th_N = document.createElement("th");
    th_N.innerHTML = "N";
    const th_G = document.createElement("th");
    th_G.innerHTML = "G";
    const th_O = document.createElement("th");
    th_O.innerHTML = "O";

    tr_header.appendChild(th_B);
    tr_header.appendChild(th_I);
    tr_header.appendChild(th_N);
    tr_header.appendChild(th_G);
    tr_header.appendChild(th_O);

    thead.appendChild(tr_header);

    for (let i = 0; i < 5; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            const td = document.createElement("td");
            td.innerHTML = Math.floor(Math.random() * 99) + 1;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const body = document.querySelector("body");
    body.appendChild(tabela);
}

function pedirNomeECriarTabela() {
    const nome = prompt("Digite seu nome:");

    if (nome?.length < 5) {
        alert("Digite um nome com 5 ou mais letras!");
        return;
    }

    criarTabela(nome);
}