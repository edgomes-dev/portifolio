import * as C from './styles'
import linkedinImg from '../../img/linkedin.png'
import githubImg from '../../img/github.png'
import whatsappImg from '../../img/whatsapp.png'

export const Footer = () =>
{
    return (
        <C.Container>
            <C.AreaLeft>
                <h3>Meu número</h3>
                <p>(81) 98112-7202</p>
            </C.AreaLeft>
            <C.AreaRight>
                <a href="https://www.linkedin.com/in/edgomesdev/" target="_blank"><img src={linkedinImg} alt="Linkedin" /></a>
                <a href="https://github.com/edgomes-dev" target="_blank"><img src={githubImg} alt="Github" /></a>
                <a href="https://wa.me/5581981127202" target="_blank"><img src={whatsappImg} alt="Whatsapp" /></a>
            </C.AreaRight>
        </C.Container>
    )
}