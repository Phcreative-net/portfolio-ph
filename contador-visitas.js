// Direitos autorais - PH Creative Portfolio
(function () {
  function iniciarDireitosAutorais() {
    if (document.querySelector(".direitos-autorais-ph")) return;

    const estiloId = "estilo-direitos-autorais-ph";
    if (!document.getElementById(estiloId)) {
      const estilosDireitos = document.createElement("style");
      estilosDireitos.id = estiloId;
      estilosDireitos.textContent = `
        .direitos-autorais-ph {
          width: min(980px, 92%);
          margin: -62px auto 72px;
          padding: 24px;
          border: 1px solid rgba(216, 184, 90, 0.24);
          border-radius: 26px;
          background: linear-gradient(180deg, rgba(216,184,90,.12), rgba(255,255,255,.035)), #070707;
          color: #d8ceb0;
          text-align: center;
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.34);
        }
        .direitos-autorais-ph strong {
          display: block;
          color: #f5dc82;
          font-size: 1.05rem;
          margin-bottom: 10px;
        }
        .direitos-autorais-ph p {
          max-width: 820px;
          margin: 0 auto;
          color: #d8ceb0;
          line-height: 1.7;
          font-size: 0.96rem;
        }
        .direitos-autorais-ph small {
          display: block;
          margin-top: 12px;
          color: #a99f83;
          line-height: 1.6;
        }
        @media (max-width: 760px) {
          .direitos-autorais-ph {
            margin: -58px auto 54px;
            padding: 20px 16px;
          }
        }
      `;
      document.head.appendChild(estilosDireitos);
    }

    const bloco = document.createElement("section");
    bloco.className = "direitos-autorais-ph";
    bloco.setAttribute("aria-label", "Direitos autorais do portfólio");
    bloco.innerHTML = `
      <strong>© 2026 PH Creative — Todos os direitos reservados.</strong>
      <p>Todo o conteúdo deste portfólio, incluindo textos, artes publicitárias, logos, imagens, layout, identidade visual, projetos e materiais visuais apresentados, pertence à PH Creative / Paulo Henrique.</p>
      <small>É proibida a cópia, reprodução, redistribuição, alteração ou uso comercial sem autorização prévia. Projetos criados com apoio de inteligência artificial também fazem parte deste portfólio autoral.</small>
    `;

    const footer = document.querySelector(".footer");
    if (footer && footer.parentNode) {
      footer.insertAdjacentElement("afterend", bloco);
    } else {
      document.body.appendChild(bloco);
    }
  }

  if (document.readyState === "complete") {
    iniciarDireitosAutorais();
  } else {
    window.addEventListener("load", iniciarDireitosAutorais, { once: true });
  }
})();
