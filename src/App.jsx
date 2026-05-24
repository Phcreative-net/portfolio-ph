import "./index.css";

const trabalhos = [
  {
    categoria: "Sites",
    titulo: "Sites e páginas profissionais",
    descricao:
      "Links dos meus sites, páginas criadas, experiências digitais e projetos feitos com tecnologia.",
    botao: "Adicionar links dos sites",
  },
  {
    categoria: "Fotos",
    titulo: "Edição fotográfica",
    descricao:
      "Fotos editadas, retratos profissionais, tratamento de imagem, iluminação, fundo e composição.",
    botao: "Adicionar fotos editadas",
  },
  {
    categoria: "YouTube",
    titulo: "Banners para YouTube",
    descricao:
      "Capas, thumbnails, banners e materiais visuais para canais e vídeos.",
    botao: "Adicionar banners",
  },
  {
    categoria: "LinkedIn",
    titulo: "Capas para LinkedIn",
    descricao:
      "Capas profissionais, banners de perfil, identidade visual e apresentação pessoal.",
    botao: "Adicionar capas",
  },
  {
    categoria: "Logos",
    titulo: "Logos e identidade visual",
    descricao:
      "Criação de marcas, logos, símbolos, identidade visual e conceitos para projetos.",
    botao: "Adicionar logos",
  },
  {
    categoria: "Redes sociais",
    titulo: "Artes para redes sociais",
    descricao:
      "Posts, anúncios, peças visuais, banners e artes digitais para divulgação.",
    botao: "Adicionar artes",
  },
];

