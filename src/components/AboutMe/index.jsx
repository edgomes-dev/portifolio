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
                    <a href="">currículo</a>
                    <a href="https://www.linkedin.com/in/edgomesdev/">Linkedin</a>
                    <a href="https://github.com/edgomes-dev">Github</a>
                    <a href="">Whatsapp</a>
                </C.AboutContacts>
            </C.Aboutme>
        </C.Container>
    )
}