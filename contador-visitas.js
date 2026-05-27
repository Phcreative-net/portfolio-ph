// Contador de acessos e direitos autorais - PH Creative Portfolio
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

  function iniciarContadorVisitas() {
    if (document.querySelector(".contador-visitas-ph")) return;

    const estiloId = "estilo-contador-visitas-ph";
    if (!document.getElementById(estiloId)) {
      const estilosContador = document.createElement("style");
      estilosContador.id = estiloId;
      estilosContador.textContent = `
        .contador-visitas-ph {
          position: fixed;
          left: 12px;
          bottom: 12px;
          z-index: 9998;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 10px;
          border: 1px solid rgba(245, 220, 130, 0.30);
          border-radius: 999px;
          background: rgba(5, 5, 5, 0.72);
          color: #f5dc82;
          font-size: 12px;
          font-weight: 900;
          line-height: 1;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.30);
          opacity: 0.88;
        }
        .contador-visitas-ph svg {
          width: 15px;
          height: 15px;
          flex: 0 0 auto;
        }
        .contador-visitas-ph span {
          white-space: nowrap;
        }
        @media (max-width: 480px) {
          .contador-visitas-ph {
            left: 8px;
            bottom: 8px;
            padding: 6px 8px;
            font-size: 11px;
          }
        }
      `;
      document.head.appendChild(estilosContador);
    }

    const contador = document.createElement("div");
    contador.className = "contador-visitas-ph";
    contador.setAttribute("aria-label", "Contador de acessos do portfólio");
    contador.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/>
      </svg>
      <span id="contadorVisitasPh">0 acessos</span>
    `;
    document.body.appendChild(contador);

    const numero = document.getElementById("contadorVisitasPh");
    const siteId = "portfolio-ph";
    const chaveLocal = `phcreative-visita-contada-${siteId}`;
    const firebaseConfig = {
      apiKey: "AIzaSyCGaAMXH6JZvkxTjOQswClherBNpO8OlyY",
      authDomain: "ph-creative.firebaseapp.com",
      projectId: "ph-creative",
      storageBucket: "ph-creative.firebasestorage.app",
      messagingSenderId: "838725389820",
      appId: "1:838725389820:web:e361e5c021ae6593277679"
    };

    Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js")
    ]).then(([firebaseApp, firestore]) => {
      const app = firebaseApp.getApps().length ? firebaseApp.getApps()[0] : firebaseApp.initializeApp(firebaseConfig);
      const db = firestore.getFirestore(app);
      const contadorRef = firestore.doc(db, "contadores", siteId);

      firestore.onSnapshot(contadorRef, (snapshot) => {
        const total = snapshot.exists() ? Number(snapshot.data().total) || 0 : 0;
        numero.innerText = `${total} ${total === 1 ? "acesso" : "acessos"}`;
      }, () => {
        numero.innerText = "-- acessos";
      });

      let jaContou = false;
      try {
        jaContou = localStorage.getItem(chaveLocal) === "sim";
      } catch (erro) {
        jaContou = false;
      }

      if (!jaContou) {
        firestore.runTransaction(db, async (transaction) => {
          const atual = await transaction.get(contadorRef);
          const totalAtual = atual.exists() ? Number(atual.data().total) || 0 : 0;
          transaction.set(contadorRef, {
            total: totalAtual + 1,
            atualizadoEm: firestore.serverTimestamp()
          }, { merge: true });
        }).then(() => {
          try {
            localStorage.setItem(chaveLocal, "sim");
          } catch (erro) {
            console.warn("Contador registrado sem salvar no navegador:", erro);
          }
        }).catch((erro) => {
          console.warn("Contador de acessos não atualizado:", erro);
        });
      }
    }).catch((erro) => {
      console.warn("Contador de acessos não carregado:", erro);
      numero.innerText = "-- acessos";
    });
  }

  function iniciarPortfolio() {
    iniciarDireitosAutorais();
    iniciarContadorVisitas();
  }

  if (document.readyState === "complete") {
    iniciarPortfolio();
  } else {
    window.addEventListener("load", iniciarPortfolio, { once: true });
  }
})();
