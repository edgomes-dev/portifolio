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
            Tenho 19 anos e programo desde de 2018 quando fui apresentado a este mundo da tecnologia
            através do meu tio, desde então eu estou estudando, desenvolvendo e participando de
            eventos para adquirir cada vez mais conhecimento.
          </p>
          <p>
            Meu objetivo é me tornar um desenvolvedor fullstack, executando tarefas de ponta a
            ponta, sendo versátil e podendo colaborar mais com o projeto, já que vou ter uma visão
            mais ampla e podendo fazer melhores recomendações.
          </p>
          <p>
            Atualmente, busco novas oportunidades com o objetivo de me inserir em um ambiente
            coletivo e inovador, que me proporcione novos desafios, aprendizados e a possibilidade
            de crescer cada vez mais enquanto pessoa e profissional.
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
