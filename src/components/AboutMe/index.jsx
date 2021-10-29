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
                <h1>Sobre mim</h1>
                <p>Eu sou uma pessoa bastante curioso, que procura sempre está apredendo coisas novas e evoluindo, meu interesse profissional é me tornar full-stack e estou estudando para isso.</p>
                <p>Me dou muito bem com pessoas, me adapto rápido ao ambiente. Gosto de me divertir e sou objetivo</p>
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