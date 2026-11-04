import InscricaoForm from "@/components/InscricaoForm";

export default function Home() {
  return (
    <>
<div className="strip"><span>OFICINA DE MEMÓRIAS · COM ANDRÉA KOETZLER</span><span>18 DE NOVEMBRO · 13H30 ÀS 17H30</span></div>

<main id="inicio">
<section className="wrap hero">
  <div className="hero-copy">
    <p className="eyebrow">Oficina presencial com Andréa Koetzler · 18 de novembro, das 13h30 às 17h30</p>
    <h1>Oficina de Memórias:<br className="d" /> suas fotos favoritas<br className="d" /> em um álbum feito à mão</h1>
    <p className="lead">Um encontro para celebrar nossas fotografias mais preciosas e colocá-las em um álbum, para revivê-las a qualquer tempo com a família e os amigos.</p>
    <ul className="check">
      <li>Álbum de memórias pronto no fim do encontro.</li>
      <li>38 fotos reveladas e álbum 15×21 inclusos.</li>
      <li>Comidinhas da Luzia Trattoria.</li>
    </ul>
    <a className="btn" href="#participar">Quero participar <span aria-hidden="true">↗</span></a>
  </div>
  <div className="hero-art">
    <div className="seal" role="img" aria-label="Encontro de 4 horas"><small>encontro de</small><b>4 horas</b><i>✳</i></div>
    <figure className="polaroid">
      <span className="tape" aria-hidden="true"></span>
      <img src="/assets/andrea-oficina.jpg" width="825" height="1100" alt="Andréa Koetzler sorrindo, segurando uma caixa e um álbum, diante de uma parede com porta-retratos antigos." />
      <figcaption>memórias que saem da tela</figcaption>
    </figure>
  </div>
</section>

<section className="band bg-1" id="oficina">
  <div className="wrap">
    <div className="split">
      <h2 className="h2">Das telas para o papel,<br className="d" /> <em>com as mãos.</em></h2>
      <p>Uma oportunidade de imprimir as imagens que vivem só em telas e arquivos. Você organiza as fotos do tema que quiser: aniversários, viagens, encontros, festas.</p>
    </div>
    <div className="cols3 theme-cards">
      <article><span className="n">01</span><h3>Dicas de montagem</h3><p>Curadoria, diagramação e personalização: como escolher as fotos e organizar cada página do álbum.</p></article>
      <article><span className="n">02</span><h3>Mão na massa</h3><p>Tocando nas fotografias impressas, cada uma monta o seu álbum para sair do encontro com ele pronto. Um tesouro!</p></article>
      <article><span className="n">03</span><h3>Cartão afetivo</h3><p>Com papéis e acessórios de scrapbook, fazemos um cartão que vira parte do álbum.</p></article>
    </div>
    <div className="info-grid">
      <div>
        <p className="eyebrow">Incluso no valor da oficina</p>
        <ul className="items">
          <li><b>1 álbum acartonado autocolante</b><span>Tamanho 15×21 cm.</span></li>
          <li><b>38 fotos reveladas</b><span>Tamanho 10×15 cm.</span></li>
          <li><b>1 cartão afetivo</b><span>Feito por você durante o encontro.</span></li>
        </ul>
      </div>
      <div>
        <p className="eyebrow">Materiais coletivos</p>
        <p className="info-text">Canetas, furadores, tesouras, fitas e papéis de scrapbook para todas usarem.</p>
        <p className="eyebrow">Quem conduz</p>
        <p className="info-text"><b>Andréa Koetzler</b> organiza e conduz a oficina, com dicas de curadoria, diagramação e personalização do álbum.</p>
        <p className="eyebrow">Local</p>
        <p className="info-text"><b>Luzia Trattoria</b>, um lugar aconchegante para boas conversas, aprendizados e comidinhas gostosas.</p>
      </div>
    </div>
  </div>
</section>

<section className="band pad100 bg-4" id="participar">
  <div className="wrap offer">
    <div className="offer-l">
      <h2 className="h2">Quero participar da<br className="d" /> <em>Oficina de Memórias.</em></h2>
      <p>Deixe seu nome e contato. Você recebe o valor e como confirmar sua vaga.</p>
    </div>
    <InscricaoForm />
  </div>
</section>
</main>

<footer>
  <div className="wrap">
    <a className="f-logo" href="#inicio"><b>Oficina de Memórias</b><i>com Andréa Koetzler</i></a>
    <a className="to-top" href="#inicio">Voltar ao início ↑</a>
  </div>
</footer>
    </>
  );
}
