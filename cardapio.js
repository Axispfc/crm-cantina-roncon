"use strict";

/* =========================================================
   CANTINA RONCON — CARDÁPIO
========================================================= */

const OPCOES = {
  tradicional: [
    {
      id: "media",
      nome: "Média",
      preco: 24
    },
    {
      id: "pequena",
      nome: "Pequena",
      preco: 21
    },
    {
      id: "sem-arroz",
      nome: "Sem arroz e feijão",
      preco: 16
    }
  ],

  premium: [
    {
      id: "media",
      nome: "Média",
      preco: 26
    },
    {
      id: "pequena",
      nome: "Pequena",
      preco: 23
    },
    {
      id: "sem-arroz",
      nome: "Sem arroz e feijão",
      preco: 18
    }
  ],

  feijoada: [
    {
      id: "media",
      nome: "Média",
      preco: 28
    },
    {
      id: "grande",
      nome: "Grande",
      preco: 34
    },
    {
      id: "pequena",
      nome: "Pequena",
      preco: 25
    }
  ]
};

const descricaoBase =
  "Acompanha arroz, feijão, salada, opção de farofa ou legume refogado e guarnição de batata frita ou purê de batata.";

function criarPrato(id, nome, descricao, opcoes) {
  return {
    id,
    nome,
    descricao,
    opcoes
  };
}

/* =========================================================
   PRATOS FIXOS — DISPONÍVEIS TODOS OS DIAS
========================================================= */

const pratosFixos = [
  criarPrato(
    "contra-file",
    "Contra Filé",
    `Contra filé preparado na hora. ${descricaoBase}`,
    OPCOES.premium
  ),

  criarPrato(
    "calabresa",
    "Calabresa",
    `Calabresa acebolada. ${descricaoBase}`,
    OPCOES.tradicional
  ),

  criarPrato(
    "file-de-frango",
    "Filé de Frango",
    `Filé de frango grelhado. ${descricaoBase}`,
    OPCOES.tradicional
  ),

  criarPrato(
    "omelete",
    "Omelete",
    `Omelete de frios. ${descricaoBase}`,
    OPCOES.tradicional
  )
];

/* =========================================================
   PRATOS ESPECIAIS DE CADA DIA
   1 = segunda
   2 = terça
   3 = quarta
   4 = quinta
   5 = sexta
   6 = sábado
========================================================= */

