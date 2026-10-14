import ZoomButton, { ZoomDialog } from "@/components/SampleZoom";

export default function Home() {
  return (
    <>
<div className="strip"><span>TRAVEL JOURNAL NA PRÁTICA</span><span>24 OUT · 15H · GOOGLE MEET</span></div>

<header id="inicio">
  <div className="wrap">
    <a className="logo" href="#inicio" aria-label="Travel Journal na Prática, início">
      <svg width="35" height="40" viewBox="0 0 35 40" fill="none" stroke="#303a2b" strokeWidth="1.3" strokeLinejoin="round" aria-hidden="true"><path d="M17.5 12.5c-3.6-2.2-8.6-2.9-15-2.3v18.6c6.4-.6 11.4.1 15 2.3 3.6-2.2 8.6-2.9 15-2.3V10.2c-6.4-.6-11.4.1-15 2.3Z"/><path d="M17.5 12.5v18.6"/></svg>
      <span><b>travel journal</b><small>NA PRÁTICA · CORAÇÃO DE PAPEL</small></span>
    </a>
    <nav className="menu" aria-label="Menu principal">
      <a href="#projeto">O projeto</a>
      <a href="#entregaveis">Entregáveis e bônus</a>
      <a href="#duvidas">Dúvidas</a>
    </nav>
    <a className="head-cta" href="#inscricao">Inscrição <span aria-hidden="true">↗</span></a>
  </div>
</header>

<main>
<section className="wrap hero">
  <div className="hero-copy">
    <p className="eyebrow">Travel Journal na Prática · com Silmara</p>
    <h1>Aprenda a montar um<br className="d" /> Travel Journal completo em<br className="d" /> uma imersão de 2 horas</h1>
    <p className="lead">Descubra como combinar fotos, papéis e frases para registrar uma viagem que viveu ou planejar a próxima, com orientação passo a passo, mesmo que seja seu primeiro journal.</p>
    <ul className="check">
      <li>Lista de materiais antecipada.</li>
      <li>Papéis digitais para imprimir.</li>
      <li>Ideias para continuar depois.</li>
    </ul>
    <a className="btn" href="#inscricao">Quero criar meu travel journal <span aria-hidden="true">↗</span></a>
    <p className="date">24 de outubro de 2026 • 15h (Brasília) • Online, via Google Meet</p>
    <p className="prep">Para acompanhar a montagem, separe os materiais e imprima suas fotos antes da imersão.</p>
  </div>
  <div className="hero-art">
    <div className="seal" role="img" aria-label="Imersão de 2 horas"><small>imersão de</small><b>2 horas</b><i>✳</i></div>
    <figure className="polaroid">
      <span className="tape" aria-hidden="true"></span>
      <img src="/assets/oficina-hero.jpg" width="515" height="531" alt="Registro real da oficina presencial: mãos recortando e montando páginas de um travel journal sobre a mesa." />
      <figcaption>memórias da nossa oficina presencial</figcaption>
    </figure>
    <p className="credit">Registro real da oficina presencial da Coração de Papel.</p>
  </div>
</section>

<section className="band bg-1" id="projeto">
  <div className="wrap">
    <div className="split">
      <h2 className="h2">Um tema que todo mundo<br className="d" /> tem vontade de registrar.</h2>
      <p>Uma viagem que marcou ou um destino dos sonhos: o ponto de partida pode ser uma memória que você viveu ou uma história que ainda quer viver.</p>
    </div>
    <div className="cols3 theme-cards">
      <article><span className="n">01</span><h3>Universal</h3><p>Todas têm uma viagem que marcou — ou um destino dos sonhos. O conteúdo já está dentro de cada participante.</p></article>
      <article><span className="n">02</span><h3>Afetivo</h3><p>Viagem mexe com memória e emoção. Fotos, palavras e lembranças ganham significado nas páginas que você cria.</p></article>
      <article><span className="n">03</span><h3>Visual</h3><p>Postais, selos, mapas e washi tapes rendem composições cheias de possibilidades para contar a sua história.</p></article>
    </div>
    <div className="gallery-head">
      <p className="eyebrow">Da nossa oficina presencial</p>
      <h3>Fotos reais de quem colocou a mão no papel.</h3>
      <p>Da escolha dos materiais aos detalhes de cor e escrita, cada página vai ganhando a personalidade de quem cria.</p>
    </div>
    <div className="gallery">
      <figure className="photo"><span className="tape" aria-hidden="true"></span><img src="/assets/galeria-pagina-dupla.jpg" width="349" height="436" alt="Página dupla em construção durante a oficina presencial." /><figcaption>Fotos, recortes e memórias</figcaption></figure>
      <figure className="photo"><span className="tape" aria-hidden="true"></span><img src="/assets/galeria-lettering.jpg" width="349" height="436" alt="Mão praticando lettering em um caderno durante a oficina presencial." /><figcaption>Títulos feitos à mão</figcaption></figure>
      <figure className="photo"><span className="tape" aria-hidden="true"></span><img src="/assets/galeria-fundo-azul.jpg" width="349" height="436" alt="Participante criando um fundo azul nas páginas de um journal." /><figcaption>Cor e composição na prática</figcaption></figure>
    </div>
    <p className="note">Registros da oficina presencial. Na turma online, você acompanha a orientação pelo Google Meet, com seus materiais preparados em casa.</p>
  </div>
</section>

<section className="wrap pains">
  <div className="pains-l">
    <h2 className="h2">Você separa fotos e papéis,<br className="d" /> mas trava na hora de<br className="d" /> montar a página?</h2>
    <p>Dá receio de colar tudo, não gostar do resultado e acabar deixando mais um projeto pela metade. Nessa hora, podem aparecer pensamentos como:</p>
  </div>
  <div className="pains-r">
    <ul className="quotes">
      <li>“Eu não sei o que combina com o quê.”</li>
      <li>“Mudo tudo de lugar e nunca termino.”</li>
      <li>“Nas referências fica bonito. No meu, parece bagunçado.”</li>
      <li>“Tenho tanto material e não consigo montar uma página.”</li>
      <li>“Vou acabar deixando esse caderno parado também.”</li>
      <li>“Tenho medo de estragar as fotos que imprimi.”</li>
      <li>“Desse jeito, minhas lembranças vão continuar dentro da gaveta.”</li>
    </ul>
    <p>Na imersão, você terá um projeto definido e uma sequência para acompanhar, da escolha dos elementos até a colagem.</p>
  </div>
</section>

<section className="band pad100 bg-2">
  <div className="wrap steps-wrap">
    <h2 className="h2">Das lembranças separadas às<br className="d" /> primeiras páginas montadas, em 3<br className="d" /> passos.</h2>
    <div className="steps">
      <article><div className="top"><b>01</b><span aria-hidden="true">↗</span></div><h3>1. Separe as lembranças</h3><p>Escolha as fotos e os registros de uma viagem com a lista de preparação, para chegar à imersão sabendo o que usar.</p></article>
      <article><div className="top"><b>02</b><span aria-hidden="true">↗</span></div><h3>2. Monte com orientação</h3><p>Acompanhe como combinar os papéis e distribuir fotos, recortes e escrita, testando a posição de cada elemento antes de colar.</p></article>
      <article><div className="top"><b>03</b><span aria-hidden="true">↗</span></div><h3>3. Finalize e continue</h3><p>Faça os acabamentos da abertura e da página dupla e aprenda como repetir essa organização nas próximas páginas.</p></article>
    </div>
    <a className="btn" href="#inscricao">Quero aprender passo a passo <span aria-hidden="true">↗</span></a>
    <div className="learn">
      <p className="eyebrow">O que você vai aprender</p>
      <h2 className="h2">Técnicas para transformar lembranças<br className="d" /> em páginas.</h2>
      <p>Composição, colagem, carimbos, cor e títulos: um repertório para combinar diferentes técnicas em uma página autoral.</p>
      <div className="techs">
        <article><img src="/assets/tecnica-composicao.jpg" width="230" height="306" alt="Referência de composição &amp; camadas incluída na proposta da oficina." /><h3>Composição &amp; camadas</h3><p>Distribua os elementos, crie um ponto focal e dê profundidade à página.</p></article>
        <article><img src="/assets/tecnica-colagem.jpg" width="230" height="306" alt="Referência de colagem &amp; adesivos incluída na proposta da oficina." /><h3>Colagem &amp; adesivos</h3><p>Combine papéis e recortes para construir uma composição com a sua cara.</p></article>
        <article><img src="/assets/tecnica-carimbos.jpg" width="230" height="306" alt="Referência de carimbos &amp; tinta incluída na proposta da oficina." /><h3>Carimbos &amp; tinta</h3><p>Explore texturas e detalhes para complementar as suas lembranças.</p></article>
        <article><img src="/assets/tecnica-aquarela.jpg" width="230" height="306" alt="Referência de aquarela &amp; cor incluída na proposta da oficina." /><h3>Aquarela &amp; cor</h3><p>Experimente cores e fundos para dar unidade ao seu journal.</p></article>
        <article><img src="/assets/tecnica-lettering.jpg" width="230" height="306" alt="Referência de lettering &amp; títulos incluída na proposta da oficina." /><h3>Lettering &amp; títulos</h3><p>Use técnicas simples para destacar destinos, datas e pequenas frases.</p></article>
      </div>
      <p className="note">Referências visuais de técnicas apresentadas na proposta da Coração de Papel. Créditos visíveis nas imagens preservados.</p>
    </div>
  </div>
</section>

<section className="dark" id="entregaveis">
  <div className="wrap">
    <h2 className="h2">Veja o que você vai receber para<br className="d" /> começar seu travel journal.</h2>
    <div className="deliver">
      <article><span className="n">01</span><h3>Imersão Travel Journal na Prática —<br className="d" /> 2 horas</h3><p>Acompanhe a montagem da abertura e de uma página dupla, com explicações sobre as escolhas feitas em cada etapa.</p></article>
      <article><span className="n">02</span><h3>Lista Pronta para Começar</h3><p>Saiba quais materiais separar antes da imersão e confira o que você já tem em casa.</p></article>
      <article><span className="n">03</span><h3>Seleção de Fotos e Memórias</h3><p>Um roteiro para escolher as fotos, os acontecimentos e os pequenos registros que vão entrar nas suas primeiras páginas.</p></article>
      <article><span className="n">04</span><h3>Kit Digital da Imersão</h3><p>Imprima os papéis e elementos usados no projeto da aula para acompanhar a montagem com a mesma base.</p></article>
      <article><span className="n">05</span><h3>Roteiro da Página Bem Combinada</h3><p>Consulte a sequência de montagem quando for criar outras páginas e surgir a dúvida: “Por onde eu começo?”</p></article>
      <article><span className="n">06</span><h3>Gravação para Rever e Praticar</h3><p>Volte aos trechos que precisar e acompanhe novamente a montagem no seu ritmo. A gravação estará disponível 24 horas após a aula.</p></article>
    </div>
    <h3 className="more">E para ajudar você a continuar seu journal:</h3>
    <div className="bonus">
      <article><h3>Bônus 01 — O Que Escrever no Meu<br className="d" /> Travel Journal?</h3><p>Perguntas simples para registrar os detalhes da viagem que a foto sozinha não conta.</p></article>
      <article><h3>Bônus 02 — Mapa das Próximas<br className="d" /> Páginas</h3><p>Ideias de páginas sobre passeios, comidas, pessoas e descobertas para continuar preenchendo seu caderno.</p></article>
      <article><h3>Bônus 03 — Etiquetas da Minha<br className="d" /> Viagem</h3><p>Etiquetas para imprimir, recortar e usar nos títulos e nas pequenas anotações do seu journal.</p></article>
    </div>
    <div className="sample">
      <div className="sample-head">
        <p className="eyebrow">Para imprimir, recortar e criar</p>
        <h3>Uma amostra do que vai chegar até você.</h3>
        <p>Postais, paisagens e pequenos cenários para combinar com suas fotos e dar vida às páginas do seu travel journal.</p>
      </div>
      <dl className="stats">
        <div><dt>Arquivos digitais</dt><dd><b>8</b>PDFs</dd></div>
        <div><dt>Materiais e bônus</dt><dd><b>32</b>páginas no total</dd></div>
        <div><dt>Coleção ilustrada</dt><dd><b>58</b>peças para recortar</dd></div>
      </dl>
      <p>Você recebe os 7 PDFs de preparação, kit-base e bônus, mais 1 PDF da coleção ilustrada, com 8 páginas. As 58 peças estão dentro desse PDF: 32 postais, 6 marcadores, 12 recortes e 8 faixas decorativas.</p>
      <div className="sheets">
        <figure className="sheet"><ZoomButton src="/assets/amostra-postais.jpg" title="Postais de viagem"><img src="/assets/amostra-postais.jpg" width="266" height="376" alt="Amostra da série Europa em aquarela, com oito postais ilustrados." /><span>Ampliar amostra <i aria-hidden="true">↗</i></span></ZoomButton><figcaption><h4>Postais de viagem</h4><p>32 postais em quatro séries</p></figcaption></figure>
        <figure className="sheet"><ZoomButton src="/assets/amostra-marcadores.jpg" title="Marcadores de paisagens"><img src="/assets/amostra-marcadores.jpg" width="266" height="376" alt="Folha da coleção com seis marcadores verticais de paisagens." /><span>Ampliar amostra <i aria-hidden="true">↗</i></span></ZoomButton><figcaption><h4>Marcadores de paisagens</h4><p>6 marcadores para recortar</p></figcaption></figure>
        <figure className="sheet"><ZoomButton src="/assets/amostra-ruas.jpg" title="Ruas cheias de histórias"><img src="/assets/amostra-ruas.jpg" width="266" height="376" alt="Folha da coleção com doze ilustrações de ruas, fachadas e pequenos cenários." /><span>Ampliar amostra <i aria-hidden="true">↗</i></span></ZoomButton><figcaption><h4>Ruas cheias de histórias</h4><p>12 recortes de ruas e fachadas</p></figcaption></figure>
        <figure className="sheet"><ZoomButton src="/assets/amostra-paisagens.jpg" title="Paisagens pelo caminho"><img src="/assets/amostra-paisagens.jpg" width="266" height="376" alt="Folha da coleção com oito faixas ilustradas de cidades, vilas e paisagens aquáticas." /><span>Ampliar amostra <i aria-hidden="true">↗</i></span></ZoomButton><figcaption><h4>Paisagens pelo caminho</h4><p>8 faixas decorativas</p></figcaption></figure>
      </div>
      <details className="pdfs">
        <summary>Quais são os 8 arquivos PDF?</summary>
        <ol>
          <li>Lista Pronta para Começar</li>
          <li>Seleção de Fotos e Memórias</li>
          <li>Kit Digital da Imersão</li>
          <li>Roteiro da Página Bem Combinada</li>
          <li>O Que Escrever no Meu Travel Journal?</li>
          <li>Mapa das Próximas Páginas</li>
          <li>Etiquetas da Minha Viagem</li>
          <li>Paisagens para Guardar — Coleção Ilustrada</li>
        </ol>
      </details>
      <p className="note">Imprima apenas as folhas que quiser usar, em A4 e escala 100%. As imagens acima são amostras das folhas que você recebe. Ilustrações criadas com IA para a coleção.</p>
    </div>
    <p className="foot">Os materiais para impressão são digitais. Caderno, fotos impressas e materiais físicos não estão incluídos nesta proposta.</p>
  </div>
</section>

<section className="band pad100 bg-3">
  <div className="wrap">
    <div className="videos-head">
      <h2 className="h2">A oficina que é um sucesso no presencial.<br /><em>Agora, também online.</em></h2>
      <p>Na oficina presencial da Coração de Papel, a mesa se encheu de fotos, papéis, descobertas e histórias. Agora, você pode viver esse momento criativo de onde estiver, com orientação ao vivo da professora Silmara.</p>
    </div>
    <div className="videos">
      <figure><div className="vid"><video controls playsInline preload="none" poster="/assets/video-montagem-orientada.jpg"><source src="/videos/montagem-orientada.mp4" type="video/mp4" /></video><span className="dur">32 s</span></div><figcaption><h3>Montagem com orientação</h3><p>Uma demonstração junto da turma, com os materiais à mão.</p></figcaption></figure>
      <figure><div className="vid"><video controls playsInline preload="none" poster="/assets/video-criando-juntas.jpg"><source src="/videos/criando-juntas.mp4" type="video/mp4" /></video><span className="dur">13 s</span></div><figcaption><h3>Cada uma, sua história</h3><p>Participantes escolhendo, recortando e construindo suas páginas.</p></figcaption></figure>
      <figure><div className="vid"><video controls playsInline preload="none" poster="/assets/video-mesa-de-materiais.jpg"><source src="/videos/mesa-de-materiais.mp4" type="video/mp4" /></video><span className="dur">6 s</span></div><figcaption><h3>Uma mesa de possibilidades</h3><p>Papéis, mapas, washi tapes e lembranças esperando para virar páginas.</p></figcaption></figure>
      <figure><div className="vid"><video controls playsInline preload="none" poster="/assets/video-paginas-em-construcao.jpg"><source src="/videos/paginas-em-construcao.mp4" type="video/mp4" /></video><span className="dur">8 s</span></div><figcaption><h3>As páginas ganhando forma</h3><p>Fotos, recortes e cores se encontram nas páginas durante a criação.</p></figcaption></figure>
    </div>
    <p className="note videos-note">Vídeos reais da oficina presencial. A edição online será pelo Google Meet, em 24 de outubro, às 15h (Brasília). Os materiais físicos mostrados nos registros não estão incluídos na inscrição online.</p>
    <a className="btn" href="#inscricao">Quero participar da imersão <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section className="band pad100 bg-1 who">
  <div className="wrap">
    <h2 className="h2">A Imersão Travel Journal na Prática<br className="d" /> é para quem:</h2>
    <ul className="check">
      <li>Quer começar seu primeiro journal de viagem.</li>
      <li>Está com dúvidas sobre como combinar papéis.</li>
      <li>Cansou de separar materiais e não começar.</li>
      <li>Quer tirar as fotos do celular.</li>
      <li>Quer usar ingressos e lembranças guardadas.</li>
      <li>Está com receio de colar e errar.</li>
      <li>Quer terminar páginas que começou.</li>
      <li>Quer aprender acompanhando uma montagem.</li>
      <li>Quer continuar criando depois da imersão.</li>
    </ul>
    <p className="about">Sobre o projeto: vamos trabalhar as páginas de um caderno pronto. Encadernação e montagem de um álbum inteiro não fazem parte desta proposta.</p>
  </div>
</section>

<section className="wrap">
  <div className="get">
    <div className="get-l">
      <h2 className="h2">Seu próximo projeto já tem<br className="d" /> por onde começar.</h2>
      <p>Ao se inscrever na Imersão Travel Journal na Prática, você recebe:</p>
    </div>
    <div className="get-r">
      <ul className="check">
        <li>Imersão de 2 horas com montagem orientada.</li>
        <li>Lista de materiais para se preparar.</li>
        <li>Roteiro de seleção de fotos e memórias.</li>
        <li>Kit digital com os papéis da aula e coleção com 58 peças ilustradas.</li>
        <li>Roteiro para organizar suas próximas páginas.</li>
        <li>Gravação disponível 24 horas após a aula.</li>
        <li>Bônus: O Que Escrever no Meu Travel Journal?</li>
        <li>Bônus: Mapa das Próximas Páginas.</li>
        <li>Bônus: Etiquetas da Minha Viagem.</li>
      </ul>
      <p>Um projeto para acompanhar, materiais de apoio e uma sequência para continuar criando.</p>
    </div>
  </div>
  <div className="results">
    <p className="eyebrow">Resultados e aprendizados</p>
    <h2 className="h2">Mais que páginas: recursos para<br className="d" /> continuar criando.</h2>
    <div className="grid">
      <article><span className="n">01</span><div><h3>Composição &amp; camadas</h3><p>Como montar uma página equilibrada, com ponto focal e profundidade.</p></div></article>
      <article><span className="n">02</span><div><h3>Lettering para títulos</h3><p>Técnicas simples para destacar destino e data com personalidade.</p></div></article>
      <article><span className="n">03</span><div><h3>Cor, tinta e carimbo</h3><p>Como usar paletas, almofada de tinta e pincéis sem exageros.</p></div></article>
      <article><span className="n">04</span><div><h3>Páginas feitas por você</h3><p>Orientação para criar, colar e finalizar as páginas do seu projeto.</p></div></article>
      <article><span className="n">05</span><div><h3>Repertório criativo</h3><p>Ideias e referências para continuar o journal depois da aula.</p></div></article>
      <article><span className="n">06</span><div><h3>Uma experiência leve</h3><p>Um encontro criativo para relaxar, trocar ideias e se dedicar às suas memórias.</p></div></article>
    </div>
  </div>
</section>

<section className="band pad100 bg-4" id="inscricao">
  <div className="wrap offer">
    <div className="offer-l">
      <h2 className="h2">Reserve duas horas para<br className="d" /> começar a colocar sua<br className="d" /> viagem no papel.</h2>
      <p>Participe da Imersão Travel Journal na Prática e aprenda a montar suas primeiras páginas com orientação.</p>
      <h3>Tudo o que você recebe na inscrição:</h3>
      <ul className="items">
        <li><b>Imersão ao vivo de 2 horas</b><span>Montagem orientada com Silmara, pelo Google Meet.</span></li>
        <li><b>Gravação da aula</b><span>Disponível 24 horas após o encontro para rever e praticar.</span></li>
        <li><b>Lista Pronta para Começar</b><span>Materiais, alternativas e preparação antes da aula.</span></li>
        <li><b>Seleção de Fotos e Memórias</b><span>Roteiro para escolher as imagens e a história das suas páginas.</span></li>
        <li><b>Kit Digital da Imersão</b><span>Papéis, cartões e faixas para imprimir e usar na montagem.</span></li>
        <li><b>Roteiro da Página Bem Combinada</b><span>Passo a passo com esquemas de composição e acabamento.</span></li>
        <li><b>Bônus: O Que Escrever no Meu Travel Journal?</b><span>Perguntas e exercícios para criar suas legendas.</span></li>
        <li><b>Bônus: Mapa das Próximas Páginas</b><span>Ideias e planejamento para continuar o caderno.</span></li>
        <li><b>Bônus: Etiquetas da Minha Viagem</b><span>Etiquetas e bilhetes para imprimir e recortar.</span></li>
        <li><b>Coleção Ilustrada: Paisagens para Guardar</b><span>32 postais, 6 marcadores, 12 recortes e 8 faixas decorativas.</span></li>
      </ul>
      <p className="total">8 arquivos PDF · 32 páginas · 58 peças ilustradas para recortar</p>
      <p className="small">Os materiais são digitais. Caderno, fotos impressas e materiais físicos não estão incluídos.</p>
    </div>
    <aside className="price" aria-label="Inscrição">
      <span className="tape" aria-hidden="true"></span>
      <p className="eyebrow">Travel Journal na Prática</p>
      <p className="from">De <s>R$ 197</s></p>
      <p className="por">por</p>
      <p className="val">R$ 87</p>
      <p className="cash">à vista</p>
      <p className="inst">ou <b>12x de R$ 8,99</b></p>
      <a className="btn" href="https://pay.cakto.com.br/ku22mw5" target="_blank" rel="noopener">Quero garantir minha inscrição <span aria-hidden="true">↗</span></a>
      <p className="via">Finalize sua inscrição no checkout da Cakto.</p>
      <div className="info">
        <p><b>Quando:</b> 24 de outubro de 2026, às 15h (Brasília)</p>
        <p><b>Onde:</b> Google Meet</p>
        <p><b>Duração:</b> 2 horas</p>
        <p><b>Gravação:</b> disponível 24 horas após a aula</p>
      </div>
      <p className="all">Aula ao vivo + gravação + todos os materiais digitais e bônus apresentados nesta página.</p>
    </aside>
  </div>
</section>

<section className="wrap appeal">
  <h2 className="h2">Continuar adiando as páginas da sua viagem?<br /><em>Ou começar com uma montagem guiada?</em></h2>
  <div className="two">
    <p>Sem reservar um momento para começar, as fotos e lembranças podem continuar guardadas, esperando o projeto sair do papel.</p>
    <p>Na imersão, você terá duas horas dedicadas ao seu journal, com um projeto definido e orientação para cada etapa.</p>
  </div>
  <a className="btn" href="#inscricao">Quero começar meu travel journal <span aria-hidden="true">↗</span></a>
</section>

<section className="band pad100 bg-5">
  <div className="wrap teacher">
    <figure>
      <img src="/assets/silmara.jpg" width="434" height="393" alt="Professora Silmara sorrindo e segurando três cadernos decorados em seu espaço de papelaria criativa." />
      <figcaption>Professora Silmara · Coração de Papel</figcaption>
    </figure>
    <div className="teacher-copy">
      <h2 className="h2">Professora Silmara.<br /><em>Coração de Papel.</em></h2>
      <h3>Papelaria criativa é o que vivemos todos os dias.</h3>
      <p>A Coração de Papel é uma loja especializada em journaling e scrapbook: cadernos, papéis, washi tapes, carimbos, adesivos e peças vintage com curadoria nossa.</p>
      <p>Uma marca feita por quem ama papelaria criativa, com materiais selecionados, testados e com pegada vintage.</p>
      <p>Na imersão online, Silmara orienta você a escolher, combinar e organizar os elementos do seu travel journal, passo a passo.</p>
      <blockquote>“Cada página é uma viagem que não acaba.”</blockquote>
    </div>
  </div>
</section>

<section className="wrap refund" id="reembolso">
  <h2 className="h2">Reembolso em até 7 dias<br className="d" /> após a compra.</h2>
  <div className="refund-r">
    <p>Você pode solicitar o reembolso da sua inscrição em até <b>7 dias após a compra</b>.</p>
    <p>Para solicitar, entre em contato com a Coração de Papel pelo e-mail <a href="mailto:falecom@coracaodepapelofcial.com">falecom@coracaodepapelofcial.com</a> ou pelo telefone <a href="tel:+5531992297012">(31) 99229-7012</a>.</p>
  </div>
</section>

<section className="wrap faq" id="duvidas">
  <h2 className="h2">Perguntas frequentes</h2>
  <div>
    <details><summary>Preciso ter experiência com journal?</summary><p>A proposta é acompanhar a montagem desde a escolha dos elementos. Você terá uma sequência para seguir, mesmo que esteja começando.</p></details>
    <details><summary>Quais materiais vou precisar?</summary><p>Vamos usar um caderno pronto, fotos impressas, papéis, tesoura, cola e caneta. A lista definitiva será enviada antes da imersão, com as orientações de preparação.</p></details>
    <details><summary>Vou terminar um travel journal inteiro em duas horas?</summary><p>O projeto previsto é a abertura e uma página dupla. Para acompanhar a montagem durante a imersão, você precisa chegar com os materiais separados e as fotos impressas.</p></details>
    <details><summary>Preciso ter feito uma viagem recentemente?</summary><p>Você pode usar fotos e lembranças de uma viagem antiga ou de um passeio que queira registrar. O importante é escolher os registros antes da aula.</p></details>
    <details><summary>Como vou participar? Posso assistir depois?</summary><p>A imersão acontecerá em Google Meet, no dia 24 de outubro de 2026, às 15h (Brasília). A gravação estará disponível 24 horas após a aula para você rever e praticar.</p></details>
    <a className="btn" href="#inscricao">Quero participar da imersão <span aria-hidden="true">↗</span></a>
  </div>
</section>
</main>

<footer>
  <div className="wrap">
    <a className="f-logo" href="#inicio"><b>travel journal</b><i>na prática</i></a>
    <div className="f-info">
      <p><b>Coração de Papel</b> · CNPJ: 57.653.486/0001-84</p>
      <p>falecom@coracaodepapelofcial.com · (31) 99229-7012</p>
      <nav aria-label="Informações institucionais">
        <a href="https://www.coracaodepapelofcial.com/" target="_blank" rel="noopener">Loja Coração de Papel</a>
        <a href="https://www.coracaodepapelofcial.com/pages/politica-de-privacidade" target="_blank" rel="noopener">Política de privacidade</a>
        <a href="https://www.coracaodepapelofcial.com/pages/termos-de-uso" target="_blank" rel="noopener">Termos de uso</a>
        <a href="#reembolso">Reembolso em até 7 dias após a compra</a>
      </nav>
      <p className="copy">© 2026 Coração de Papel. Todos os direitos reservados.</p>
    </div>
    <a className="to-top" href="#inicio">Voltar ao início ↑</a>
  </div>
</footer>
      <ZoomDialog />
    </>
  );
}
