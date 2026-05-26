// Contador de acessos - PH Creative Portfolio
(function () {
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

  if (document.readyState === "complete") {
    iniciarContadorVisitas();
  } else {
    window.addEventListener("load", iniciarContadorVisitas, { once: true });
  }
})();