const pratosPorDia = {
  1: [
    criarPrato(
      "bife-parmegiana",
      "Bife à Parmegiana",
      `Bife à parmegiana. ${descricaoBase}`,
      OPCOES.premium
    ),

    criarPrato(
      "coxa-recheada",
      "Coxa Recheada",
      `Coxa de frango recheada com calabresa e bacon. ${descricaoBase}`,
      OPCOES.tradicional
    ),

    criarPrato(
      "fricasse-frango",
      "Fricassê de Frango",
      `Fricassê de frango. ${descricaoBase}`,
      OPCOES.tradicional
    ),

    criarPrato(
      "virado-paulista",
      "Virado à Paulista",
      "Arroz, feijão tropeiro, bisteca, linguiça, couve refogada, banana empanada, ovo frito, torresmo e salada.",
      [
        {
          id: "media",
          nome: "Média",
          preco: 26
        }
      ]
    )
  ],

  2: [
    criarPrato(
      "brachola-frango",
      "Brachola de Frango",
      `Brachola de frango. ${descricaoBase}`,
      OPCOES.tradicional
    ),

    criarPrato(
      "dobradinha",
      "Dobradinha",
      "Arroz, feijão branco, dobradinha e salada, com opção de farofa ou legume refogado.",
      [
        {
          id: "media",
          nome: "Média",
          preco: 24
        },
        {
          id: "pequena",
          nome: "Pequena",
          preco: 21
        }
      ]
    ),

    criarPrato(
      "pernil-assado",
      "Pernil Assado",
      `Pernil assado. ${descricaoBase}`,
      OPCOES.tradicional
    ),

    criarPrato(
      "picadinho",
      "Picadinho",
      `Picadinho ao molho. ${descricaoBase}`,
      OPCOES.tradicional
    ),

    criarPrato(
      "strogonoff-frango",
      "Strogonoff de Frango",
      `Strogonoff de frango. ${descricaoBase}`,
      OPCOES.tradicional
    )
  ],

  3: [
    criarPrato(
      "bife-role",
      "Bife à Rolê",
      `Bife à rolê. ${descricaoBase}`,
      [
        {
          id: "media",
          nome: "Média",
          preco: 26
        },
        {
          id: "pequena",
          nome: "Pequena",
          preco: 23
        }
      ]
    ),

    criarPrato(
      "costelinha-frita",
      "Costelinha Frita",
      `Costelinha suína frita. ${descricaoBase}`,
      OPCOES.tradicional
    ),

    criarPrato(
      "feijoada",
      "Feijoada",
      "Feijoada completa acompanhada de arroz, couve, farofa e torresmo.",
      OPCOES.feijoada
    ),

    criarPrato(
      "frango-assado",
      "Frango Assado",
      `Frango assado. ${descricaoBase}`,
      OPCOES.tradicional
    ),

    criarPrato(
      "rabada",
      "Rabada",
      `Rabada. ${descricaoBase}`,
      [
        {
          id: "media",
          nome: "Média",
          preco: 26
        },
        {
          id: "pequena",
          nome: "Pequena",
          preco: 23
        }
      ]
    )
  ],

  4: [
    criarPrato(
      "frango-quiabo",
      "Frango Cozido com Quiabo",
      `Frango cozido com quiabo. ${descricaoBase}`,
      OPCOES.tradicional
    ),

    criarPrato(
      "lasanha-bolonhesa",
      "Lasanha Bolonhesa",
      "Arroz, feijão, lasanha de carne à bolonhesa e salada.",
      [
        {
          id: "media",
          nome: "Média",
          preco: 27
        }
      ]
    ),

    criarPrato(
      "macarrao-almondegas",
      "Macarrão com Almôndegas",
      "Arroz, macarrão com almôndegas, salada e guarnição de batata frita ou purê de batata.",
      [
        {
          id: "media",
          nome: "Média",
          preco: 24
        },
        {
          id: "pequena",
          nome: "Pequena",
          preco: 21
        }
      ]
    ),

    criarPrato(
      "panqueca",
      "Panqueca",
      `Panqueca de carne. ${descricaoBase}`,
      OPCOES.tradicional
    ),

    criarPrato(
      "rondelli-molho-branco",
      "Rondelli ao Molho Branco",
      "Arroz, rondelli de presunto e queijo ao molho branco, salada e guarnição de batata frita ou purê de batata.",
      [
        {
          id: "media",
          nome: "Média",
          preco: 24
        },
        {
          id: "pequena",
          nome: "Pequena",
          preco: 21
        }
      ]
    )
  ],

  5: [
    criarPrato(
      "frango-parmegiana",
      "Filé de Frango à Parmegiana",
      `Filé de frango à parmegiana. ${descricaoBase}`,
      OPCOES.tradicional
    ),

    criarPrato(
      "file-peixe",
      "Filé de Peixe",
      `Filé de peixe empanado. ${descricaoBase}`,
      OPCOES.tradicional
    )
  ],

  6: [
    criarPrato(
      "costela-bafo",
      "Costela no Bafo",
      `Costela bovina assada no bafo. ${descricaoBase}`,
      [
        {
          id: "media",
          nome: "Média",
          preco: 26
        },
        {
          id: "pequena",
          nome: "Pequena",
          preco: 23
        }
      ]
    ),

    criarPrato(
      "costela-barbecue",
      "Costela Suína com Barbecue",
      `Costelinha suína assada ao molho barbecue. ${descricaoBase}`,
      OPCOES.tradicional
    ),

    criarPrato(
      "escondidinho-carne-seca",
      "Escondidinho de Carne Seca",
      "Arroz, escondidinho de carne seca, salada e guarnição de batata frita ou purê de batata.",
      [
        {
          id: "media",
          nome: "Média",
          preco: 26
        }
      ]
    ),

    criarPrato(
      "escondidinho-frango",
      "Escondidinho de Frango",
      "Arroz, escondidinho de frango, salada e guarnição de batata frita ou purê de batata.",
      [
        {
          id: "media",
          nome: "Média",
          preco: 26
        }
      ]
    ),

    criarPrato(
      "feijoada-sabado",
      "Feijoada",
      "Feijoada completa acompanhada de arroz, couve, farofa e torresmo.",
      OPCOES.feijoada
    )
  ]
};

