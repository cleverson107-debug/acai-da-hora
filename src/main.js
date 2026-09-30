const image = (id, width = 700) =>
  id.startsWith("art-")
    ? `/assets/${id.slice(4)}.svg`
    : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=76`;
const productArt = (name) => {
  const n = name.toLowerCase();
  if (n.includes("barca")) return "art-barca";
  if (n.includes("salada")) return "art-frutas";
  if (n.includes("milk")) return "art-milkshake";
  if (n.includes("sundae")) return "art-sundae";
  if (n.includes("água") || n.includes("refrigerante")) return "art-bebida";
  if (n.includes("fondue")) return "art-fondue";
  if (n.includes("tigela")) return "art-acai-tigela";
  return "art-acai-copo";
};
const productPhoto = (name) => {
  const n = name.toLowerCase();
  const photos = {
    "açaí puro": "/products/acai-puro-v2-opt.webp",
    "monte seu copo": "/products/monte-copo-v2-opt.webp",
    "monte sua tigela": "/products/monte-tigela-v2-opt.webp",
    "açaí zero": "/products/acai-zero-v2-opt.webp",
    "moda da hora": "/products/combo-moda-opt.webp",
    "açaí + ninho + leite condensado": "/products/combo-ninho-opt.webp",
    "casadinho da hora": "/products/casadinho-v2-opt.webp",
    "açaí + banana + morango": "/products/trufado-frutas-opt.webp",
    "açaí + nutella": "/products/trufado-nutella-opt.webp",
    "açaí + morango + nutella": "/products/trufado-morango-opt.webp",
    "barca da hora": "/products/barca-opt.webp",
    "barca da hora especial": "/products/barca-especial-opt.webp",
    "barca da hora gourmet": "/products/barca-gourmet-opt.webp",
    "milk shake ferrero": "/products/milk-ferrero-opt.webp",
    fondue: "/products/fondue-opt.webp",
  };
  if (photos[n]) return photos[n];
  if (n.includes("salada")) return "/products/salada-opt.webp";
  if (n.includes("milk")) return "/products/milkshake-opt.webp";
  if (n.includes("sundae")) return "/products/sundae-opt.webp";
  if (n.includes("água mineral sem gás"))
    return "/products/agua-sem-gas-v3-opt.webp";
  if (n.includes("água mineral com gás"))
    return "/products/agua-com-gas-v3-opt.webp";
  if (n.includes("refrigerante")) return "/products/refrigerante-opt.webp";
  return "/products/acai-puro-opt.webp";
};

const products = {
  acai: [
    [
      "Açaí Puro",
      "Cremosidade e sabor, as marcas do nosso açaí.",
      16.9,
      "photo-1595981267035-7b04ca84a82d",
    ],
    [
      "Monte seu Copo",
      "Seu copo em 3 camadas + escolha seus adicionais.",
      23,
      "photo-1577805947697-89e18249d767",
      true,
    ],
    [
      "Monte sua Tigela",
      "Sua tigela com os adicionais separados.",
      21.9,
      "photo-1590301157890-4810ed352733",
      true,
    ],
    [
      "Açaí Zero",
      "Todo o sabor, sem adição de açúcar.",
      20.9,
      "photo-1511690743698-d9d85f2fbf38",
    ],
    [
      "Cupuaçu Puro",
      "Cupuaçu puro, cremoso e delicioso.",
      18.9,
      "photo-1488477181946-6428a0291777",
    ],
    [
      "Expresso Açaí + Iogurte Grego",
      "A combinação perfeita de açaí e iogurte grego.",
      18.9,
      "photo-1488477181946-6428a0291777",
    ],
  ],
  combos: [
    [
      "Moda da Hora",
      "Açaí, banana, morango, kiwi, Ninho e granola.",
      29.9,
      "photo-1490474418585-ba9bad8fd0ea",
    ],
    [
      "Açaí + Ninho + Leite Condensado",
      "Açaí cremoso com seus adicionais favoritos.",
      19.9,
      "photo-1577805947697-89e18249d767",
    ],
    [
      "Casadinho da Hora",
      "Cupuaçu, sorvete, creme de maracujá ou iogurte grego.",
      20.9,
      "photo-1488477181946-6428a0291777",
    ],
  ],
  trufados: [
    [
      "Açaí + Banana + Morango",
      "Com chantilly e chocolate.",
      29.9,
      "photo-1461009683693-7b555eb945a4",
    ],
    [
      "Açaí + Nutella",
      "Cremoso, intenso e irresistível.",
      29.9,
      "photo-1577805947697-89e18249d767",
    ],
    [
      "Açaí + Morango + Nutella",
      "Fruta fresca e creme de avelã.",
      32.9,
      "photo-1490474418585-ba9bad8fd0ea",
    ],
  ],
  frutas: [
    [
      "Salada de Frutas Tradicional",
      "Morango, abacaxi, kiwi, manga, mamão, banana e maçã.",
      14.9,
      "photo-1490474418585-ba9bad8fd0ea",
    ],
    [
      "Salada + Leite Condensado",
      "Frutas frescas e aquele toque especial.",
      16.9,
      "photo-1490474418585-ba9bad8fd0ea",
    ],
    [
      "Salada + Iogurte Grego",
      "Leve, cremosa e deliciosa.",
      16.9,
      "photo-1490474418585-ba9bad8fd0ea",
    ],
  ],
  barcas: [
    [
      "Barca da Hora",
      "Para compartilhar: frutas, açaí e toppings.",
      79.9,
      "photo-1490474418585-ba9bad8fd0ea",
    ],
    [
      "Barca da Hora Especial",
      "Uma celebração generosa e deliciosa.",
      89.9,
      "photo-1490474418585-ba9bad8fd0ea",
    ],
    [
      "Barca da Hora Gourmet",
      "Nossa seleção mais especial.",
      99.9,
      "photo-1490474418585-ba9bad8fd0ea",
    ],
  ],
  milk: [
    [
      "Milk Shake Ovoninho",
      "Leite Ninho + Ovomaltine.",
      15.9,
      "photo-1572490122747-3968b75cc699",
    ],
    [
      "Milk Shake Trufado",
      "Nutella + Ovomaltine.",
      17.9,
      "photo-1572490122747-3968b75cc699",
    ],
    [
      "Milk Shake Ferrero",
      "Creme de avelã + castanhas.",
      19.9,
      "photo-1572490122747-3968b75cc699",
    ],
  ],
  sundae: [
    [
      "Sundae Nutella 300ml",
      "Cremosidade em cada colherada.",
      18.9,
      "photo-1563805042-7684c019e1cb",
    ],
    [
      "Sundae Ovomaltine 300ml",
      "O clássico que todo mundo ama.",
      12.9,
      "photo-1563805042-7684c019e1cb",
    ],
    [
      "Sundae Negresco 300ml",
      "Crocante e cremoso.",
      12.9,
      "photo-1563805042-7684c019e1cb",
    ],
  ],
  bebidas: [
    ["Água mineral sem gás", "500ml", 4, "photo-1548839140-29a749e1cf4d"],
    ["Água mineral com gás", "500ml", 5, "photo-1548839140-29a749e1cf4d"],
    [
      "Refrigerante lata",
      "310ml · Normal ou Zero",
      5.5,
      "photo-1629203851122-3726ecdf080e",
    ],
  ],
  quente: [
    [
      "Fondue",
      "350ml de frutas frescas + Nutella.",
      29.9,
      "photo-1481391032119-d89fee407e44",
    ],
  ],
};
const sections = [
  ["acai", "🍇 Açaí", "Escolha seu favorito ou monte do seu jeito."],
  ["combos", "🍇 Combos da Hora", "Combinações feitas para aproveitar."],
  ["trufados", "🍫 Trufados da Hora", "Mais cremosos, mais especiais."],
  ["frutas", "🍓 Salada de Frutas", "Frutas frescas todos os dias."],
  ["barcas", "🛶 Barcas", "Para dividir momentos bons."],
  ["milk", "🥤 Milk Shake", "Gelado, cremoso e irresistível."],
  ["sundae", "🍨 Sundae", "Uma pausa deliciosa."],
  ["bebidas", "🥤 Bebidas", "Para acompanhar seu pedido."],
  ["quente", "🔥 Produtos quentes", "Para aquecer o coração."],
];
const money = (n) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
let cart = [],
  modalProduct = null,
  free = {},
  premium = {},
  extrasOpen = false;

function productCard(p) {
  const [name, desc, price, photo, custom] = p;
  return `<article class="product-card" data-product="${name}"><div class="product-img"><img loading="lazy" decoding="async" width="480" height="384" src="${productPhoto(name)}" alt="${name}"/><button class="plus" aria-label="Adicionar ${name}">+</button></div><div class="product-info"><span class="cashback">● 2% cashback</span><h3>${name}</h3><p>${desc}</p><div class="price-row"><strong>${money(price)}</strong><button class="add">${custom ? "Montar" : "Adicionar"}</button></div></div></article>`;
}
function render() {
  document.querySelector("#app").innerHTML = `
  <div class="site-promo">⚡ Oferta de boas-vindas: copo 500 ml por R$ 23,00</div><main class="wrap"><section id="destaques" class="hero store-hero"><img class="hero-logo" src="/assets/logo-acai-da-hora-v4.webp" width="320" height="320" fetchpriority="high" decoding="async" alt="Marca Açaí da Hora com palmeira, copo de açaí e paisagem tropical"/><div class="hero-copy"><h2>Açaí da Hora</h2><p class="hero-subtitle">O seu momento mais gostoso chegou.</p><div class="service-line"><span>🛵 Entrega rápida</span><b>30 min</b></div><p class="hero-location">Estamos a 1,6 km de você · Atendimento imediato</p><div class="hero-badges"><span>📍 Frete grátis para Rondonópolis</span><span>🛡️ Pedido 100% seguro</span></div><div class="open-badge"><i></i> ESTAMOS ABERTOS</div></div></section><nav class="categories"><div>${["Destaques", "Açaí", "Combos", "Trufados", "Salada de Frutas", "Barcas", "Milk Shake", "Sundae", "Bebidas"].map((x) => `<a href="#${x === "Destaques" ? "destaques" : x.toLowerCase().replaceAll(" ", "")}">${x}</a>`).join("")}</div></nav><section class="hero-offer featured-offer"><div><small>DESTAQUE DO DIA · 11% OFF</small><strong>Copo 500 ml + 5 adicionais grátis</strong></div><b>${money(23)}</b><button class="primary" id="heroBuild">Montar agora <span>→</span></button></section>
  ${sections.map(([key, title, sub]) => `<section id="${key === "frutas" ? "saladadefrutas" : key}" class="section"><div class="section-head"><div><h2>${title}</h2><p>${sub}</p></div>${products[key].length > 3 ? '<button class="see-more">Ver mais →</button>' : ""}</div><div class="product-grid">${products[key].slice(0, 4).map(productCard).join("")}</div></section>`).join("")}
  </main><footer class="site-footer"><div class="footer-inner"><strong>Açaí da Hora</strong><p>Seu açaí favorito, preparado com carinho e entregue até você.</p><nav aria-label="Informações legais"><button data-legal="terms">Termos de Uso</button><span aria-hidden="true">|</span><button data-legal="privacy">Política de Privacidade</button></nav><small>© 2026 Açaí da Hora • Todos os direitos reservados</small></div></footer><div id="cartBar"></div><div id="modalRoot"></div><div id="toast" role="status"></div>`;
  bind();
  updateCart();
  setTimeout(locate, 8000);
}
function bind() {
  document
    .querySelectorAll(".product-card")
    .forEach((el) =>
      el.addEventListener("click", () => openProduct(el.dataset.product)),
    );
  document.querySelector("#heroBuild").onclick = () =>
    openProduct("Monte seu Copo + 3 Adicionais");
  const cartIcon = document.querySelector("#cartIcon");
  if (cartIcon) cartIcon.onclick = openCart;
  document
    .querySelectorAll("[data-legal]")
    .forEach((button) =>
      button.addEventListener("click", () => openLegal(button.dataset.legal)),
    );
}
function findProduct(name) {
  return (
    Object.values(products)
      .flat()
      .find((p) => p[0] === name) || [
      "Monte seu Copo 500ml",
      "Seu copo em 3 camadas + escolha seus adicionais.",
      23,
      "art-acai-copo",
      true,
    ]
  );
}
function openProduct(name) {
  modalProduct = findProduct(name);
  free = {};
  premium = {};
  extrasOpen = false;
  if (modalProduct[4] || name.includes("Monte")) renderCustomizer();
  else {
    cart.push({ name, price: modalProduct[2] });
    toast("Adicionado ao pedido");
    updateCart();
  }
}
function totalFree() {
  return Object.values(free).reduce((a, b) => a + b, 0);
}
const premiumPrices = {
  Uva: 2,
  Abacaxi: 2,
  Mel: 3,
  "Creme de Avelã": 4,
  Nutella: 4,
  Ovomaltine: 3,
  "Ferrero Rocher": 5,
};
function totalPremium() {
  return Object.entries(premium).reduce(
    (a, [n, q]) => a + premiumPrices[n] * q,
    0,
  );
}
function renderCustomizer(scrollTop = 0) {
  const f = [
    "Morango",
    "Banana",
    "Kiwi",
    "Manga",
    "Granola",
    "Leite Ninho",
    "Leite condensado",
    "Paçoca",
    "Coco ralado",
  ];
  const p = premiumPrices;
  const qty = (name, paid = false) =>
    `<div class="option"><span>${name}${paid ? ` <small>+ ${money(p[name])}</small>` : ""}</span><div><button data-q="${name}" data-paid="${paid}" data-d="-">−</button><b>${(paid ? premium : free)[name] || 0}</b><button data-q="${name}" data-paid="${paid}" data-d="+">+</button></div></div>`;
  const base = modalProduct[2];
  document.querySelector("#modalRoot").innerHTML =
    `<div class="overlay"><div class="modal"><button class="close" aria-label="Fechar">×</button><div class="modal-title"><span>🍇</span><div><h2>${modalProduct[0]}</h2><p>Escolha seus adicionais favoritos.</p></div></div><div class="gift"><b>🎁 5 adicionais grátis</b><span>${totalFree()} / 5 escolhidos ${totalFree() === 5 ? "✓" : ""}</span></div><button class="extras-toggle">🍓 <span><b>Escolha seus adicionais</b><small>Grátis · escolha até 5</small></span><i>${extrasOpen ? "⌃" : "⌄"}</i></button><div class="extras ${extrasOpen ? "expanded" : ""}"><h4>GRÁTIS</h4>${f.map((x) => qty(x)).join("")}<h4>⭐ PREMIUM</h4>${Object.keys(
      p,
    )
      .map((x) => qty(x, true))
      .join(
        "",
      )}</div><div class="order"><div><small>SEU PEDIDO</small><b>${modalProduct[0]}</b><p>${
      Object.entries(free)
        .filter((x) => x[1])
        .map(([n, q]) => `✓ ${q > 1 ? q + "x " : ""}${n}`)
        .join(" · ") || "Escolha seus adicionais"
    }</p></div><strong>${money(base + totalPremium())}</strong></div><button class="primary full" id="confirm">Adicionar ao pedido <span>→</span></button></div></div>`;
  const modal = document.querySelector(".modal");
  modal.scrollTop = scrollTop;
  document.querySelector(".close").onclick = closeModal;
  document.querySelector(".overlay").onclick = (e) => {
    if (e.target.className === "overlay") closeModal();
  };
  document.querySelector(".extras-toggle").onclick = () => {
    extrasOpen = !extrasOpen;
    document.querySelector(".extras").classList.toggle("expanded", extrasOpen);
    document.querySelector(".extras-toggle i").textContent = extrasOpen
      ? "⌃"
      : "⌄";
  };
  document.querySelectorAll("[data-q]").forEach(
    (b) =>
      (b.onclick = () => {
        const isPaid = b.dataset.paid === "true",
          bag = isPaid ? premium : free,
          n = b.dataset.q;
        if (b.dataset.d === "+" && !isPaid && totalFree() >= 5)
          return toast("Você já escolheu os 5 adicionais grátis");
        bag[n] = Math.max(0, (bag[n] || 0) + (b.dataset.d === "+" ? 1 : -1));
        b.parentElement.querySelector("b").textContent = bag[n];
        const chosen = totalFree();
        document.querySelector(".gift span").textContent =
          `${chosen} / 5 escolhidos ${chosen === 5 ? "✓" : ""}`;
        document.querySelector(".order p").textContent =
          Object.entries(free)
            .filter((entry) => entry[1])
            .map(([name, quantity]) =>
              `✓ ${quantity > 1 ? quantity + "x " : ""}${name}`,
            )
            .join(" · ") || "Escolha seus adicionais";
        document.querySelector(".order > strong").textContent = money(
          base + totalPremium(),
        );
      }),
  );
  document.querySelector("#confirm").onclick = () => {
    cart.push({
      name: modalProduct[0],
      price: base + totalPremium(),
      detail: Object.entries(free)
        .filter((x) => x[1])
        .map(([n, q]) => `${q}x ${n}`)
        .join(", "),
    });
    closeModal();
    updateCart();
    toast("Açaí adicionado ao pedido!");
  };
}
function closeModal() {
  document.querySelector("#modalRoot").innerHTML = "";
}
function updateCart() {
  const sum = cart.reduce((a, x) => a + x.price, 0),
    root = document.querySelector("#cartBar"),
    count = cart.length,
    badge = document.querySelector("#cartIcon i");
  if (badge) badge.textContent = count;
  root.innerHTML = !count
    ? ""
    : `<button id="cartOpen"><span>🛒</span><div><b>Seu pedido</b><small>${count} ${count === 1 ? "item" : "itens"} • ${money(sum)}</small></div><strong>Ver carrinho →</strong></button>`;
  if (count) document.querySelector("#cartOpen").onclick = openCart;
}
function openCart() {
  let sum = cart.reduce((a, x) => a + x.price, 0);
  const minimumOrder = 10;
  const belowMinimum = cart.length > 0 && sum < minimumOrder;
  const missing = Math.max(0, minimumOrder - sum);
  document.querySelector("#modalRoot").innerHTML =
    `<div class="overlay"><aside class="cart-panel"><button class="close">×</button><h2>Seu pedido</h2>${cart.length ? cart.map((x, i) => `<div class="cart-line"><div><b>${x.name}</b><small>${x.detail || ""}</small></div><strong>${money(x.price)}</strong><button data-remove="${i}">×</button></div>`).join("") : "<p>Seu carrinho está vazio.</p>"}<div class="cart-total"><span>Total</span><b>${money(sum)}</b></div>${belowMinimum ? `<div class="minimum-order" role="alert"><b>Pedido mínimo de ${money(minimumOrder)}</b><span>Adicione mais ${money(missing)} para continuar.</span></div>` : ""}<button class="primary full" id="checkout" ${!cart.length ? "disabled" : ""}>Finalizar pedido →</button></aside></div>`;
  document.querySelector(".close").onclick = closeModal;
  const checkout = document.querySelector("#checkout");
  if (checkout)
    checkout.onclick = () => {
      if (belowMinimum)
        return toast(`O pedido mínimo é ${money(minimumOrder)}. Faltam ${money(missing)}.`);
      toast("Pedido pronto para finalizar!");
    };
  document.querySelectorAll("[data-remove]").forEach(
    (b) =>
      (b.onclick = () => {
        cart.splice(b.dataset.remove, 1);
        updateCart();
        openCart();
      }),
  );
}
function openLegal(type) {
  const terms = {
    title: "Termos de Uso",
    content: `<p>Ao utilizar o site Açaí da Hora, você concorda em fornecer informações corretas para a realização e entrega do pedido.</p><h3>Pedidos e pagamentos</h3><p>Os produtos, preços e disponibilidade podem ser atualizados sem aviso prévio. O pedido mínimo é de R$ 10,00. A confirmação do pedido ocorre após a aprovação do pagamento.</p><h3>Entrega</h3><p>O prazo informado é uma estimativa e pode variar por distância, trânsito, clima ou volume de pedidos. Confira o endereço antes de concluir a compra.</p><h3>Cancelamentos</h3><p>Solicitações devem ser feitas o mais rápido possível. Depois que o preparo for iniciado, o cancelamento poderá não estar disponível.</p><h3>Atendimento</h3><p>Em caso de dúvidas ou problemas com o pedido, entre em contato pelos canais de atendimento informados pela loja.</p>`,
  };
  const privacy = {
    title: "Política de Privacidade",
    content: `<p>O Açaí da Hora respeita sua privacidade e utiliza apenas os dados necessários para atender, processar e entregar seus pedidos.</p><h3>Dados utilizados</h3><p>Podemos utilizar nome, telefone, endereço de entrega, itens do pedido e localização aproximada obtida pelo endereço IP.</p><h3>Finalidade</h3><p>Essas informações são usadas para calcular a área de atendimento, processar o pedido, realizar a entrega, oferecer suporte e prevenir fraudes.</p><h3>Compartilhamento</h3><p>Os dados são compartilhados somente com serviços essenciais ao pedido, como pagamento e entrega, quando necessário. Não vendemos informações pessoais.</p><h3>Seus direitos</h3><p>Você pode solicitar informações, correção ou exclusão dos seus dados, respeitadas as obrigações legais de conservação.</p>`,
  };
  const documentData = type === "privacy" ? privacy : terms;
  document.querySelector("#modalRoot").innerHTML = `<div class="overlay legal-overlay"><article class="modal legal-modal" role="dialog" aria-modal="true" aria-labelledby="legal-title"><button class="close" aria-label="Fechar">×</button><h2 id="legal-title">${documentData.title}</h2><div class="legal-content">${documentData.content}</div><button class="primary full legal-close">Entendi</button></article></div>`;
  document.querySelector(".legal-modal .close").onclick = closeModal;
  document.querySelector(".legal-close").onclick = closeModal;
  document.querySelector(".legal-overlay").onclick = (event) => {
    if (event.target === event.currentTarget) closeModal();
  };
}
function toast(msg) {
  const t = document.querySelector("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}
async function locate() {
  const location = document.querySelector(".hero-location");
  if (!location) return;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2500);
  try {
    const r = await fetch("https://ipwho.is/", { signal: controller.signal });
    const d = await r.json();
    if (d.success && d.city)
      location.textContent = `Entregamos em ${d.city} · Atendimento imediato`;
  } catch {}
  finally {
    clearTimeout(timeout);
  }
}
render();

