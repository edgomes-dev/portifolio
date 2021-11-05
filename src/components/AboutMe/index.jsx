import * as C from './styles'
import imgFundo from '../../img/fundo.jpeg'

export const AboutMe = () =>
{
    return(
        <C.Container>
            <C.Img>
                <img className="img" src={imgFundo} alt="Minha imagem" />
            </C.Img>
            <C.Aboutme>
                <h2>Sobre mim</h2>
                <p>Programando desde de 2018 quando fui apresentado a este mundo da tecnologia através do meu tio, desde então eu estou estudando, desenvolvendo e participando de eventos para adquirir cada vez mais conhecimento.</p>
                <p>Meu foco como profissional é me tornar um desenvolvedor full-stack, estou estudando para conseguir atingir este objetivo.</p>
                <C.AboutContacts>
                    <a href="https://docs.google.com/uc?export=download&id=1CKoHHyzViqzaQWjOKOyq3dNcViLGuSrL" alt="Currículo" target="_blank" rel="noreferrer" >Currículo</a>
                    <a href="https://www.linkedin.com/in/edgomesdev/" alt="Linkedin" target="_blank" rel="noreferrer" >Linkedin</a>
                    <a href="https://github.com/edgomes-dev" alt="Github" target="_blank" rel="noreferrer" >Github</a>
                    <a href="https://wa.me/5581981127202" alt="Whatsapp" target="_blank" rel="noreferrer" >Whatsapp</a>
                </C.AboutContacts>
            </C.Aboutme>
        </C.Container>
    )
}