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
            Sou um amante da tecnologia, sempre fui curioso e gostei bastante de olhar tudo. De
            inicio comecei com segurança da informação até meu tio me apresentar ao oceano de
            informações que é a programação, gostei muito e venho aprendendo desde então. Estudo
            programação desde de 2018, realizei diversos cursos e eventos, como: Pe Coders(2018),
            Lógica de programação e algoritmos em python(2018), curso de html e css(2018),
            javascript básico(2019), react e node(2019), curso de php(2020), curso de java(2022).
          </p>
          <p>
            Estudo tem bastante tempo, o que me atrapalhou foi não definir um caminho, acabei
            aprendendo muitas coisas de uma vez. Porém agora já tenho um foco em mente, no atual
            momento estou estudando com foco o backend para dominar conceitos e ter o básico para
            tudo, quero me tornar alguém que resolva problemas independente de onde seja(front,
            back, mobile ou infra). Tenho mais experiência com Javascript e Java.
          </p>
          <p>
            Estou em busca de uma oportunidade na área, preciso muito de um ambiente de trabalho
            para explorar e aprender cada vez mais.
          </p>
        </div>
        <a
          href="https://docs.google.com/uc?export=download&id=1oWw5BrYHPT1EpjLV1C7UJ0nzu8mv0l7B"
          rel="noreferrer"
          target="_blank">
          Meu Currículo
        </a>
      </C.Aboutme>
    </C.Container>
  );
};