function App() {
  return (
    <main className="site">
      <header className="header">
        <a className="marca" href="#inicio" aria-label="Voltar para o início">
          <div className="logo">PH</div>
          <div>
            <strong>PH Creative</strong>
            <span>Portfólio profissional</span>
          </div>
        </a>

        <nav>
          <a href="#historia">Ler minha história</a>
          <a href="#galeria">Conhecer meu trabalho</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-conteudo">
          <p className="tag">PH Creative • Portfólio</p>

          <h1>
            Criatividade, tecnologia e inteligência artificial para transformar
            ideias em projetos reais.
          </h1>

          <p className="descricao">
            Prazer, me chamo Paulo Henrique. Esse portfólio não é uma loja.
            É uma parte da minha história, do meu crescimento e da minha vontade
            de trabalhar com tecnologia, criação visual, sites, softwares, jogos
            e soluções digitais.
          </p>

          <div className="botoes">
            <a className="btn principal" href="#galeria">
              Conhecer meu trabalho
            </a>

            <a className="btn secundario" href="#historia">
              Ler minha história
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="circulo-ph">PH</div>
          <p>Portfólio de criação visual, desenvolvimento web e inteligência artificial.</p>
        </div>
      </section>

      <section id="galeria" className="galeria-secao">
        <p className="tag">Galeria profissional</p>
        <h2>Conhecer meu trabalho</h2>

        <p className="galeria-intro">
          Aqui será a área principal dos meus projetos. Vou separar meus trabalhos
          por categoria para mostrar sites, fotos editadas, logos, banners, capas
          e artes para redes sociais de forma organizada.
        </p>

        <div className="grid-galeria">
          {trabalhos.map((item) => (
            <article className="projeto-card" key={item.titulo}>
              <span>{item.categoria}</span>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
              <div className="placeholder">{item.botao}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="historia" className="historia">
        <p className="tag">Minha trajetória</p>
        <h2>Ler minha história</h2>

        <article className="bloco-texto">
          <h3>O que eu faço</h3>

          <p>
            Eu trabalho criando soluções visuais e digitais usando tecnologia,
            criatividade e inteligência artificial como ferramenta principal.
          </p>

          <p>
            Hoje eu desenvolvo sites, crio páginas profissionais, edito fotos,
            faço artes, logos, banners, anúncios e materiais visuais para a
            internet. Meu foco é transformar uma ideia simples em algo bonito,
            útil, organizado e com aparência profissional.
          </p>

          <p>
            Eu não vejo a inteligência artificial como uma trapaça. Eu vejo como
            uma ferramenta. Assim como um fotógrafo usa uma câmera, um editor usa
            um programa de edição e um programador usa um computador, eu uso a
            inteligência artificial para acelerar meu processo, aprender mais
            rápido e criar coisas que antes pareciam impossíveis para mim.
          </p>

          <p>
            A diferença é que eu aprendi a me comunicar com ela. Eu sei pedir,
            ajustar, corrigir, melhorar, testar e transformar uma ideia em
            resultado. Uso a IA para estudar, criar códigos, gerar ideias,
            melhorar imagens, organizar projetos e entender coisas que antes
            pareciam muito distantes da minha realidade.
          </p>

          <p>
            Meu trabalho não é apenas apertar um botão. Meu trabalho é ter visão,
            saber o que quero criar, conversar com a ferramenta certa, corrigir
            os erros, melhorar cada detalhe e ter paciência para chegar em um
            resultado cada vez melhor.
          </p>

          <p>
            A PH Creative nasceu disso: da vontade de criar, aprender, trabalhar
            com tecnologia e transformar conhecimento em oportunidade.
          </p>
        </article>

        <article className="bloco-texto">
          <h3>Sobre mim</h3>

          <p>
            Prazer, me chamo Paulo Henrique, e esse é o meu portfólio.
          </p>

          <p>
            Desde criança eu sempre tive uma ligação muito forte com computador.
            Enquanto muita gente estava jogando bola, eu gostava de ficar no
            quarto mexendo no PC, explorando programas, vendo vídeos, testando
            coisas e tentando entender como aquele mundo funcionava.
          </p>

          <p>
            Eu cresci admirando tecnologia. Sempre achei incrível a ideia de
            programadores, hackers, sistemas, sites, jogos, softwares e tudo que
            envolvia computador. Eu via vídeos no YouTube, assistia pessoas
            criando coisas, programando, construindo sistemas e pensava: um dia
            eu queria saber fazer isso também.
          </p>

          <p>
            Mas, naquela época, eu ainda era só uma criança. Mesmo tendo esse
            sonho, eu não tinha maturidade para parar cinco minutos do meu dia e
            estudar de verdade. Eu gostava, eu admirava, eu sonhava, mas ainda
            não tinha consciência do que aquilo poderia se tornar na minha vida.
          </p>

          <p>
            O tempo passou, e a vida adulta chegou. E quando a vida adulta chega,
            ela não pergunta se você está pronto. Ela simplesmente aparece. Com
            ela vêm as cobranças, a necessidade de ganhar dinheiro, a vontade de
            crescer, de mudar de vida, de não ficar parado e de não aceitar
            qualquer destino como se fosse a única opção.
          </p>

          <p>
            Foi nesse momento que eu comecei a olhar para a tecnologia de outro
            jeito. Eu percebi que aquilo que antes era só admiração poderia virar
            caminho. Poderia virar profissão. Poderia virar renda. Poderia virar
            liberdade.
          </p>

          <p>
            Meu sonho é ser programador. Quero trabalhar com desenvolvimento de
            softwares, sites, jogos, sistemas e soluções digitais. Quero resolver
            problemas com tecnologia. Quero criar coisas úteis. Quero viver disso.
          </p>

          <p>
            E hoje eu estou colocando esse sonho em prática. Estou estudando,
            praticando, errando, corrigindo, aprendendo e evoluindo um pouco
            todos os dias. Ainda tenho muito para aprender, mas agora eu não estou
            mais só assistindo de longe. Agora eu estou fazendo.
          </p>
        </article>

        <article className="bloco-texto">
          <h3>Inteligência e burrice</h3>

          <p>
            Existe uma diferença muito grande entre ter inteligência e usar a
            inteligência.
          </p>

          <p>
            Durante muito tempo, eu tive vontade, curiosidade e interesse, mas
            não tinha atitude suficiente para transformar isso em algo real. Eu
            gostava de tecnologia, mas não estudava como deveria. Eu admirava
            programadores, mas não praticava. Eu sonhava com uma vida diferente,
            mas ainda não tinha entendido que sonho sem ação vira só pensamento
            perdido.
          </p>

          <p>
            Hoje eu vejo isso de outro jeito. Para mim, burrice não é não saber
            alguma coisa. Burrice é ter a chance de aprender e mesmo assim
            escolher ficar parado.
          </p>

          <p>
            Ninguém nasce sabendo programar. Ninguém nasce sabendo criar site.
            Ninguém nasce sabendo editar foto, fazer arte, construir software ou
            usar inteligência artificial. Tudo isso se aprende. O problema é que
            muita gente olha para algo difícil e já desiste antes de tentar.
          </p>

          <p>
            Eu não quero mais viver assim. Eu nasci em um lugar simples, em uma
            realidade onde muita gente se acostuma com pouco, aceita pouco e para
            no tempo. Eu amo o lugar de onde venho, mas isso não significa que eu
            precise viver limitado pela mesma realidade para sempre.
          </p>

          <p>
            Eu quero estudar. Quero crescer. Quero construir meu futuro. Quero
            conhecer o mundo. Quero viajar. Quero trabalhar com tecnologia. Quero
            gerar renda usando minha mente, minhas ideias e minha capacidade de
            aprender.
          </p>

          <p>
            Não quero passar a vida inteira preso em um trabalho que não me leva
            para lugar nenhum. Não quero esperar anos para conseguir comprar uma
            única coisa que desejo. Não quero viver apenas sobrevivendo.
          </p>

          <p>
            Eu também tenho sonhos. Sou um ser humano. Tenho vontade de crescer,
            de conquistar, de ajudar minha família, de mudar minha realidade e de
            provar para mim mesmo que eu consigo chegar mais longe.
          </p>

          <p>
            Quando a inteligência artificial surgiu, eu enxerguei uma
            oportunidade. Muita gente olhou para a IA como brincadeira. Eu olhei
            como ferramenta. Comecei a conversar com ela, testar, pedir ajuda,
            criar coisas, estudar códigos, melhorar textos, gerar ideias e
            entender como poderia transformar isso em trabalho.
          </p>

          <p>
            Com o tempo, percebi que eu conseguia usar a IA para atuar em várias
            áreas criativas: fotografia, edição de imagem, design gráfico,
            criação de sites, textos, ideias, anúncios e projetos digitais. Não
            porque eu sou mágico, mas porque eu aprendi a me comunicar com a
            ferramenta.
          </p>

          <p>
            Depois participei de um evento especial com o Rodolfo, em um curso
            básico de front-end, saindo do zero até automação com inteligência
            artificial. O curso durou uma semana, mas abriu minha mente. Ele me
            mostrou que eu não precisava esperar anos para começar. Eu podia
            começar agora, com o que eu tinha, estudando e usando as ferramentas
            certas.
          </p>

          <p>
            Esse curso me deu mais clareza, mais direção e mais inteligência para
            usar a inteligência artificial de uma forma melhor.
          </p>

          <p>
            Hoje eu consigo criar sites com ajuda da IA. Consigo desenvolver
            ideias que podem gerar renda 24 horas por dia. Consigo montar
            projetos, estudar código, melhorar páginas, criar identidades visuais
            e transformar pensamentos em algo real na tela.
          </p>

          <p>
            E eu pretendo criar muito mais. A PH Creative nasceu dessa mistura:
            sonho, necessidade, criatividade, inteligência artificial, tecnologia
            e vontade de vencer.
          </p>

          <p>
            Não nasceu perfeita. Nasceu real. Nasceu de alguém que cansou de ficar
            parado. De alguém que sempre admirou tecnologia, mas agora decidiu
            entrar de verdade nesse mundo. De alguém que quer aprender
            programação, criar softwares, desenvolver sites, jogos e soluções
            digitais.
          </p>

          <p>
            Esse portfólio não é uma loja. É uma parte da minha história. É o
            começo de uma caminhada.
          </p>

          <p>
            Prazer, me chamo Paulo Henrique. Esse é o meu portfólio. E isso aqui
            é só o começo.
          </p>
        </article>
      </section>

      <footer className="footer">
        <h2>PH Creative</h2>
        <p>
          Portfólio de Paulo Henrique — desenvolvimento web, criação visual,
          inteligência artificial e tecnologia.
        </p>

        <div className="botoes footer-botoes">
          <a
            className="btn whatsapp"
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <a
            className="btn linkedin"
            href="https://www.linkedin.com/in/seu-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
