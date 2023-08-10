import * as C from './styles';
import myImg from '../../img/my.jpeg';

export const AboutMe = () => {
  return (
    <C.Container id="aboutme">
      <C.Img>
        <img className="img" src={myImg} alt="Minha imagem" />
      </C.Img>
      <C.Aboutme>
        <div>
          <h2>Sobre mim</h2>
          <p>
            Meu fascínio pela tecnologia sempre foi uma constante na minha vida, alimentando minha
            curiosidade e levando-me a explorar diversos horizontes. Iniciei minha jornada no mundo
            da Segurança da Informação, até que um dia meu tio me apresentou ao vasto oceano da
            programação. Desde então, essa paixão só cresceu, e venho dedicando-me incansavelmente a
            aprender e evoluir nesse campo.
          </p>

          <p>
            Minha jornada na programação teve início em 2018, e desde então mergulhei em uma
            variedade de cursos e eventos que moldaram minha trajetória. Participei do Pe Coders em
            2018, aprofundei-me em lógica de programação e algoritmos em Python no mesmo ano,
            explorei o universo de HTML e CSS, aprofundei-me em JavaScript e dei passos firmes em
            direção a React e Node em 2019. Em 2020, adquiri conhecimentos em PHP e, mais
            recentemente, em 2022, dediquei-me a um curso de Java.
          </p>

          <p>
            Ao longo do meu percurso, aprendi que a chave reside em focar e direcionar meus
            esforços. No início, a vontade de absorver tudo de uma vez acabou por me dispersar. No
            entanto, hoje, tenho um propósito claro, atuar principalmente no desenvolvimento
            backend, sendo um Arquiteto de Software e realizando também desenvolvimento mobile,
          </p>

          <p>
            Com uma maior bagagem em JavaScript e Java, trago uma perspectiva sólida e versátil para
            a mesa. Agora, estou em busca ativa de uma oportunidade para contribuir em um ambiente
            de trabalho estimulante. Estou ansioso para mergulhar em projetos desafiadores, onde
            possa explorar, aprender e crescer cada vez mais.
          </p>

          <p>
            Se você busca um profissional apaixonado, empenhado em aprimorar-se constantemente e
            comprometido em enfrentar desafios de frente, estou pronto para trazer minha dedicação e
            habilidades para a equipe.
          </p>
        </div>
        <a
          href="https://docs.google.com/uc?export=download&id=1x7Q37KswusDDd85KzDJIBlvpbXJsWzPL"
          rel="noreferrer"
          target="_blank">
          Meu Currículo
        </a>
      </C.Aboutme>
    </C.Container>
  );
};