const nomesDias = {
  0: "DOMINGO",
  1: "SEGUNDA-FEIRA",
  2: "TERÇA-FEIRA",
  3: "QUARTA-FEIRA",
  4: "QUINTA-FEIRA",
  5: "SEXTA-FEIRA",
  6: "SÁBADO"
};

const chaveCarrinho = "cantinaRonconCarrinho";

let diaSelecionado = new Date().getDay();
let busca = "";
let carrinho = carregarCarrinho();
const selecoes = {};

const elementos = {
  campoPesquisa: document.getElementById("campoPesquisa"),
  nomeDiaAtual: document.getElementById("nomeDiaAtual"),
  mensagemDia: document.getElementById("mensagemDia"),
  botaoOutroDia: document.getElementById("botaoOutroDia"),
  seletorDias: document.getElementById("seletorDias"),
  avisoFechado: document.getElementById("avisoFechado"),
  listaProdutos: document.getElementById("listaProdutos"),
  nenhumResultado: document.getElementById("nenhumResultado"),

  barraCarrinho: document.getElementById("barraCarrinho"),
  contadorCarrinhoTopo: document.getElementById("contadorCarrinhoTopo"),
  contadorCarrinhoBarra: document.getElementById("contadorCarrinhoBarra"),
  textoQuantidadeCarrinho: document.getElementById("textoQuantidadeCarrinho"),
  totalCarrinhoBarra: document.getElementById("totalCarrinhoBarra"),
  totalCarrinhoPainel: document.getElementById("totalCarrinhoPainel"),
  itensCarrinho: document.getElementById("itensCarrinho"),
  carrinhoVazio: document.getElementById("carrinhoVazio"),
  continuarPedido: document.getElementById("continuarPedido"),

  botaoCarrinhoTopo: document.getElementById("botaoCarrinhoTopo"),
  abrirCarrinho: document.getElementById("abrirCarrinho"),
  botaoFinalizar: document.getElementById("botaoFinalizar"),
  fecharCarrinho: document.getElementById("fecharCarrinho"),
  painelCarrinho: document.getElementById("painelCarrinho"),

  botaoMenu: document.getElementById("botaoMenu"),
  fecharMenu: document.getElementById("fecharMenu"),
  menuLateral: document.getElementById("menuLateral"),
  menuAbrirCarrinho: document.getElementById("menuAbrirCarrinho"),

  fundoModal: document.getElementById("fundoModal")
};

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function carregarCarrinho() {
  try {
    const dadosSalvos = localStorage.getItem(chaveCarrinho);

    if (!dadosSalvos) {
      return [];
    }

    const dados = JSON.parse(dadosSalvos);

    return Array.isArray(dados) ? dados : [];
  } catch (erro) {
    console.error("Erro ao carregar o carrinho:", erro);
    return [];
  }
}

function salvarCarrinho() {
  localStorage.setItem(
    chaveCarrinho,
    JSON.stringify(carrinho)
  );
}

function pratosDoDia() {
  if (diaSelecionado === 0) {
    return [];
  }

  const especiais = pratosPorDia[diaSelecionado] || [];

  return [
    ...especiais,
    ...pratosFixos
  ];
}

function selecaoDoPrato(prato) {
  if (!selecoes[prato.id]) {
    selecoes[prato.id] = {
      opcaoId: prato.opcoes[0].id,
      quantidade: 1
    };
  }

  return selecoes[prato.id];
}

function localizarPrato(id) {
  return pratosDoDia().find(
    prato => prato.id === id
  );
}

function criarCard(prato) {
  const selecao = selecaoDoPrato(prato);

  const opcoes = prato.opcoes.map(opcao => {
    const selecionada =
      selecao.opcaoId === opcao.id
        ? "selecionada"
        : "";

    return `
      <button
        type="button"
        class="opcao-produto ${selecionada}"
        data-acao="selecionar-opcao"
        data-prato="${prato.id}"
        data-opcao="${opcao.id}"
      >
        <span>${opcao.nome}</span>
        <strong>${formatarPreco(opcao.preco)}</strong>
      </button>
    `;
  }).join("");

  return `
    <article
      class="cartao-produto"
      data-id="${prato.id}"
    >
      <div class="area-imagem-produto">
        <div class="produto-sem-foto">
          <span>🍽️</span>
          <small>PRODUTO SEM FOTO</small>
        </div>
      </div>

      <div class="conteudo-produto">
        <h2 class="nome-produto">
          ${prato.nome}
        </h2>

        <p class="descricao-produto">
          ${prato.descricao}
        </p>

        <div class="opcoes-produto">
          ${opcoes}
        </div>

        <div class="acoes-produto">
          <div class="seletor-quantidade">
            <button
              type="button"
              data-acao="diminuir"
              data-prato="${prato.id}"
              aria-label="Diminuir quantidade"
            >
              −
            </button>

            <span data-quantidade="${prato.id}">
              ${selecao.quantidade}
            </span>

            <button
              type="button"
              data-acao="aumentar"
              data-prato="${prato.id}"
              aria-label="Aumentar quantidade"
            >
              +
            </button>
          </div>

          <button
            type="button"
            class="botao-adicionar-produto"
            data-acao="adicionar"
            data-prato="${prato.id}"
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderizarCardapio() {
  elementos.nomeDiaAtual.textContent =
    nomesDias[diaSelecionado];

  const domingo = diaSelecionado === 0;

  elementos.avisoFechado.hidden = !domingo;
  elementos.listaProdutos.hidden = domingo;
  elementos.nenhumResultado.hidden = true;

  if (domingo) {
    elementos.mensagemDia.textContent =
      "Hoje estamos fechados";

    elementos.listaProdutos.innerHTML = "";
    return;
  }

  elementos.mensagemDia.textContent =
    "Pratos disponíveis neste dia";

  const termo = normalizar(busca.trim());

  const pratosFiltrados = pratosDoDia().filter(prato => {
    const textoCompleto =
      `${prato.nome} ${prato.descricao}`;

    return normalizar(textoCompleto)
      .includes(termo);
  });

  elementos.listaProdutos.innerHTML =
    pratosFiltrados
      .map(criarCard)
      .join("");

  elementos.nenhumResultado.hidden =
    pratosFiltrados.length > 0;
}

function selecionarOpcao(pratoId, opcaoId) {
  const prato = localizarPrato(pratoId);

  if (!prato) {
    return;
  }

  const selecao = selecaoDoPrato(prato);
  selecao.opcaoId = opcaoId;

  renderizarCardapio();
}

function mudarQuantidade(pratoId, diferenca) {
  const prato = localizarPrato(pratoId);

  if (!prato) {
    return;
  }

  const selecao = selecaoDoPrato(prato);

  selecao.quantidade = Math.max(
    1,
    Math.min(
      99,
      selecao.quantidade + diferenca
    )
  );

  const contador = document.querySelector(
    `[data-quantidade="${pratoId}"]`
  );

  if (contador) {
    contador.textContent =
      selecao.quantidade;
  }
}

function adicionarAoCarrinho(pratoId, botao) {
  const prato = localizarPrato(pratoId);

  if (!prato) {
    return;
  }

  const selecao = selecaoDoPrato(prato);

  const opcao = prato.opcoes.find(
    item => item.id === selecao.opcaoId
  );

  if (!opcao) {
    return;
  }

  const chave =
    `${prato.id}-${opcao.id}`;

  const itemExistente = carrinho.find(
    item => item.chave === chave
  );

  if (itemExistente) {
    itemExistente.quantidade +=
      selecao.quantidade;
  } else {
    carrinho.push({
      chave,
      nome: prato.nome,
      opcao: opcao.nome,
      preco: opcao.preco,
      quantidade: selecao.quantidade
    });
  }

  selecao.quantidade = 1;

  salvarCarrinho();
  atualizarCarrinho();

  const contador = document.querySelector(
    `[data-quantidade="${pratoId}"]`
  );

  if (contador) {
    contador.textContent = "1";
  }

  if (botao) {
    const textoOriginal =
      botao.textContent;

    botao.textContent =
      "✓ Adicionado";

    botao.disabled = true;

    setTimeout(() => {
      botao.textContent =
        textoOriginal;

      botao.disabled = false;
    }, 900);
  }
}

function renderizarItemCarrinho(item) {
  return `
    <article class="item-carrinho">

      <div class="dados-item-carrinho">
        <strong>${item.nome}</strong>

        <small>${item.opcao}</small>

        <span>
          ${formatarPreco(item.preco * item.quantidade)}
        </span>
      </div>

      <div class="acoes-item-carrinho">

        <div class="seletor-quantidade">

          <button
            type="button"
            data-carrinho="diminuir"
            data-chave="${item.chave}"
          >
            −
          </button>

          <span>${item.quantidade}</span>

          <button
            type="button"
            data-carrinho="aumentar"
            data-chave="${item.chave}"
          >
            +
          </button>

        </div>

        <button
          class="remover-item"
          data-carrinho="remover"
          data-chave="${item.chave}"
        >
          Remover
        </button>

      </div>

    </article>
  `;
}

function atualizarCarrinho() {

  const quantidade = carrinho.reduce(
    (soma, item) => soma + item.quantidade,
    0
  );

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  elementos.contadorCarrinhoTopo.textContent =
    quantidade;

  elementos.contadorCarrinhoBarra.textContent =
    quantidade;

  elementos.textoQuantidadeCarrinho.textContent =
    `${quantidade} ${quantidade === 1 ? "item" : "itens"} no carrinho`;

  elementos.totalCarrinhoBarra.textContent =
    formatarPreco(total);

  elementos.totalCarrinhoPainel.textContent =
    formatarPreco(total);

  elementos.barraCarrinho.hidden =
    quantidade === 0;

  elementos.carrinhoVazio.hidden =
    quantidade > 0;

  elementos.itensCarrinho.hidden =
    quantidade === 0;

  elementos.continuarPedido.disabled =
    quantidade === 0;

  elementos.itensCarrinho.innerHTML =
    carrinho
      .map(renderizarItemCarrinho)
      .join("");
}

function alterarItemCarrinho(chave, diferenca) {

  const item = carrinho.find(
    i => i.chave === chave
  );

  if (!item) return;

  item.quantidade += diferenca;

  if (item.quantidade <= 0) {

    carrinho = carrinho.filter(
      i => i.chave !== chave
    );

  }

  salvarCarrinho();

  atualizarCarrinho();

}

function removerItemCarrinho(chave) {

  carrinho = carrinho.filter(
    item => item.chave !== chave
  );

  salvarCarrinho();

  atualizarCarrinho();

}

function abrirPainelCarrinho() {
  fecharMenuLateral();

  elementos.painelCarrinho.classList.add("aberto");

  elementos.painelCarrinho.setAttribute(
    "aria-hidden",
    "false"
  );

  elementos.fundoModal.hidden = false;

  document.body.classList.add(
    "modal-aberto"
  );
}

function fecharPainelCarrinho() {
  elementos.painelCarrinho.classList.remove(
    "aberto"
  );

  elementos.painelCarrinho.setAttribute(
    "aria-hidden",
    "true"
  );

  atualizarFundo();
}

function abrirMenuLateral() {
  fecharPainelCarrinho();

  elementos.menuLateral.classList.add(
    "aberto"
  );

  elementos.menuLateral.setAttribute(
    "aria-hidden",
    "false"
  );

  elementos.fundoModal.hidden = false;

  document.body.classList.add(
    "modal-aberto"
  );
}

function fecharMenuLateral() {
  elementos.menuLateral.classList.remove(
    "aberto"
  );

  elementos.menuLateral.setAttribute(
    "aria-hidden",
    "true"
  );

  atualizarFundo();
}

function atualizarFundo() {
  const carrinhoAberto =
    elementos.painelCarrinho.classList.contains(
      "aberto"
    );

  const menuAberto =
    elementos.menuLateral.classList.contains(
      "aberto"
    );

  const algumPainelAberto =
    carrinhoAberto || menuAberto;

  elementos.fundoModal.hidden =
    !algumPainelAberto;

  document.body.classList.toggle(
    "modal-aberto",
    algumPainelAberto
  );
}

function fecharTudo() {
  elementos.painelCarrinho.classList.remove(
    "aberto"
  );

  elementos.painelCarrinho.setAttribute(
    "aria-hidden",
    "true"
  );

  elementos.menuLateral.classList.remove(
    "aberto"
  );

  elementos.menuLateral.setAttribute(
    "aria-hidden",
    "true"
  );

  atualizarFundo();
}

function continuarPedido() {
  if (carrinho.length === 0) {
    return;
  }

  alert(
    "Carrinho pronto. A próxima etapa será a finalização do pedido."
  );
}

elementos.campoPesquisa.addEventListener(
  "input",
  evento => {
    busca = evento.target.value;
    renderizarCardapio();
  }
);

elementos.botaoOutroDia.addEventListener(
  "click",
  () => {
    elementos.seletorDias.hidden =
      !elementos.seletorDias.hidden;
  }
);

elementos.seletorDias.addEventListener(
  "click",
  evento => {
    const botao = evento.target.closest(
      "[data-dia]"
    );

    if (!botao) {
      return;
    }

    diaSelecionado = Number(
      botao.dataset.dia
    );

    busca = "";

    elementos.campoPesquisa.value = "";

    elementos.seletorDias.hidden = true;

    renderizarCardapio();
  }
);

elementos.listaProdutos.addEventListener(
  "click",
  evento => {
    const botao = evento.target.closest(
      "[data-acao]"
    );

    if (!botao) {
      return;
    }

    const pratoId =
      botao.dataset.prato;

    const acao =
      botao.dataset.acao;

    if (acao === "selecionar-opcao") {
      selecionarOpcao(
        pratoId,
        botao.dataset.opcao
      );
    }

    if (acao === "diminuir") {
      mudarQuantidade(
        pratoId,
        -1
      );
    }

    if (acao === "aumentar") {
      mudarQuantidade(
        pratoId,
        1
      );
    }

    if (acao === "adicionar") {
      adicionarAoCarrinho(
        pratoId,
        botao
      );
    }
  }
);

elementos.itensCarrinho.addEventListener(
  "click",
  evento => {

    const botao = evento.target.closest(
      "[data-carrinho]"
    );

    if (!botao) {
      return;
    }

    const chave = botao.dataset.chave;
    const acao = botao.dataset.carrinho;

    if (acao === "diminuir") {
      alterarItemCarrinho(
        chave,
        -1
      );
    }

    if (acao === "aumentar") {
      alterarItemCarrinho(
        chave,
        1
      );
    }

    if (acao === "remover") {
      removerItemCarrinho(
        chave
      );
    }

  }
);

elementos.botaoCarrinhoTopo.addEventListener(
  "click",
  abrirPainelCarrinho
);

elementos.abrirCarrinho.addEventListener(
  "click",
  abrirPainelCarrinho
);

elementos.botaoFinalizar.addEventListener(
  "click",
  abrirPainelCarrinho
);

elementos.fecharCarrinho.addEventListener(
  "click",
  fecharPainelCarrinho
);

elementos.continuarPedido.addEventListener(
  "click",
  continuarPedido
);

elementos.botaoMenu.addEventListener(
  "click",
  abrirMenuLateral
);

elementos.fecharMenu.addEventListener(
  "click",
  fecharMenuLateral
);

elementos.menuAbrirCarrinho.addEventListener(
  "click",
  abrirPainelCarrinho
);

elementos.fundoModal.addEventListener(
  "click",
  fecharTudo
);

document.addEventListener(
  "keydown",
  evento => {

    if (evento.key === "Escape") {
      fecharTudo();
    }

  }
);

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

renderizarCardapio();

atualizarCarrinho();

if (elementos.seletorDias) {
  elementos.seletorDias.hidden = true;
}

if (elementos.fundoModal) {
  elementos.fundoModal.hidden = true;
}

if (elementos.painelCarrinho) {
  elementos.painelCarrinho.classList.remove("aberto");
}

if (elementos.menuLateral) {
  elementos.menuLateral.classList.remove("aberto");
}

console.log("Cantina Roncon - Cardápio carregado com sucesso.");
